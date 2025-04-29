import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useState, useRef, useEffect, FC } from 'react';
import * as THREE from 'three';

interface DynamicTextureProps {
    image: string | null;
    text: string;
    position: { x: number; y: number };
    scale: number;
    onTextureReady: (texture: THREE.Texture) => void;
}

const DynamicTexture: FC<DynamicTextureProps> = ({ image, text, position, scale, onTextureReady }) => {
    const canvasRef = useRef<HTMLCanvasElement>(document.createElement('canvas'));

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Background fill
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const updateTexture = () => {
            if (text) {
                ctx.fillStyle = '#000000';
                ctx.font = 'bold 80px Arial';
                ctx.fillText(text, position.x, position.y + 400);
            }
            const texture = new THREE.CanvasTexture(canvas);
            onTextureReady(texture);
        };

        if (image) {
            const img = new Image();
            img.src = image;
            img.onload = () => {
                ctx.drawImage(
                    img,
                    position.x,
                    position.y,
                    img.width * scale,
                    img.height * scale
                );
                updateTexture();
            };
        } else {
            updateTexture();
        }
    }, [image, text, position, scale, onTextureReady]);

    return null;
};

interface TShirtProps {
    texture: THREE.Texture | null;
}

const TShirt: FC<TShirtProps> = ({ texture }) => {
    const { nodes, materials } = useGLTF('/tshirt_model.glb') as any;

    useEffect(() => {
        if (texture && materials?.TShirtMaterial) {
            materials.TShirtMaterial.map = texture;
            materials.TShirtMaterial.needsUpdate = true;
        }
    }, [texture, materials]);

    if (!nodes || !materials) return null;

    return (
        <mesh geometry={nodes.TShirt.geometry} material={materials.TShirtMaterial} />
    );
};

const TshirtDesign: FC = () => {
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [userText, setUserText] = useState<string>('');
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 200, y: 200 });
    const [scale, setScale] = useState<number>(0.5);
    const [dynamicTexture, setDynamicTexture] = useState<THREE.Texture | null>(null);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setUploadedImage(url);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const speed = 10;
            if (e.key === 'w') setPosition((p) => ({ ...p, y: p.y - speed }));
            if (e.key === 's') setPosition((p) => ({ ...p, y: p.y + speed }));
            if (e.key === 'a') setPosition((p) => ({ ...p, x: p.x - speed }));
            if (e.key === 'd') setPosition((p) => ({ ...p, x: p.x + speed }));
            if (e.key === '+') setScale((s) => s + 0.1);
            if (e.key === '-') setScale((s) => Math.max(0.1, s - 0.1));
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', zIndex: 1, top: 20, left: 20 }}>
                <input type="file" onChange={handleUpload} />
                <input
                    type="text"
                    placeholder="Enter text"
                    value={userText}
                    onChange={(e) => setUserText(e.target.value)}
                />
                <p>Use W A S D to move design, + / - to scale</p>
            </div>

            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight />
                <directionalLight position={[5, 5, 5]} />
                <DynamicTexture
                    image={uploadedImage}
                    text={userText}
                    position={position}
                    scale={scale}
                    onTextureReady={setDynamicTexture}
                />
                <TShirt texture={dynamicTexture} />
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default TshirtDesign;

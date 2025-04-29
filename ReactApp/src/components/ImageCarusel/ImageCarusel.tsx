import { useEffect, useState } from 'react';
import './ImageCarusel.css';

{/* <ImageCarusel url={'https://picsum.photos/v2/list'} /> */ }
export const ImageCarusel = ({ url }: { url: string }) => {
    const [imgData, setImgData] = useState([]);
    console.log(" imgData:", imgData)
    const [isLoading, setIsloading] = useState(false);
    const [showImage, setShowImage] = useState(0)
    console.log(" showImage:", showImage)

    const fetchImages = async () => {
        setIsloading(true);
        try {
            const res = await fetch(`${url}?page=1&limit=5`);
            const data = await res.json()
            if (data) {
                setImgData(data);
                setIsloading(false);
            }
        } catch (err) {
            console.error(err);
            setIsloading(false);
        }
    }

    useEffect(() => {
        fetchImages();
    }, [])

    const leftClick = () => {
        setShowImage(prev => prev === 0 ? prev : prev - 1)
    }
    const rightClick = () => {
        setShowImage(prev => prev < imgData.length - 1 ? prev + 1 : prev)
    }

    return (
        isLoading ? (<h2>Loading...</h2>) :
            (<div className='container'>
                <h2 className='buttons buttons-left' onClick={leftClick}>L</h2>
                {imgData.map((imageItem, idx) => {
                    return (showImage === idx && <img className='imageCont' alt='mageItem.download_url' src={imageItem.download_url} />)
                })}
                <h2 className='buttons buttons-right' onClick={rightClick}>R</h2>


            </div>)
    )
}
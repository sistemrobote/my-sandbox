import { useEffect, useState, useRef } from 'react'
import './styles.css'

// https://dummyjson.com/products?limit=10&skip=x

export const LoadMore = () => {
    const [images, setImages] = useState<{ id: number; thumbnail: string }[]>([]);
    const [count, setCount] = useState(0);
    // useRef - used for strict mode only to avoid the issue when fetchData called twice(no need in prod)
    const hasFetched = useRef(false)

    const fetchData = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 10}`)
            const data = await res.json()
            if (data?.products && data?.products.length) setImages((prev) => [...prev, ...data.products])
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        if (!hasFetched.current) {
            hasFetched.current = true
            fetchData()
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count, hasFetched])

    const handleClickMore = () => {
        setCount(count + 1)
    }
    return (
        <div className="container">
            <h2>Load more</h2>
            {(images?.length) ? <div className='wrapper'>{images?.map(img => {
                return (<img key={img.id} className='image' src={img.thumbnail}></img>)
            })}</div> : null}
            <button className='button' onClick={handleClickMore}>More items</button>
        </div>)
}
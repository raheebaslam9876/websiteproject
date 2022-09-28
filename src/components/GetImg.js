import { React, useState, useEffect } from 'react'
import Unsplash from '../api/Unsplash'
const GetImg = () => {
    const [myImg, setmyImg] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await Unsplash.get('/photos')
            console.log(response)
            setmyImg(response.data)
        }
        fetchData();
    }, [])
    return (
        <>
            <div>{myImg.length}</div>
        </>
    )
}

export default GetImg
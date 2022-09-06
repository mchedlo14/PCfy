import React,{useEffect} from 'react'
import './style/Laptops.css'
import axios from 'axios'
const Laptops = ({setPageCounter,imgSrc,laptopID,laptopName,firstName,lastName}) => {


    useEffect(() => {
        const getFullInfo = async () => {
            const res = axios.get(`https://pcfy.redberryinternship.ge/api/laptop/${laptopID}?token=09e8c043d7b0049d5331f959bd4e3e12`);
            const data = await res;
            if(data) {
                const info = data.data;
                console.log(info)
            }
        }
        getFullInfo()
    },[])
    const handleClick = (e) => {
        console.log(e)
        setPageCounter(5)
    }
    
  return (
    <div className='laptop-container'>
        <img src={'https://pcfy.redberryinternship.ge' + imgSrc}  alt='laptop_image' className='laptop-image'/>
        <div>
            <h2 className='username'>{firstName} {lastName}</h2>
            <p className='laptop'>{laptopName}</p>
            <p className='more' onClick={(e) => handleClick(e)}>მეტის ნახვა</p>
        </div>
    </div>
  )
}

export default Laptops
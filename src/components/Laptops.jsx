import React,{useEffect} from 'react'
import './style/Laptops.css'
import axios from 'axios'
const Laptops = ({setPageCounter,imgSrc,laptopID,laptopName,firstName,lastName}) => {

    const handleClick = (e) => {
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
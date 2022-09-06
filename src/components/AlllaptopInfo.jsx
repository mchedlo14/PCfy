import React,{useEffect} from 'react'
import { useState } from 'react'
import './style/Alllaptopinfo.css'
import axios from 'axios'


const AlllaptopInfo = () => {
  const [lapInfo,setLapInfo] = useState({})

  useEffect(() => {
    const getFullInfo = async () => {
        const res = axios.get(`https://pcfy.redberryinternship.ge/api/laptop/3045?token=09e8c043d7b0049d5331f959bd4e3e12`);
        const data = await res;
        if(data) {
            const info = data.data;
            setLapInfo(info.data)
            console.log(info.data)
        }
    }
    getFullInfo()
  },[])
  return (
    <>
    {Object.keys(lapInfo).length === 0 ? <p>Loading</p>
    :
    <div className='info-wrapper'>
    <div className='laptop-info-container'>
      <div className='info-image-container'>
        <img src={'https://pcfy.redberryinternship.ge' +lapInfo.laptop.image}/>
        <div className='about'>
          <p>სახელი: {lapInfo.user.name} {lapInfo.user.surname}</p>
          <p>თიმი: </p>
          <p>პოზიცია: </p>
          <p>მეილი: {lapInfo.user.email}</p>
          <p>ტელ.ნომერი: {lapInfo.user.phone_number}</p>
       </div>
      </div>
      <div className='hrl'></div>
      <div className='laptop-info'>
        <div className='about-laptop-container'>
          <div>
            <p>ლეპტოპის სახელი:</p>
            <p>ლეპტოპის ბრენდი:</p>
            <p>RAM:</p>
            <p>მეხსიერების ტიპი: </p>
          </div>
          <div>
            <p>{lapInfo.laptop.name}</p>
            <p>{lapInfo.laptop.name}</p>
            <p>{lapInfo.laptop.ram}</p>
            <p>{lapInfo.laptop.hard_drive_type}</p>
          </div>
        </div>
        <div className='about-cpu'>
          <div>
            <p>CPU</p>
            <p>CPU-ს ბირთვი</p>
            <p>CPU-ს ნაკადი</p>
          </div>
          <div>
            <p>{lapInfo.laptop.cpu.name}</p>
            <p>{lapInfo.laptop.cpu.cores}</p>
            <p>{lapInfo.laptop.cpu.threads}</p>
          </div>
        </div>
        
      </div>
      <div className='hrl'></div>
      <div className='state-container'>
        <div>
          <p>ლეპტოპის მდგომარეობა:</p>
          <p>ლეპტოპის ფასი:</p>
        </div>
        <div>
          <p>{lapInfo.laptop.state}</p>
          <p>{lapInfo.laptop.price}</p>
        </div>
        <div className='date-container'>
          <p>შევსების რიცხვი: </p>
          <p>{lapInfo.laptop.purchase_date}</p>
        </div>
      </div>
    </div>
  </div>}
    </>
  )
}

export default AlllaptopInfo
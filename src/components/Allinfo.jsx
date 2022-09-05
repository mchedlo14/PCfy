import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './style/Allinfo.css'
import axios from 'axios'

const Allinfo = ({pageCounter,setPageCounter}) => {
    const [fullInfo,setFullInfo] = useState({})
    useEffect(() => {
        const getFullInfo = async () => {
            const res = axios.get('https://pcfy.redberryinternship.ge/api/laptop/3036?token=09e8c043d7b0049d5331f959bd4e3e12');
            const data = await res;
            if(data) {
                const fullinfo = data.data;
                setFullInfo(fullinfo.data);
            }
        }
        getFullInfo()
    },[])
    console.log(fullInfo)
  return (
    <section>
        <div className='laptop-info-container'>
            <div className='left-arrow-containerr' onClick={() => setPageCounter(pageCounter - 1)}>
               <img src='/images/left-arrow.png' /> 
            </div>
            <p>ლეპტოპის ინფო</p>
        </div>

        <div className='full-info-container'>
            <div className='full-info-image'>
                <img src={'https://pcfy.redberryinternship.ge'+fullInfo.laptop.image} alt='laptop-image'/>
                <div className='details'>
                    <p>სახელი: {fullInfo.user.name}</p>
                    <p>თიმი:</p>
                    <p>პოზიცია:</p>
                    <p>მეილი: {fullInfo.user.email}</p>
                    <p>ტელ. ნომერი:</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Allinfo
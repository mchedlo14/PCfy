import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './style/Laptopspage.css'
import axios from 'axios'
const Laptopspage = ({setPageCounter}) => {
    const [list, setList] = useState([]);
    useEffect(() => {
        const getLaptops = async () => {
            const res = axios.get('https://pcfy.redberryinternship.ge/api/laptops?token=09e8c043d7b0049d5331f959bd4e3e12');
            const data = await res;
            if(data) {
                const laptops = data.data;
                setList(laptops.data);
            }
        }
        getLaptops()
    },[])
  return (
    <section className='laptops-wrapper'>
        <div className='lists'>
            <div className='back-div' onClick={() => setPageCounter(0)}>
                <img src='/images/left-arrow.png' alt='image'/>
            </div>
            <p>ჩანაწერების სია</p>
        </div>
        <div className='laptops-parents'>
            {list.map((e, i) => {
              return <div className='laptop-container'>
                <img src={'https://pcfy.redberryinternship.ge' + e.laptop.image}  alt='laptop_image' className='laptop-image'/>
                <div>
                    <h2 className='username'>{e.user.name}</h2>
                    <p className='laptop'>{e.laptop.name}</p>
                    <p className='more' onClick={() => setPageCounter(5)}>მეტის ნახვა</p>
                </div>
              </div>
        })}
        </div>
    </section>
  )
}

export default Laptopspage
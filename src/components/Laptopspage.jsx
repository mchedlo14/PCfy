import React, { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './style/Laptopspage.css'
import axios from 'axios'
import Laptops from './Laptops'
const Laptopspage = ({setPageCounter}) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const getLaptops = async () => {
            const res = axios.get('https://pcfy.redberryinternship.ge/api/laptops?token=09e8c043d7b0049d5331f959bd4e3e12');
            const data = await res;
            if(data) {
                const laptops = data.data;
                setList(laptops.data);
                console.log(laptops.data)
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
            {list && list.map((e, i) => {
              return <Laptops setPageCounter={setPageCounter}  key={i} imgSrc={e.laptop.image} laptopID={e.laptop.id} laptopName={e.laptop.name}
              firstName={e.user.name} lastName={e.user.surname}/> 
             })}
        </div>
    </section>
  )
}

export default Laptopspage
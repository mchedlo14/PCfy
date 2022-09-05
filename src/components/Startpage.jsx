import React, { useEffect } from 'react'
import { useState } from 'react'
import './style/Startpage.css'
const Startpage = ({pageCounter,setPageCounter}) => {
  const [image,setImage] = useState(false)

  const imageRes = () => {
    window.innerWidth < 500 ? setImage(true) : setImage(false)
  }

  window.addEventListener('resize',imageRes)

  useEffect(() => {
    imageRes()
  },[])
  
  return (  
    <section className='landing-wrapper'>
        <div className='logo-container'>
          <img src='/images/logo.png' alt='Logo'/>
        </div>

        <div className='main-image-container'>
        { image ? <img src='/images/secondmain.png' alt='secondmain'/>
          :
          <img src='/images/startimage.png' alt='startimage'/>
          }
        </div>

        <div className='buttons-wrapper'>
            <button className='start-btn' onClick={() =>setPageCounter(pageCounter + 1) }>ჩანაწერის დამატება</button>
            <button className='list-btn'>ჩანაწერების სია</button>
        </div>
    </section>
  )
}

export default Startpage
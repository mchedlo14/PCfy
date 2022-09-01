import React from 'react'
import './style/Startpage.css'
const Startpage = ({pageCounter,setPageCounter}) => {
  return (
    <section className='landing-wrapper'>
        <div className='logo-container'>
            <img src='/images/logo.png' alt='Logo'/>
        </div>

        <div className='main-image-container'>
            <img className='main-image' src='/images/startimage.png'/>
        </div>

        <div className='buttons-wrapper'>
            <button className='start-btn' onClick={() =>setPageCounter(pageCounter + 1) }>ჩანაწერის დამატება</button>
            <button className='list-btn'>ჩანაწერების სია</button>
        </div>
    </section>
  )
}

export default Startpage
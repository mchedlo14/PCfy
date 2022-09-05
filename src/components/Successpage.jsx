import React from 'react'
import './style/Successpage.css'

const Successpage = () => {
  return (
    <section className='success-wrapper'>
        <div className='success-container'>
            <img src='/images/Frame.svg' alt='succesimage' className='success-image'/>
            <p>ჩანაწერი დამატებულია!</p>
            <div className='success-buttons-container'>
                <button className='success-list'>სიაში გადაყვანა</button>
                <button className='success-main'>მთავარი</button>
            </div>
        </div>
    </section>
  )
}

export default Successpage
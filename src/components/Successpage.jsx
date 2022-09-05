import React from 'react'
import './style/Successpage.css'

const Successpage = ({pageCounter,setPageCounter}) => {
  return (
    <section className='success-wrapper'>
        <div className='success-container'>
            <img src='/images/Frame.svg' alt='succesimage' className='success-image'/>
            <p>ჩანაწერი დამატებულია!</p>
            <div className='success-buttons-container'>
                <button className='success-list' onClick={() => setPageCounter(pageCounter + 1)}>სიაში გადაყვანა</button>
                <button className='success-main' onClick={() => setPageCounter(0)}>მთავარი</button>
            </div>
        </div>
    </section>
  )
}

export default Successpage
import React from 'react'
import './style/Pagenav.css'

const Pagenav = ({pageCounter,setPageCounter}) => {
  return (
    <div className='page-nav'>
        <div className='arrow-container' onClick={() => setPageCounter(pageCounter - 1)}>
            <img src='/images/left-arrow.png' alt='arrowimage'/>
        </div>
        <div className='content-container'>
            <p>თანამშრომლის ინფო</p>
            <p>ლეპტოპის მახასიათებლები</p>  
         </div>
    </div> 
  )
}

export default Pagenav
import React, { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Pagenav from './Pagenav'
import './style/Laptopreq.css'

const Laptopreq = ({pageCounter,setPageCounter}) => {
    const [laptopName,setLaptopName] = useState('')


    const laptopTextRef = useRef(null)
    const laptopInputRef = useRef(null)
    const laptoprequestRef = useRef(null)


    //laptop name validation
    useEffect(() => {
        const regex = /^[a-zA-Z0-9 !@#$%^&*()_+=\"]*$/i;

        if(regex.test(laptopName)){
            laptopTextRef.current.style.color = '#000000'
            laptopInputRef.current.style.borderColor = '#8AC0E2'
            laptoprequestRef.current.style.color = '#000000'
        }else{
            laptopTextRef.current.style.color = '#E52F2F'
            laptopInputRef.current.style.borderColor = '#E52F2F'
            laptoprequestRef.current.style.color = '#E52F2F'
        }

        if(laptopName.length === 0){
            laptopTextRef.current.style.color = '#000000'
        }



    }, [laptopName])
  return (
    <section className='laptop-wrapper'>
        <Pagenav pageCounter={pageCounter} setPageCounter={setPageCounter}/>
        <div className='laptop-form-wrapper'>
            <div className='laptop-form'>
                <div className='image-container'>
                    <div className='upload-container'>
                        <p>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
                        <button className='upload-btn'>ატვირთე</button>
                    </div>
                </div>

                <div className='laptop-brand-container'>
                    <div className='laptop-name'>
                        <p ref={laptopTextRef}>ლეპტოპის სახელი</p>
                        <input type='text' placeholder='HP' className='laptop-input' ref={laptopInputRef} onChange={e => setLaptopName(e.target.value)}/>
                        <p className='laptop-request-text' ref={laptoprequestRef}>ლათინური ასოები, ციფრები, !@#$%^&*()_+= </p>
                    </div>

                    <div className='laptop-dropdown-container'>
                        <p>აქ იქნება დრიოპდაუნი</p>
                    </div>
                </div>

                <div className='horizonal-line'></div>
                
                <div className='cpu-container'>
                    <div className='cpu-dropdown'></div>
                    <div className='cpu-input-container'>
                        <p>CPU-ს ბირთვი</p>
                        <input type='text' className='cpu-input'/>
                        <p>მხოლოდ ციფრები</p>
                    </div>
                    <div className='cpu-n-container'>
                        <p>CPU-ს ნაკადი</p>
                        <input type='text' className='cpu-n'/>
                        <p>მხოლოდ ციფრები</p>
                    </div>
                </div>

                <div className='laptop-ram-container'>
                    <div className='ram-container'>
                        <p className='ram-text'>ლეპტოპის RAM(gb)</p>
                        <input type='text' className='ram-input'/>
                        <p className='ram-request-text'>მხოლოდ ციფრები</p>
                    </div>

                    <div className='disk-container'>
                        <p className='mem-type'>მეხსიერების ტიპი</p>
                        <div className='radio-container'>
                            <input type="radio" value="Male"/> SSD
                            <input type="radio" value="Female"/> HDD
                        </div>
                    </div>

                </div>

                <div className='horizonal-line'></div>

                <div className='laptop-price-container'>
                    <div className='date-container'>
                        <p className='date-text'>შეძენის რიცხვი(არჩევითი)</p>
                        <input type='date' className='date-input'/>
                    </div>
                    <div className='laptop-price'>
                        <p className='date-text'>ლეპტოპის ფასი</p>
                        <input type='text' className='date-input'/>
                    </div>
                </div>

                <div className='condition-container'>
                    <p>ლეპტოპის მდგომარეობა</p>
                    <div className='radio-container'>
                            <input type="radio" value="Male" /> ახალი
                            <input type="radio" value="Female"/> მეორადი
                    </div>
                </div>

                <div className='laptop-buttons-container'>
                    <button className='back-btn' onClick={() => setPageCounter(pageCounter - 1)}>უკან</button>
                    <button className='save-btn'>დამახსოვრება</button>
                </div>

            </div>

        </div>

        <div>
            <img src='/images/redberry-logo.png'/>
        </div>
    </section>
  )
}

export default Laptopreq
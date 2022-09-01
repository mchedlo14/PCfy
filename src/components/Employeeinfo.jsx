import React, { useEffect, useRef, useState } from 'react'
import './style/Employeeinfo.css'


const Employeeinfo = ({pageCounter,setPageCounter}) => {

    const [data, setData] = useState([]);
    const [positionData,setPositionData] = useState([])
    const [fname,setFname] = useState('')

    // ref
    const fnameRefInput = useRef(null)
    const fnameTextRef = useRef(null)
    const fnameRequestRef = useRef(null)

    useEffect(()=> {
        const getData = async () => {
            const response = await fetch("https://pcfy.redberryinternship.ge/api/teams");
            const data = await response.json();
            setData(data.data);
        }

        getData();
    }, [])

    useEffect(() => {
        const getPositionData = async () => {
            const response = await fetch("https://pcfy.redberryinternship.ge/api/positions")
            const positionData = await response.json()
            setPositionData(positionData.data)
        }

        getPositionData()
    },[])

    // firstname validation 
    useEffect(() => {
        if (/^[a-zA-Z]+$/.test(fname) ){
            fnameRefInput.current.style.borderColor = '#E52F2F'
            fnameTextRef.current.style.color = '#E52F2F'
            fnameRequestRef.current.textContent = 'გამოიყენე ქართული ასოები'
            fnameRequestRef.current.style.color = '#E52F2F'
        }else{
            console.log('not english language')
            fnameRefInput.current.style.borderColor = '#8AC0E2'
            fnameTextRef.current.style.color = '#000000'
            fnameRequestRef.current.textContent = 'მინიმუმ 2 სიმბოლო, ქართული ასოები'
            fnameRequestRef.current.style.color = '#2E2E2E'
        }

        if(fname.length < 2){
            fnameRefInput.current.style.borderColor = '#E52F2F'
            fnameRequestRef.current.textContent = 'მინიმუმ 2 სიმბოლო'
            fnameRequestRef.current.style.color = '#E52F2F'
        }

        if(fname.length === 0){
            fnameRefInput.current.style.borderColor = '#8AC0E2'
            fnameRequestRef.current.textContent = 'მინიმუმ 2 სიმბოლო, ქართული ასოები'
            fnameRequestRef.current.style.color = '#2E2E2E'
        }
    },[fname])
  return (
    <section className='employee-wrapper'>
            <div className='page-nav'>
                <div className='arrow-container' onClick={() => setPageCounter(pageCounter - 1)}>
                    <img src='/images/left-arrow.png'/>
                </div>
                <div className='content-container'>
                    <p>თანამშრომლის ინფო</p>
                    <p>ლეპტოპის მახასიათებლები</p>  
                </div>
            </div> 

            <div className='employee-form-wrapper'>

                <div className='employee-form-parent'>
                    <div className='user-container'>
                        <div className='name-container'>
                            <p className='name-text' ref={fnameTextRef}>სახელი</p>
                            <input type='text' className='name-input' onChange={e => setFname(e.target.value)} ref={fnameRefInput}/>
                            <p className='request-text' ref={fnameRequestRef}>მინიმუმ 2 სიმბოლო, ქართული ასოები</p>
                        </div>

                        <div className='lastname-container'>
                            <p className='lname-text'>გვარი</p>
                            <input type='text' className='lname-input'/>
                            <p className='request-text'>მინიმუმ 2 სიმბოლო, ქართული ასოები</p>
                        </div>
                    </div>


                    {/* custom select tag team */}
                    <div className='select'>
                        <select>
                            <option selected disabled>თიმი</option>
                            {data && data.map((e,i) => {
                                return <option key={i} value="development">{e.name}</option>
                            })}
                        </select>
                    </div>

                    
                    {/* custom select tag osition */}
                    <div className='select'>
                        <select>
                            <option selected disabled>პოზიცია</option>
                            {positionData && positionData.map((e,i) => {
                                return <option key={i} value="development">{e.name}</option>
                            })}
                        </select>
                    </div>

                    <div className='mail-container'>
                        <p className='phone-text'>მეილი</p>
                        <input type='text' className='mail-input'/>
                        <p className='mail-request-text'>უნდა მთავრდებოდეს @redberry.ge-ით</p>
                    </div>

                    <div className='phone-container'>
                        <p className='phone-text'>ტელეფონის ნომერი</p>
                        <input type='text' className='phone-input'/>
                        <p className='phone-request-text'>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</p>
                    </div>

                    <div>
                        <button className='next-btn'>შემდეგი</button>
                    </div>

                </div>


            </div>

        <div>
            <img src='/images/redberry-logo.png'/>
        </div>

        
    </section>
  )
}

export default Employeeinfo



{/* <div className='select-container'>
<select>
    {data && data.map((e,i) => {
        return <option key={i} value="development">{e.name}</option>
    })}
</select>
</div> */}
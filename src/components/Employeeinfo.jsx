import React, { useEffect, useRef, useState } from 'react'
import './style/Employeeinfo.css'


const Employeeinfo = ({pageCounter,setPageCounter}) => {

    const [data, setData] = useState([]);
    const [positionData,setPositionData] = useState([]);
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [mail,setMail] = useState('');

    // lname ref
    const fnameRefInput = useRef(null)
    const fnameTextRef = useRef(null)
    const fnameRequestRef = useRef(null)

    //lname ref
    const lnameRefInput = useRef(null)
    const lnameTextRef = useRef(null)
    const lnameRequestRef = useRef(null)

    //mail ref
    const mailRefInput = useRef(null)
    const mailTextRef = useRef(null)
    const mailRequestRef = useRef(null)
    

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

    //lastname validation
    useEffect(() => {
        if (/^[a-zA-Z]+$/.test(lname) ){
            lnameRefInput.current.style.borderColor = '#E52F2F'
            lnameTextRef.current.style.color = '#E52F2F'
            lnameRequestRef.current.textContent = 'გამოიყენე ქართული ასოები'
            lnameRequestRef.current.style.color = '#E52F2F'
        }else{
            lnameRefInput.current.style.borderColor = '#8AC0E2'
            lnameTextRef.current.style.color = '#000000'
            lnameRequestRef.current.textContent = 'მინიმუმ 2 სიმბოლო, ქართული ასოები'
            lnameRequestRef.current.style.color = '#2E2E2E'
        }

        if(lname.length < 2){
            lnameRefInput.current.style.borderColor = '#E52F2F'
            lnameRequestRef.current.textContent = 'მინიმუმ 2 სიმბოლო'
            lnameRequestRef.current.style.color = '#E52F2F'
        }

        if(lname.length === 0){
            lnameRefInput.current.style.borderColor = '#8AC0E2'
            lnameRequestRef.current.textContent = 'მინიმუმ 2 სიმბოლო, ქართული ასოები'
            lnameRequestRef.current.style.color = '#2E2E2E'
        }

    },[lname])


    useEffect(() => {
        const Regex = /^[a-z0-9](.?[a-z0-9]){2,}@redberry.ge$/i;
        if(Regex.test(mail)){
            mailRefInput.current.style.borderColor = '#8AC0E2'
            mailRequestRef.current.textContent = 'უნდა მთავრდებოდეს @redberry.ge-ით'
            mailRequestRef.current.style.color = '#2E2E2E'
            mailTextRef.current.style.color = '#2E2E2E'
        }else{
            mailRefInput.current.style.borderColor = '#E52F2F'
            mailRequestRef.current.textContent = 'უნდა მთავრდებოდეს @redberry.ge-ით'
            mailRequestRef.current.style.color = '#E52F2F'
            mailTextRef.current.style.color = '#E52F2F'
            
        }

        if(mail.length === 0){
            mailRefInput.current.style.borderColor = '#8AC0E2'
            mailRequestRef.current.textContent = 'უნდა მთავრდებოდეს @redberry.ge-ით'
            mailRequestRef.current.style.color = '#2E2E2E'
            mailTextRef.current.style.color = '#2E2E2E'
        }
    },[mail])
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
                            <input type='text' className='name-input' required onChange={e => setFname(e.target.value)} ref={fnameRefInput}/>
                            <p className='request-text' ref={fnameRequestRef}>მინიმუმ 2 სიმბოლო, ქართული ასოები</p>
                        </div>

                        <div className='lastname-container'>
                            <p className='lname-text' ref={lnameTextRef}>გვარი</p>
                            <input type='text' className='lname-input' required onChange={e => setLname(e.target.value)} ref={lnameRefInput}/>
                            <p className='request-text' ref={lnameRequestRef}>მინიმუმ 2 სიმბოლო, ქართული ასოები</p>
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


                    {/* mail */}
                    <div className='mail-container'>
                        <p className='phone-text' ref={mailTextRef}>მეილი</p>
                        <input type='text' className='mail-input' onChange={e => setMail(e.target.value)} ref={mailRefInput}/>
                        <p className='mail-request-text' ref={mailRequestRef}>უნდა მთავრდებოდეს @redberry.ge-ით</p>
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
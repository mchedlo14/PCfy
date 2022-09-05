import React, { useEffect, useRef, useState } from 'react'
import Pagenav from './Pagenav';
import './style/Employeeinfo.css'


const Employeeinfo = ({pageCounter,setPageCounter,fdata}) => {

    const [data, setData] = useState([]);
    const [positionData,setPositionData] = useState([]);
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [mail,setMail] = useState('');
    const [phone,setPhone] = useState('');
    const [team,setTeam] = useState(null);
    const [position,setPosition] = useState(0);
    const [displayTeam,setDisplayTeam] = useState(false)
    const [displayPosition,setDisplayPosition] = useState(false)

    const [errors] = useState({fname:false,lname:false,mail:false,phone:false,team:false,position:false})

    // lname ref
    const fnameRefInput = useRef(null)
    const fnameTextRef = useRef(null)
    const fnameRequestRef = useRef(null)
    const fnameSuccess = useRef(null)

    //lname ref
    const lnameRefInput = useRef(null)
    const lnameTextRef = useRef(null)
    const lnameRequestRef = useRef(null)
    const lnameSuccess = useRef(null)

    //mail ref
    const mailRefInput = useRef(null)
    const mailTextRef = useRef(null)
    const mailRequestRef = useRef(null)
    const mailSuccess = useRef(null)

    //mobile ref
    const phoneRefInput = useRef(null)
    const phoneTextRef = useRef(null)
    const phoneRequestRef = useRef(null)
    const phoneSuccess = useRef(null)

    //select option ref 
    const teamRef = useRef(null)
    const positionRef = useRef(null)
    

    useEffect(()=> {
        const getData = async () => {
            const response = await fetch("https://pcfy.redberryinternship.ge/api/teams");
            const data = await response.json();
            setData(data.data);
        }

        getData();
    }, [])

    useEffect(() => {

        if(team){
            const getPositionData = async () => {
                const response = await fetch("https://pcfy.redberryinternship.ge/api/positions")
                const positionData = await response.json()
                const options = positionData.data.filter(e => {
                   return  e.team_id === team.id
                })
                setPositionData(options)
            }
            getPositionData()
        }

    }, [team])

    // firstname validation 
    useEffect(() => {
        if (/^[a-zA-Z]+$/.test(fname)){
            fnameRefInput.current.style.borderColor = '#E52F2F'
            fnameTextRef.current.style.color = '#E52F2F'
            fnameRequestRef.current.textContent = 'გამოიყენე ქართული ასოები'
            fnameRequestRef.current.style.color = '#E52F2F'
        }else if(!/^[a-zA-Z]+$/.test(fname) && fname.length > 2){
            fnameRefInput.current.style.borderColor = '#8AC0E2'
            fnameTextRef.current.style.color = '#000000'
            fnameRequestRef.current.textContent = 'მინიმუმ 2 სიმბოლო, ქართული ასოები'
            fnameRequestRef.current.style.color = '#2E2E2E'
            fnameSuccess.current.style.display = 'block'
            errors.fname = true
            fdata.user.name = fname

        }else{
            fnameRefInput.current.style.borderColor = '#E52F2F'
            fnameRequestRef.current.textContent = 'მინიმუმ 2 სიმბოლო'
            fnameRequestRef.current.style.color = '#E52F2F'
            fnameTextRef.current.style.color = '#E52F2F'
            fnameSuccess.current.style.display = 'none'
        }

        if(fname.length === 0){
            fnameRefInput.current.style.borderColor = '#8AC0E2'
            fnameRequestRef.current.textContent = 'მინიმუმ 2 სიმბოლო, ქართული ასოები'
            fnameRequestRef.current.style.color = '#2E2E2E'
            fnameTextRef.current.style.color = '#000000'       
        }
    },[fname])

    //lastname validation
    useEffect(() => {
        if (/^[a-zA-Z]+$/.test(lname) ){
            lnameRefInput.current.style.borderColor = '#E52F2F'
            lnameTextRef.current.style.color = '#E52F2F'
            lnameRequestRef.current.textContent = 'გამოიყენე ქართული ასოები'
            lnameRequestRef.current.style.color = '#E52F2F'
        }else if(!/^[a-zA-Z]+$/.test(fname) && lname.length > 2){
            lnameRefInput.current.style.borderColor = '#8AC0E2'
            lnameTextRef.current.style.color = '#000000'
            lnameRequestRef.current.textContent = 'მინიმუმ 2 სიმბოლო, ქართული ასოები'
            lnameRequestRef.current.style.color = '#2E2E2E'
            lnameSuccess.current.style.display = 'block'
            errors.lname = true
            fdata.user.surname = lname
        }else{
            lnameRefInput.current.style.borderColor = '#E52F2F'
            lnameRequestRef.current.textContent = 'მინიმუმ 2 სიმბოლო'
            lnameRequestRef.current.style.color = '#E52F2F'
            lnameTextRef.current.style.color = '#000000'
            lnameSuccess.current.style.display = 'none'
        }


        if(lname.length === 0){
            lnameRefInput.current.style.borderColor = '#8AC0E2'
            lnameRequestRef.current.textContent = 'მინიმუმ 2 სიმბოლო, ქართული ასოები'
            lnameRequestRef.current.style.color = '#2E2E2E'
        }

    },[lname])


    // mail validation
    useEffect(() => {
        const Regex = /^[a-z0-9](.?[a-z0-9]){2,}@redberry.ge$/i;
        if(Regex.test(mail)){
            mailRefInput.current.style.borderColor = '#8AC0E2'
            mailRequestRef.current.textContent = 'უნდა მთავრდებოდეს @redberry.ge-ით'
            mailRequestRef.current.style.color = '#2E2E2E'
            mailTextRef.current.style.color = '#2E2E2E'
            mailSuccess.current.style.display = 'block'
            errors.mail = true
            fdata.user.email = mail
        }else{
            mailRefInput.current.style.borderColor = '#E52F2F'
            mailRequestRef.current.textContent = 'უნდა მთავრდებოდეს @redberry.ge-ით'
            mailRequestRef.current.style.color = '#E52F2F'
            mailSuccess.current.style.display = 'none'
            mailTextRef.current.style.color = '#E52F2F'
        }

        if(mail.length === 0){
            mailRefInput.current.style.borderColor = '#8AC0E2'
            mailRequestRef.current.textContent = 'უნდა მთავრდებოდეს @redberry.ge-ით'
            mailRequestRef.current.style.color = '#2E2E2E'
            mailTextRef.current.style.color = '#2E2E2E'
        }
    },[mail])

    //phone validation
    useEffect(() => {
        if(phone[0] === "9" && phone.length === 12){
            phoneRefInput.current.style.borderColor = '#8AC0E2'
            phoneRequestRef.current.textContent = 'უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს'
            phoneRequestRef.current.style.color = '#2E2E2E'
            phoneTextRef.current.style.color = '#000000'
            phoneSuccess.current.style.display = 'block'
            errors.phone = true
            fdata.user.phone_number = parseInt(phone)
        }else{
            phoneRefInput.current.style.borderColor = '#E52F2F'
            phoneRequestRef.current.textContent = 'უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს'
            phoneRequestRef.current.style.color = '#E52F2F'
            phoneTextRef.current.style.color = '#E52F2F'
            phoneSuccess.current.style.display = 'none'
        }

        if(phone.length === 0){
            phoneRefInput.current.style.borderColor = '#8AC0E2'
            phoneRequestRef.current.textContent = 'უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს'
            phoneRequestRef.current.style.color = '#2E2E2E'
            phoneTextRef.current.style.color = '#000000'
        }
    },[phone])

    const hamdleTeamSelect = (e) => {
        setTeam(e)
        setDisplayTeam(false)
        setPosition(null)
        fdata.user.team_id = e.id
    }
    
    const handlePositionSelect = (e) => {
        setPosition(e)
        setDisplayPosition(false)
        fdata.user.position_id = e.id
    }


    const validate = () => {

        if(team!==0){
            errors.team = true;
            teamRef.current.style.borderColor = 'transparent'
            fdata.user.position_id = position
        }else{
            teamRef.current.style.borderColor = '#E52F2F'
        }

        if(position!==''){
            positionRef.current.style.borderColor = 'transparent'
            errors.position = true;
        }else{
            positionRef.current.style.borderColor = '#E52F2F'
        }

        let isTrue = Object.values(errors).every(element => element === true)

        if(isTrue){
            setPageCounter(pageCounter + 1)
        }
        console.log(positionRef)
    }
  return (
    <section className='employee-wrapper'>
        
            <Pagenav pageCounter={pageCounter} setPageCounter={setPageCounter}/>

            <div className='employee-form-wrapper'>
                <div className='employee-form-parent'>
                    <div className='user-container'>
                        <div className='name-container'>
                            <p className='name-text' ref={fnameTextRef}>სახელი</p>
                            <input type='text' className='name-input' required onChange={e => setFname(e.target.value)} ref={fnameRefInput}/>
                            <p className='request-text' ref={fnameRequestRef}>მინიმუმ 2 სიმბოლო, ქართული ასოები</p>
                            <img src='/images/successicon.png' className='success-icon' ref={fnameSuccess}/>
                        </div>

                        <div className='lastname-container'>
                            <p className='lname-text' ref={lnameTextRef}>გვარი</p>
                            <input type='text' className='lname-input' required onChange={e => setLname(e.target.value)} ref={lnameRefInput}/>
                            <p className='request-text' ref={lnameRequestRef}>მინიმუმ 2 სიმბოლო, ქართული ასოები</p>
                            <img src='/images/successicon.png' className='success-icon' ref={lnameSuccess}/>
                        </div>
                    </div>


                    <div className='team-selector' ref={teamRef} onClick={() => setDisplayTeam(!displayTeam)}>
                        <span>{team ? team.name : 'თიმი'}</span>
                        {displayTeam && <div className='team-options'>{data && data.map((e,i) => {
                            return <span key={i} onClick={() => hamdleTeamSelect(e)}>{e.name}</span>
                        })} </div>}
                        
                    </div>



                    
                    {/* custom select tag position */}
                    <div className='position-selector' ref={positionRef} onClick={() => setDisplayPosition(!displayPosition)}>
                        <span>{position ? position.name : 'პოზიცია'}</span>
                        {displayPosition && <div className='team-options'>{positionData && positionData.map((e,i) => {
                            return <span key={i} onClick={() => handlePositionSelect(e)}>{e.name}</span>
                        })} </div>}
                        
                    </div>


                    {/* mail */}
                    <div className='mail-container'>
                        <p className='phone-text' ref={mailTextRef}>მეილი</p>
                        <input type='text' className='mail-input' onChange={e => setMail(e.target.value)} ref={mailRefInput}/>
                        <p className='mail-request-text' ref={mailRequestRef}>უნდა მთავრდებოდეს @redberry.ge-ით</p>
                        <img src='/images/successicon.png' className='success-icon-mail' ref={mailSuccess}/>
                    </div>

                    <div className='phone-container'>
                        <p className='phone-text' ref={phoneTextRef}>ტელეფონის ნომერი</p>
                        <input type='text' className='phone-input' onChange={e => setPhone(e.target.value)} ref={phoneRefInput}/>
                        <p className='phone-request-text' ref={phoneRequestRef}>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</p>
                        <img src='/images/successicon.png' className='success-icon-phone' ref={phoneSuccess}/>
                    </div>

                    <div>
                        <button className='next-btn' onClick={validate}>შემდეგი</button>
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




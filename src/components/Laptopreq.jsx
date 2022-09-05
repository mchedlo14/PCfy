import React, { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Pagenav from './Pagenav'
import './style/Laptopreq.css'

const Laptopreq = ({pageCounter,setPageCounter,fdata}) => {
    const src = sessionStorage.getItem("img");
    const fileInfo = JSON.parse(sessionStorage.getItem("fileinfo"));
    
    const [laptopName,setLaptopName] = useState('')
    const [imgsrc, setImgsrc] = useState(src ? src : null);
    const [imginfo, setImginfo] = useState(null);
    const [file, setFile] = useState(null);
    const [cpuCore,setCpuCore] = useState('');
    const [cpuStream,SetCpuStream] = useState('');
    const [laptopRam,setLaptopRam] = useState('');
    const [diskType,setDiskType] = useState('')
    const [laptopPrice,setLaptopPrice] = useState(0)
    const [state,setState] = useState('');
    const [time,setTime] = useState('')


    const laptopTextRef = useRef(null)
    const laptopInputRef = useRef(null)
    const laptoprequestRef = useRef(null)
    const uploadRef = useRef(null);
    const cpuRef = useRef(null);
    const cpuTextRef = useRef(null);
    const cpuRequest = useRef(null);
    const streamTextRef = useRef(null);
    const streamInputRef = useRef(null);
    const streamRequestRef = useRef(null);
    const ramRequestRef = useRef(null);
    const ramInputRef = useRef(null);
    const ramTextRef = useRef(null);
    const diskTyperef = useRef(null);
    const priceTextRef = useRef(null);
    const priceInputRef = useRef(null);
    const timetextRef = useRef(null);
    const timeInputRef = useRef(null);


    //laptop name validation
    useEffect(() => {
        const regex = /^[a-zA-Z0-9 !@#$%^&*()_+=\"]*$/i;

        if(regex.test(laptopName)){
            laptopTextRef.current.style.color = '#000000'
            laptopInputRef.current.style.borderColor = '#8AC0E2'
            laptoprequestRef.current.style.color = '#000000'
            fdata.laptop.name = laptopName
        }else{
            laptopTextRef.current.style.color = '#E52F2F'
            laptopInputRef.current.style.borderColor = '#E52F2F'
            laptoprequestRef.current.style.color = '#E52F2F'
        }

        if(laptopName.length === 0){
            laptopTextRef.current.style.color = '#000000'
        }



    }, [laptopName])

    const imgUploadClick = (e) => {
        e.preventDefault();

        uploadRef.current.click();
    }

    const handleFileUpload = async (file) => {
        const fileInfo = { name: file.name, size: file.size, type: file.type };

        if(file) {
            const base64 = await toBase64(file);
            setImgsrc(base64);
            setImginfo(fileInfo);
            sessionStorage.setItem("img", base64);
            sessionStorage.setItem("fileinfo", JSON.stringify(fileInfo));
        }
        
    }

    const toBase64 = (file) => {
        return new Promise((res, rej) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                res(fileReader.result);
            };
            fileReader.onerror = (err) => {
                rej(err);
            };
        });
    }

    //cpu core validation
    useEffect(() => {
        const cpuregex = /^[0-9]+$/

        if(cpuregex.test(cpuCore)){
            cpuRequest.current.style.color = '#2E2E2E'
            cpuRef.current.style.borderColor = '#8AC0E2'
            cpuTextRef.current.style.color = '2E2E2E'
            //ak daemateba datashi 
            fdata.laptop.cpu.cores = cpuCore

        }else{
            console.log('arasworia')
            cpuRequest.current.style.color = '#E52F2F'
            cpuRef.current.style.borderColor = '#E52F2F'
            cpuTextRef.current.style.color = '#E52F2F'

        }

        if(cpuCore.length === 0){
            cpuRequest.current.style.color = '#000000'
            cpuRef.current.style.borderColor = '#8AC0E2'
            cpuTextRef.current.style.color = '#000000'
        }
    },[cpuCore])


    //cpu stream validation
    useEffect(() => {
        const streamRegex = /^[0-9]+$/
        if(streamRegex.test(cpuStream)){
            streamRequestRef.current.style.color = '#2E2E2E'
            streamInputRef.current.style.borderColor = '#8AC0E2'
            streamTextRef.current.style.color = '2E2E2E'
            fdata.laptop.cpu.threads = cpuStream
        }else{
            streamRequestRef.current.style.color = '#E52F2F'
            streamInputRef.current.style.borderColor = '#E52F2F'
            streamTextRef.current.style.color = '#E52F2F'
        }

        if(cpuStream.length === 0){
            streamRequestRef.current.style.color = '#000000'
            streamInputRef.current.style.borderColor = '#8AC0E2'
            streamTextRef.current.style.color = '#000000'
        }

    },[cpuStream])

    //laptop ram validation
    useEffect(() => {
        const ramRegex = /^[0-9]+$/
        if(ramRegex.test(laptopRam)){
            ramRequestRef.current.style.color = '#2E2E2E'
            ramInputRef.current.style.borderColor = '#8AC0E2'
            ramTextRef.current.style.color = '#2E2E2E'
            fdata.ram = parseInt(laptopRam)
        }else{
            ramRequestRef.current.style.color = '#E52F2F'
            ramInputRef.current.style.borderColor = '#E52F2F'
            ramTextRef.current.style.color = '#E52F2F'
        }

        if(laptopRam.length === 0){
            ramRequestRef.current.style.color = '#000000'
            ramInputRef.current.style.borderColor = '#8AC0E2'
            ramTextRef.current.style.color = '#000000'
        }
    },[laptopRam])

    //laptop price validation 
    useEffect(() => {
        const priceRegex = /^[0-9]+$/
        if(priceRegex.test(laptopPrice)){
            priceInputRef.current.style.borderColor = '#8AC0E2'
            priceTextRef.current.style.color = '#000000'
            fdata.price = laptopPrice
        }else{
            priceInputRef.current.style.borderColor = '#E52F2F'
            priceTextRef.current.style.color = '#E52F2F'
        }

        if(laptopPrice.length === 0){
            priceInputRef.current.style.borderColor = '#8AC0E2'
            priceTextRef.current.style.color = '#000000'
        }
    },[laptopPrice])



    //time validation
    useEffect(() => {
        if(time){
            fdata.purchase_date = time
        }
    },[time])

    const getFileFromBase = (string64, fileName, fileType) => {
        const trimmed = fileType === "image/jpeg" ? string64.replace("data:image/jpeg;base64,", "") :
        fileType === "image/png" ? string64.replace("data:image/png;base64,", "") : null;
  
        try {
          if(trimmed) {
            const imgContent = atob(trimmed);
            const buffer = new ArrayBuffer(imgContent.length);
            const view = new Uint8Array(buffer);
      
      
            for (let n = 0; n < imgContent.length; n++) {
              view[n] = imgContent.charCodeAt(n);
            }
            const type = fileType;
            const blob = new Blob([buffer], { type });
            return new File([blob], fileName, { lastModified: new Date().getTime(), type });
          } else {
            throw new Error("Unsupported Image Type");
          }
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        if(imgsrc !== "") {
            setFile(getFileFromBase(imgsrc, fileInfo?.name, fileInfo?.type))
        }
    }, [imgsrc]);

    useEffect(() => {
        if(file){
            console.log(file);
            fdata.laptop.image = file
        }
    },[file])


    //send data
    const sendData = () => {
        if(time === ''){
            timeInputRef.current.style.borderColor = '#E52F2F'
            timetextRef.current.style.color = '#E52F2F'
        }else{
            timeInputRef.current.style.borderColor = '#8AC0E2'
            timetextRef.current.style.color = '#000000'
        }
        if(diskType !== ''){
            fdata.hard_drive_type = diskType
            // setPageCounter(pageCounter + 1)
        }else{
            diskTyperef.current.style.color = '#E52F2F'
        }

        if(state !== ''){
            fdata.state = state
        }

        console.log(fdata)
    }
    
  return (
    <section className='laptop-wrapper'>
        <button onClick={console.log(fdata)}></button>
        
        <Pagenav pageCounter={pageCounter} setPageCounter={setPageCounter}/>
        <div className='laptop-form-wrapper'>
            <div className='laptop-form'>
                <div className='image-container'>
                    <div className='upload-container'>
                        {!imgsrc ? 
                            <>
                                <p>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
                                <button className='upload-btn' onClick={(e) => imgUploadClick(e)}>ატვირთე</button>
                            </> 
                        : null}

                        <input type="image" className={imgsrc ? "show" : ""} src={imgsrc ? imgsrc : ""} />
                        <input type="file" ref={uploadRef} accept='image/*' onChange={(e) => handleFileUpload(e.target.files[0])} />
                    </div>
                </div>

                {imgsrc ? 
                <div className='reuploadWrapper'>
                    <div className="fileInfoWRapper">
                        <p className='fileName'>{fileInfo ? fileInfo?.name : imginfo?.name}</p>
                        <p className='fileSize'>{fileInfo ? (fileInfo?.size / (10241024)).toFixed(2) + " mb" : (imginfo?.size / (10241024)).toFixed(2) + " mb"}</p>
                    </div>
                    <button className='upload-btn' onClick={(e) => imgUploadClick(e)}>ატვირთე თავიდან</button>
                </div> : null}

                <div className='laptop-brand-container'>
                    <div className='laptop-name'>
                        <p ref={laptopTextRef}>ლეპტოპის სახელი</p>
                        <input type='text' placeholder='HP' className='laptop-input' ref={laptopInputRef} onChange={e => setLaptopName(e.target.value)}/>
                        <p className='laptop-request-text' ref={laptoprequestRef}>ლათინური ასოები, ციფრები, !@#$%^&*()_+= </p>
                    </div>

                    <div className='laptop-dropdown-container'>
                        <div className='brand-dropdown'>

                        </div>
                    </div>
                </div>

                <div className='horizonal-line'></div>
                
                <div className='cpu-container'>
                    <div className='cpu-dropdown'></div>
                    <div className='cpu-input-container'>
                        <p ref={cpuTextRef}>CPU-ს ბირთვი</p>
                        <input type='text' className='cpu-input' ref={cpuRef} onChange={e => setCpuCore(e.target.value)}/>
                        <p ref={cpuRequest}>მხოლოდ ციფრები</p>
                    </div>
                    <div className='cpu-n-container'>
                        <p ref={streamTextRef}>CPU-ს ნაკადი</p>
                        <input type='text' className='cpu-n' ref={streamInputRef} onChange={e => SetCpuStream(e.target.value)}/>
                        <p ref={streamRequestRef}>მხოლოდ ციფრები</p>
                    </div>
                </div>

                <div className='laptop-ram-container'>
                    <div className='ram-container'>
                        <p className='ram-text' ref={ramTextRef}>ლეპტოპის RAM(gb)</p>
                        <input type='text' className='ram-input' ref={ramInputRef} onChange={e => setLaptopRam(e.target.value)}/>
                        <p className='ram-request-text' ref={ramRequestRef}>მხოლოდ ციფრები</p>
                    </div>

                    <div className='disk-container' onChange={(e) => setDiskType(e.target.value)}>
                        <p className='mem-type' ref={diskTyperef}>მეხსიერების ტიპი</p>
                        <div className='radio-container'>
                            <input type="radio" value="SSD"/> SSD
                            <input type="radio" value="HDD"/> HDD
                        </div>
                    </div>

                </div>

                <div className='horizonal-line'></div>

                <div className='laptop-price-container'>
                    <div className='date-container'>
                        <p className='date-text' ref={timetextRef}>შეძენის რიცხვი(არჩევითი)</p>
                        <input type='date' className='date-input' ref={timeInputRef} onChange={e => setTime(e.target.value)}/>
                    </div>
                    <div className='laptop-price'>
                        <p className='date-text' ref={priceTextRef}>ლეპტოპის ფასი</p>
                        <input type='text' className='date-input' ref={priceInputRef} onChange={e => setLaptopPrice(e.target.value)}/>
                    </div>
                </div>

                <div className='condition-container'>
                    <p>ლეპტოპის მდგომარეობა</p>
                    <div className='radio-container' onChange={e => setState(e.target.value)}>
                            <input type="radio" value="new" /> ახალი
                            <input type="radio" value="old"/> მეორადი
                    </div>
                </div>

                <div className='laptop-buttons-container'>
                    <button className='back-btn' onClick={() => setPageCounter(pageCounter - 1)}>უკან</button>
                    <button className='save-btn' onClick={sendData}>დამახსოვრება</button>
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
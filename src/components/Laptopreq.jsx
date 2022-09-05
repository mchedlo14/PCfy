import React, { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Pagenav from './Pagenav'
import './style/Laptopreq.css'
import axios from 'axios'
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
    const [time,setTime] = useState('');
    const [displaybrand,setDisplayBrand] = useState(false)
    const [displayCpu,setDisplayCpu] = useState(false)
    const [data,setData] = useState({})
    const [brandData,setBrandData] = useState({})
    const [brand,setBrand] = useState('')
    const [cpuName,setCpuName] = useState('')
    const [errors] = useState({laptopName:false,cpuCore:false,cpuStream:false,laptopRam:false,laptopPrice:false,file:false,time:false})


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
            fdata.laptop_name = laptopName
            errors.laptopName = true
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
            fdata.laptop_cpu_cores = cpuCore
            errors.cpuCore = true

        }else{
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
            fdata.laptop_cpu_threads = cpuStream
            errors.cpuStream = true
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
            fdata.laptop_ram = parseInt(laptopRam)
            errors.laptopRam = true
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
            fdata.laptop_price = parseFloat(laptopPrice)
            errors.laptopPrice = true;
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
            fdata.laptop_purchase_date = time
            errors.time = true
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
            fdata.laptop_image = file
            errors.file = true
        }
    },[file])

    //get brand data
    useEffect(()=> {
        const getData = async () => {
            const response = await fetch("https://pcfy.redberryinternship.ge/api/brands");
            const brandData = await response.json();
            setData(brandData.data);
        }

        getData();
    }, [])

    //get cpu data
    useEffect(()=> {
        const getCpu = async () => {
            const response = await fetch("https://pcfy.redberryinternship.ge/api/cpus");
            const cpuData = await response.json();
            setBrandData(cpuData.data);
        }

        getCpu();
    }, [])

    const hamdleBrandSelect = (e) => {
        setBrand(e.name)
        fdata.laptop_brand_id = e.id
        setDisplayBrand(false)
    }

    const hamdleCpuSelect= (e) => {
        setCpuName(e.name)
        fdata.laptop_cpu = e.name
        setDisplayCpu(false)
    }
    


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
            fdata.laptop_hard_drive_type = diskType
        }else{
            diskTyperef.current.style.color = '#E52F2F'
        }

        if(state !== ''){
            fdata.laptop_state = state
        }

        console.log(fdata)

        let isTrue = Object.values(errors).every(element => element === true)

        if(isTrue){
            fdata.token = '09e8c043d7b0049d5331f959bd4e3e12'

            const formData = new FormData();

            Object.entries(fdata).forEach(pair => {
                formData.append(pair[0], pair[1]);
            });
            
            axios.post('https://pcfy.redberryinternship.ge/api/laptop/create',formData)
            .then(res => res)
            .catch(err => console.log('something wrong res =>',err))
            setPageCounter(pageCounter + 1)
        }


    }

  return (
    <section className='laptop-wrapper'>
        
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

                        <input type="image" required className={imgsrc ? "show" : ""} src={imgsrc ? imgsrc : ""} />
                        <input type="file" required ref={uploadRef} accept='image/*' onChange={(e) => handleFileUpload(e.target.files[0])} />
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
                        <div className='brand-dropdown' onClick={() => setDisplayBrand(!displaybrand)}>
                            <span>{brand ? brand : 'ბრენდი'}</span>
                            {displaybrand && <div className='team-options'>{data && data.map((e,i) => {
                                return <span key={i} onClick={() => hamdleBrandSelect(e)}>{e.name}</span>
                            })} </div>}
                        </div>
                    </div>
                </div>

                <div className='horizonal-line'></div>
                
                <div className='cpu-container'>
                    <div className='cpu-dropdown'>
                        <div className='cpu-drop' onClick={() => setDisplayCpu(!displayCpu)}>
                            <span>{cpuName ? cpuName : 'CPU'}</span>
                            {displayCpu && <div className='team-options'>{brandData && brandData.map((e,i) => {
                                return <span key={i} onClick={() => hamdleCpuSelect(e)}>{e.name}</span>
                            })} </div>}
                        </div>
                    </div>
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
                            <input type="radio" value="used"/> მეორადი
                    </div>
                </div>

                <div className='laptop-buttons-container'>
                    <button className='back-btn' onClick={() => setPageCounter(pageCounter - 1)}>უკან</button>
                    <button className='save-btn' onClick={sendData}>დამახსოვრება</button>
                </div>

            </div>

        </div>

        <div>
            <img src='/images/redberry-logo.png' alt='logo'/>
        </div>
    </section>
  )
}

export default Laptopreq
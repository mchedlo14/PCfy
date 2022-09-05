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


    const laptopTextRef = useRef(null)
    const laptopInputRef = useRef(null)
    const laptoprequestRef = useRef(null)
    const uploadRef = useRef(null);


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
        }
    },[file])

    
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
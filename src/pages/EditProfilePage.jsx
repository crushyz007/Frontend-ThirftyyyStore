import React from "react";
import { Link } from "react-router-dom";
import "../css/EditProfilePage.css"
import "../css/ProfileBox.css"
import NavBarAcc from '../components/NavBarAcc';
import BoxProfile from '../components/ProfileBox';
import { useState,useEffect,useRef} from "react";
import Form from "react-bootstrap/Form";
const EditProfile = () =>{

    const[details,setDetails] = useState({username:"",email:"",telnum:"",addr:""})
    const[error,setError] = useState("")
    const[noti,setNoti] = useState("")
    const[isSubmit,setIsSubmit] = useState(false)
    const [images, setImages] = useState([]); 
    const [imageURLs, setImageURLs] = useState([]);
    
    const handleChange = (e) =>{
        const{name,value} = e.target
        setDetails({...details,[name]:value})
    }
    const submitHandler = (e) =>{
            e.preventDefault();
            Profile(details);
            setError(validate(details));
            setIsSubmit(true)
        }
    
    useEffect(()=>{
        console.log(error)
            // console.log(details)
        if(Object.keys(error).lenght=== 0 && isSubmit){
            console.log(details);  
            }
    },[error]);

    const Profile=details=>{
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexTelnum = /((\+66|0)(\d{1,2}\-?\d{3}\-?\d{3,4}))|((\+๖๖|๐)([๐-๙]{1,2}\-?[๐-๙]{3}\-?[๐-๙]{3,4}))/gm
        console.log(details)
        if(!details.username){
            setNoti("กรุณากรอกชื่อผู้ใช้งาน")
        }else if(details.username.lenght > 20){
            setNoti("ห้ามเกิน20")
        }
        else if(!details.email){
            setNoti("กรุณากรอกอีเมล")
        }else if(!regexEmail.test(details.email)){
            setNoti("นี่ไม่ใช่ format ของอีเมล กรุณากรอกใหม่")
        }
        else if(!details.telnum){
            setNoti("กรุณากรอกเบอร์โทร")
        }else if(!regexTelnum.test(details.telnum)){
            setNoti("นี่ไม่ใช่ format ของเบอร์โทร กรุณากรอกใหม่")
        }
        else if(!details.addr){
            setNoti("กรุณากรอกที่อยู่")
        }
        else{
            setNoti("")
        }
    }
    
    const validate=(values)=>{
        const errors={};
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexTelnum = /((\+66|0)(\d{1,2}\-?\d{3}\-?\d{3,4}))|((\+๖๖|๐)([๐-๙]{1,2}\-?[๐-๙]{3}\-?[๐-๙]{3,4}))/gm

        if(!values.username){
            errors.username="Username is required"
        }
        else if(values.username.lenght > 20){
            errors.username="Username must be less than 20 characters"
        }
        if (!values.email){
            errors.email ="Email is required"
        }else if (!regexEmail.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (!values.telnum){
            errors.telnum ="Telnum is required"
        }else if (!regexTelnum.test(values.telnum)) {
            errors.telnum = "This is not a valid telnum format!";
        }else if(values.telnum.lenght > 10){
            errors.telnum = "This is not a valid telnum format!";
        }
        
        if (!values.addr){
            errors.addr ="Address is required"
        }
        return errors;
    }

    useEffect(() => {
        if(images.length < 1) return;
        const newImageUrls = [];
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)))
        setImageURLs(newImageUrls);
    }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files]);
    }

    const fileRef=useRef(null);
    function onUploadClick(){
        const myFile = fileRef.current.files[0]
        console.log(myFile)
    }

    return(
        <div>
            <NavBarAcc />
            <div className="BodyBox"> 
            <BoxProfile />
            <div className="Profile__Edit"> 
                <Form onSubmit={submitHandler}>
                    <div>
                        <label>ชื่อ :</label>
                        {/* <Tooltip title="Delete"><button>asdasd</button></Tooltip> */}
                        <i class="fi fi-rr-exclamation"></i>
                    </div>
                        <input type="text" name="username" placeholder={details.username} value={details.username} onChange={handleChange}></input>

                    <div className="itemindent">
                        <label>อีเมล :</label> 
                        <Link to="/changemail"><label className="updateFont">อัปเดตที่อยู่อีเมล</label></Link>
                    </div>
                        <input type="text" name="email" placeholder={details.email} value={details.email} onChange={handleChange}></input>
                    
                    <div className="itemindent">
                        <label>หมายเลขโทรศัพท์ :</label>
                    </div>
                        <input type="tel" name="telnum" placeholder={details.telnum} value={details.telnum} onChange={handleChange}></input>
                    
                    <div className="itemindent">
                        <label>ที่อยู่ :</label>
                        <Link to="/addaddr" style={{ textDecoration: 'none' }}><i class="fi fi-sr-pencil"></i></Link>
                    </div>
                        <input type="text" name="addr" placeholder={details.addr} value={details.addr} onChange={handleChange}></input> <br />
                        <Link to="/changepass"><label className="updateFont updateFont2">เปลี่ยนรหัสผ่าน</label></Link>
                    
                </Form>
            </div>

            <div className="Profile__UploadBox">
                {imageURLs.map((imageSrc, idx) => (<img key={idx} width="300" height="300" src={imageSrc} />))}
            </div>
            
            <div className="Profile__Button">
                    <input type="file" ref={fileRef} multiple accept="image/*" onChange={onImageChange} />
                    <Form onSubmit={submitHandler}>
                        <button className="purple_Btn" type="submit" onClick={onUploadClick}>บันทึก</button>
                    </Form>
                    <div className="cancel_BtnPos">
                            <Link to='/profile'><button className="white_Btn">ยกเลิก</button></Link>
                    </div>
            </div>
            </div>
            {(noti != "")?(<div className="EditProfile__Noti">{noti}</div>):""}
        </div>
    )
}

export default EditProfile
import React , { useState,useEffect,useRef} from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import '../css/ResetPage.css'

const Reset = () =>{

    const[details,setDetails] = useState({email:""})
    const[error,setError] = useState("")
    const[noti,setNoti] = useState("")
    const[isSubmit,setIsSubmit] = useState(false)

    const handleChange = (e) =>{
        const{name,value} = e.target
        setDetails({...details,[name]:value})
    }
    const submitHandler = (e) =>{
            e.preventDefault();
            Reset(details);
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

    const Reset=details=>{
        console.log(details)
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!details.email){
            setNoti("กรุณากรอกอีเมล")
        }else if(!regexEmail.test(details.email)){
            setNoti("นี่ไม่ใช่ format ของอีเมล กรุณากรอกใหม่")
        }else if(details.email!=""){
            setNoti("")
        }
    }
    const validate=(values)=>{
        const errors={};
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!values.email){
            errors.email ="Email is required"
        }else if (!regexEmail.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        return errors;
    }
    return(
        <div className="BodyBox">
            {/* <div className="winkle">
                <div class="winkle winkle5"></div>
                <div class="winkle winkle6"></div>
            </div> */}
            <Form onSubmit={submitHandler}>
                <div className="boxReset">
                        <div className="font9 ">ลืมรหัสผ่าน ?</div>
                        <div className="font10">กรุณาใส่อีเมลของคุณ เราจะทำการส่งลิงก์เพื่อตั้งรหัสผ่านใหม่
                        <br /></div><div className="font10"><br />ไปยังอีเมลของคุณ</div>
                <div className="font__groupReset">
                    <label >อีเมลของคุณ <br /></label>
                    <input type="text" name="email" value={details.email} onChange={handleChange}/>
                </div>
                <button className="button buttonReset">ยืนยัน</button>
                <Link to='/' style={{ textDecoration: 'none' }}><div className="purplefont font11">กลับไปเข้าสู่ระบบ</div></Link>
                </div>
                {(noti != "")?(<div className="ResetPass__Noti">{noti}</div>):""}
            </Form>        
        </div>
        
    )
}

export default Reset
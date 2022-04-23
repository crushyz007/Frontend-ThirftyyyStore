import React from "react";
import "../css/ChangeEmailPage.css"
import "../css/ChangeBox.css"
import NavBarAcc from '../components/NavBarAcc';
import BoxChange from '../components/ChangeBox';
import { useState,useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
const ChangeEmail = () =>{

    const[details,setDetails] = useState({email:"",email2:"",password:""})
    const[error,setError] = useState("")
    const[noti,setNoti] = useState("")
    const[isSubmit,setIsSubmit] = useState(false)
    const [passwordShow,setPasswordShow] = useState(false);
    const togglePassword = () =>{setPasswordShow(!passwordShow);}
    
    const handleChange = (e) =>{
        const{name,value} = e.target
        setDetails({...details,[name]:value})
    }
    const submitHandler = (e) =>{
            e.preventDefault();
            ChangeEmail(details);
            setError(validate(details));
            setIsSubmit(true)
        }

    const ChangeEmail=details=>{
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexPass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/;
        console.log(details)
        if(!details.email){
            setNoti("กรุณากรอกอีเมลปัจจุบัน")
        }else if(!details.email2){
            setNoti("กรุณากรอกอีเมลใหม่")
        }else if(!regexEmail.test(details.email2)){
            setNoti("อีเมลไม่ถูกต้อง")
        }else if(details.email==details.email2){
            setNoti("อีเมลทั้งคู่เหมือนกัน กรุณากรอกใหม่")
        }
        else if(!details.password){
            setNoti("กรุณากรอกรหัสผ่าน")
        }else{
            setNoti("SAVE")
        }
    }

    useEffect(()=>{
        console.log(error)
        // console.log(details)
        if(Object.keys(error).lenght=== 0 && isSubmit){
            console.log(details);  
        }
    },[error]);

    const validate=(values)=>{
        const errors ={};
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexPass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        if (!values.email){
            errors.email ="Old email is required"
        }else if(!values.email2){
            errors.email2="New email is required"
        }else if (!regexEmail.test(values.email2)) {
            errors.email2 = "This is not a valid email format!";
        }else if(values.email==values.email2){
            errors.email2 = "Those email is the same"
        }
        if(!values.password){
            errors.password="Password is required"
        }
        return errors;
    }

    return(
        <div>
            <NavBarAcc />
            <div className="Change__Topic">เปลี่ยนอีเมล</div> 
            <div className="BodyBox">
            <BoxChange />

                
                    <Form className="Change__Info" onSubmit={submitHandler}>
                        <div>
                            <label>อีเมลปัจจุบัน :</label><br />
                            <input type="email" name="email" value={details.email} onChange={handleChange}></input>
                        </div>

                        <div className="itemindent">
                            <label>อีเมลใหม่ :</label><br />
                            <input type="email" name="email2" value={details.email2} onChange={handleChange}></input>
                            
                        </div>

                        <div className="itemindent">
                            <label>ยืนยันรหัสผ่าน :</label>
                            <i onClick={togglePassword} className={passwordShow ? "fi fi-ss-eye":"fi fi-sr-eye-crossed"}></i>
                            <br />
                            <input type={passwordShow ? "text" : "password"} name="password" value={details.password} onChange={handleChange}></input>
                        </div>

                        <div className="Change__Button">
                            <button className="purple_Btn">บันทึก</button>
                            <Link to="/editprofile"><button className="white_Btn">ยกเลิก</button></Link>
                            </div>
                    </Form>
                    
            </div>
            {(noti != "")?(<div className="ChangeEmail__Noti">{noti}</div>):""}
        </div>
    )
}
export default ChangeEmail
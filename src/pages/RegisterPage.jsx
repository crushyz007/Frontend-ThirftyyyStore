import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import '../css/RegisterPage.css'

const Register = () => {

    const[details,setDetails] = useState({username:"",email:"",password:"",password2:""})
    const[error,setError] = useState("")
    const[isSubmit,setIsSubmit] = useState(false)
    const[noti,setNoti] = useState("")

    const handleChange = (e) =>{
        const{name,value} = e.target
        setDetails({...details,[name]:value})
    }
    // const Register = details=>{
    //     console.log(details)
    // }
    const Register = details=>{
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexPass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/;
        console.log(details)
        if(details.email==""&&details.username!=""){
            setNoti("กรุณากรอกอีเมล")
        }
        else if(details.password!=details.password2 && details.username!=""&&details.password2!=""){
            setNoti("รหัสไม่เหมือนกัน กรุณากรอกใหม่")
        }
        else if(details.username==""&& details.password!=details.password2){
            setNoti("กรุณากรอกชื่อผู้ใช้งาน")
        }
        else if(details.username==""&& details.password==details.password2){
            setNoti("กรุณากรอกชื่อผู้ใช้งาน")
        }
        else if(details.password==""){
            setNoti("กรุณากรอกรหัสผ่าน")
        }
        else if(details.password2==""){
            setNoti("กรุณากรอกยืนยันรหัสผ่าน")
        }
        else if(!regexEmail.test(details.email)){
            setNoti("อีเมลไม่ถูกต้อง")
        }
        else if(!regexPass.test(details.password)&&(details.password!="")&&(details.password2!="")){
            setNoti("รหัสต้องมีอย่างต่ำ 8 ตัวอักษรตัวใหญ่ตัวเล็กและตัวเลขอย่างต่ำ 1 ตัว")
        }
        else if(details.username.lenght>20){
            setNoti("ชื่อผู้ใช้งานไม่สามารถเกิน 20 ตัวอักษรได้")
        }
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        Register(details);
        setError(validate(details));
        setIsSubmit(true)
    }

    useEffect(()=>{
        console.log(error)
        console.log(details)
        if(Object.keys(error).lenght=== 0 && isSubmit){
            console.log(details);  
        }
    },[error]);

    const validate=(values)=>{
        const errors ={};
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexPass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        if (!values.username){
            errors.username ="Username is required"
        }else if(values.username.lenght > 20){
            errors.username ="Username must be less than 20 characters"
        }

        if (!values.email){
            errors.email ="Email is required"
        }else if (!regexEmail.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (!values.password){
            errors.password ="Password is required"
        }else if (values.password.length < 8) {
            errors.password = "Password must be more than 8 characters";
        }else if (values.password.length > 20) {
            errors.password = "Password cmust be less than 20 characters";
        }else if(!regexPass.test(values.password)){
            errors.password ="Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase"
        }

        if (!values.password2){
            errors.password2 ="Confirm Password is required"
        }else if(values.password !== values.password2){
            errors.password2 = "Those password didn't match."
        }

        return errors;
    };

    return (
        <div className="BodyBox">
            {/* <div className="winkle">
                <div class="winkle winkle3"></div>
                <div class="winkle winkle4"></div>
            </div> */}

            <div className="box">
                <div class="linearbox"></div>
                    <div>
                        <div className="font__groupRegister">
                            <div className="font2">Hello, Join us!</div>

                            <Form onSubmit={submitHandler} className="form-groupRegister">
                                <div className="itemindent">    
                                    <label >ชื่อผู้ใช้งาน <br /></label>
                                    <input type="text" name="username" id="username" className="form-label" value={details.username} onChange={handleChange} />
                                </div>
                                <div className="itemindent">    
                                    <label >อีเมล <br /></label>
                                    <input type="email" name="email" id="email" className="form-label" value={details.email} onChange={handleChange} />
                                </div>    
                                <div className="itemindent">   
                                    <label >รหัสผ่าน <br /></label>
                                    <input type="password" name="password" id="password" className="form-label" value={details.password} onChange={handleChange} />
                                </div>     
                                <div className="itemindent">
                                    <label >ยืนยันรหัสผ่าน <br /></label>
                                    <input type="password" name="password2" id="password2" className="form-label" value={details.password2} onChange={handleChange} />
                                </div>
                                <div>
                                <button type="submit" className="button buttonRegister">เริ่มกันเลย !</button>
                                </div>
                                <p className="font6">มีบัญชีแล้วใช่ไหม ?
                            
                                <Link to="/" style={{ textDecoration: 'none' }}><p className="purplefont font8">เข้าสู่ระบบ</p> </Link></p>
                        
                            </Form>
                            {(noti != "")?(<div className="Register__Noti">{noti}</div>):""}
                        </div>
                        
                    </div>
            </div>
        
        </div>
    )
}

export default Register
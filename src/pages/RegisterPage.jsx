import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import '../css/RegisterPage.css'

const Register = () => {

    const[details,setDetails] = useState({username:"",email:"",password:"",password2:""})
    const[error,setError] = useState("")
    const[isSubmit,setIsSubmit] = useState(false)

    const handleChange = (e) =>{
        const{name,value} = e.target
        setDetails({...details,[name]:value})
    }
    const Register = details=>{
        console.log(details)
    }
    const submitHandler = (e) =>{
        e.preventDefault();
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
        const regex = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/i;
        if (!values.username){
            errors.username ="Username is required"
        }else if(values.username.lenght > 20){
            errors.username ="Username must be less than 20 characters"
        }

        if (!values.email){
            errors.email ="Email is required"
        }else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (!values.password){
            errors.password ="Password is required"
        }else if (values.password.length < 8) {
            errors.password = "Password must be more than 8 characters";
        }else if (values.password.length > 20) {
            errors.password = "Password cmust be less than 20 characters";
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
            <div className="winkle">
                <div class="winkle winkle3"></div>
                <div class="winkle winkle4"></div>
            </div>

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
                            </Form>

                        </div>
                        <p className="font6">มีบัญชีแล้วใช่ไหม ?
                        <Link to="/" style={{ textDecoration: 'none' }}><p className="purplefont font8">เข้าสู่ระบบ</p> </Link></p>
                    </div>
            </div>
        
        </div>
    )
}

export default Register
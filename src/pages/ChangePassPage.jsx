import React from "react";
import "../css/ChangePassPage.css"
import "../css/ChangeBox.css"
import NavBarAcc from '../components/NavBarAcc';
import BoxChange from '../components/ChangeBox';
import { useState,useEffect,useRef} from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const ChangePass =() =>{

    const[details,setDetails] = useState({password:"",password2:"",password3:""})
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
            ChangePass(details);
            setError(validate(details));
            setIsSubmit(true)
        }
    
    const ChangePass=details=>{
        const regexPass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/;
        console.log(details)
        if(!details.password){
            setNoti("กรุณากรอกรหัสผ่านเก่า")
        }
        if(!details.password2){
            setNoti("กรุณากรอกรหัสผ่านใหม่")
        }else if(!regexPass.test(details.password2)){
            setNoti("รหัสต้องมีอย่างต่ำ 8 ตัวอักษรตัวใหญ่ตัวเล็กและตัวเลขอย่างต่ำ 1 ตัว")
        }else if(!details.password3){
            setNoti("กรุณายืนยันรหัสผ่านใหม่")
        }else if(details.password2!=details.password3){
            setNoti("รหัสผ่านใหม่ไม่ตรงกัน")
        }else if(details.password2==details.password3){
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
        const regexPass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        if(!values.password){
            errors.password="Old Password is required"
        }

        if(!values.password2){
            errors.password2="New password is required"
        }else if(!regexPass.test(values.password2)){
            errors.password2 ="Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase"
        }

        if(!values.password3){
            errors.password3="Confirm New password is required"
        }
        if(values.password2!=values.password3){
            errors.password3="Those password didn't match"
        }
        
        return errors;
    }

    return(
        <div>
            <NavBarAcc />
            <div className="Change__Topic">เปลี่ยนรหัสผ่าน</div> 
            <div className="BodyBox">
                <BoxChange />
                <div className="Change__Info">
                    <Form onSubmit={submitHandler}>
                    <div>
                        <label>รหัสผ่านปัจจุบัน :</label><br />
                        <input type={passwordShow ? "text" : "password"} name="password" value={details.password} onChange={handleChange}></input>
                    </div>

                    <div className="itemindent">
                        <label>รหัสผ่านใหม่ :</label><i class="fi fi-rr-exclamation"></i><br />
                        <input type={passwordShow ? "text" : "password"} name="password2" value={details.password2} onChange={handleChange}></input>
                        
                    </div>

                    <div className="itemindent">
                        <label>ยืนยันรหัสผ่านใหม่ :</label>
                        <div className="ChangePassEye_Pos">
                        <i onClick={togglePassword} className={passwordShow ? "fi fi-ss-eye":"fi fi-sr-eye-crossed"}></i>
                        </div>
                        <br />
                        <input type={passwordShow ? "text" : "password"} name="password3" value={details.password3} onChange={handleChange}></input>
                    </div>

                    <div className="Change__Button">
                    <button className="purple_Btn" type="submit">บันทึก</button>
                    <Link to="/editprofile"><button className="white_Btn">ยกเลิก</button></Link>
                    </div>
                    
                    </Form>
                    {(noti != "")?(<div className="ChangePass__Noti">{noti}</div>):""}
                </div>
                
            </div>
        </div>
    )
}

export default ChangePass
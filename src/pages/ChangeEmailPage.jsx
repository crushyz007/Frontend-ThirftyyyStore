import React from "react";
import "../css/ChangeEmailPage.css"
import "../css/ChangeBox.css"
import NavBarAcc from '../components/NavBarAcc';
import BoxChange from '../components/ChangeBox';
import { useState } from "react";

const ChangeEmail = () =>{
    const [passwordShow,setPasswordShow] = useState(false);
    const togglePassword = () =>{setPasswordShow(!passwordShow);}
    
    return(
        <div>
            <NavBarAcc />
            <div className="Change__Topic">เปลี่ยนอีเมล</div> 
            <div className="BodyBox">
            <BoxChange />
            <div className="Change__Info">

                <div>
                    <label>อีเมลปัจจุบัน :</label><br />
                    <input type="email" name="currentmail"></input>
                </div>

                <div className="itemindent">
                    <label>อีเมลใหม่ :</label><br />
                    <input type="email" name="newmail"></input>
                    
                </div>

                <div className="itemindent">
                    <label>ยืนยันรหัสผ่าน :</label>
                    <i onClick={togglePassword} className={passwordShow ? "fi fi-ss-eye":"fi fi-sr-eye-crossed"}></i>
                    <br />
                    <input type={passwordShow ? "text" : "password"} name="pass"></input>
                </div>
            </div>
            </div>
        </div>
    )
}
export default ChangeEmail
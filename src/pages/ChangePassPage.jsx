import React from "react";
import "../css/ChangePassPage.css"
import "../css/ChangeBox.css"
import NavBarAcc from '../components/NavBarAcc';
import BoxChange from '../components/ChangeBox';
import { useState } from "react";

const ChangePass =() =>{
    const [passwordShow,setPasswordShow] = useState(false);
    const togglePassword = () =>{setPasswordShow(!passwordShow);}

    return(
        <div>
            <NavBarAcc />
            <div className="Change__Topic">เปลี่ยนรหัสผ่าน</div> 
            <div className="BodyBox">
                <BoxChange />
                <div className="Change__Info">
                    <div>
                        <label>รหัสผ่านปัจจุบัน :</label><br />
                        <input type={passwordShow ? "text" : "password"} name="currentpass"></input>
                    </div>

                    <div className="itemindent">
                        <label>รหัสผ่านใหม่ :</label><i class="fi fi-rr-exclamation"></i><br />
                        <input type={passwordShow ? "text" : "password"} name="newpass"></input>
                        
                    </div>

                    <div className="itemindent">
                        <label>ยืนยันรหัสผ่านใหม่ :</label>
                        <div className="ChangePassEye_Pos">
                        <i onClick={togglePassword} className={passwordShow ? "fi fi-ss-eye":"fi fi-sr-eye-crossed"}></i>
                        </div>
                        <br />
                        <input type={passwordShow ? "text" : "password"} name="confirmpass"></input>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ChangePass
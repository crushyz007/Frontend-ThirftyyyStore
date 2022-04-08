import React from "react";
import { Link } from "react-router-dom";
import '../css/reset.css'

const Reset = () =>{
    return(
        <div>
            <div className="winkle">
                <div class="winkle winkle5"></div>
                <div class="winkle winkle6"></div>
            </div>

            <div className="boxReset">
                    <div className="font9 ">ลืมรหัสผ่าน ?</div>
                    <div className="font10">กรุณาใส่อีเมลของคุณ เราจะทำการส่งลิงก์เพื่อตั้งรหัสผ่านใหม่
                    <br /></div><div className="font10"><br />ไปยังอีเมลของคุณ</div>
            <div className="font__groupReset">
                <label >อีเมลของคุณ <br /></label>
                <input type="text" name="uname" />
            </div>
            <button className="button buttonReset">ยืนยัน</button>
            <Link to='/' style={{ textDecoration: 'none' }}><div className="purplefont font11">กลับไปเข้าสู่ระบบ</div></Link>
            </div>        
        </div>
        
    )
}

export default Reset
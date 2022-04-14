import React from "react";
import { Link } from "react-router-dom";
import '../css/RegisterPage.css'

const Register = () => {
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

                            <form className="form-groupRegister">
                                <div className="itemindent">    
                                    <label >ชื่อผู้ใช้งาน <br /></label>
                                    <input type="text" name="uname" />
                                </div>
                                <div className="itemindent">    
                                    <label >อีเมล <br /></label>
                                    <input type="text" name="email" />
                                </div>    
                                <div className="itemindent">   
                                    <label >รหัสผ่าน <br /></label>
                                    <input type="password" name="pass" />
                                </div>     
                                <div className="itemindent">
                                    <label >ยืนยันรหัสผ่าน <br /></label>
                                    <input type="password" name="cpass" />
                                </div>
                                <div>
                                <button className="button buttonRegister">เริ่มกันเลย !</button>
                                </div>
                            </form>

                        </div>
                        <p className="font6">มีบัญชีแล้วใช่ไหม ?
                        <Link to="/" style={{ textDecoration: 'none' }}><p className="purplefont font8">เข้าสู่ระบบ</p> </Link></p>
                    </div>
            </div>
        
        </div>
    )
}

export default Register
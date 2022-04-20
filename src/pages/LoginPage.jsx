import React from "react";
import { Link } from "react-router-dom";
import '../css/LoginPage.css'

const Login = () => {
    return (
        <div>
            <div className="winkle">
                <div class="winkle winkle1"></div>
                <div class="winkle winkle2"></div>
            </div>
            <div className="BodyBox">
                <div className="box">
                    <div class="linearbox">
                        <Link to='/profile'><button>Profile</button></Link>
                        <Link to='/mycart'><button>Cart</button></Link>
                    </div>
                    
                    <div>
                        <div className="font__group">
                            <div className="font1">Welcome to</div>
                            <div className="font2">Triftyyy Store !</div>
                        </div>
                        <form className="form-group">
                            <div className="item1">
                                <label >ชื่อผู้ใช้งาน <br /></label>
                                <input type="text" name="uname" />
                            </div >
                            <div className="item2">
                                <label >รหัสผ่าน <br /></label>
                                <input type="password" name="pass" />
                            </div>
                            <div>
                                    <button className="button">เข้าสู่ระบบ</button>
                            </div>
                        </form>

                        <div className="line-group">
                            <div className="line"></div>
                            <p className="font3">หรือ</p>
                            <div className="line"></div>
                        </div>

                        <p className="font4">ยังไม่มีบัญชีใช่ไหม ?</p>
                        <Link to='/register' style={{ textDecoration: 'none' }}><p className="purplefont font7"> สมัครเลย</p></Link>
                        
                        <Link to="/reset" style={{ textDecoration: 'none' }}><p className="purplefont font5">ลืมรหัสผ่าน ?</p></Link>
                    </div>

                </div>
    </div>
    </div>
    )
}

export default Login
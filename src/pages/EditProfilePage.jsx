import React from "react";
import { Link } from "react-router-dom";
import "../css/EditProfilePage.css"
import "../css/ProfileBox.css"
import NavBarAcc from '../component/NavBarAcc';
import BoxProfile from '../component/ProfileBox';

const EditProfile = () =>{
    return(
        <div>
            <NavBarAcc />
            <div className="BodyBox"> 
            <BoxProfile />
            <div className="Profile__Edit"> 
                <div>
                    <label>ชื่อ :</label>
                    <i class="fi fi-rr-exclamation"></i>
                </div>
                <input type="text" name="name"></input>

                <div className="itemindent">
                    <label>อีเมล :</label> 
                    <Link to="/changemail"><label className="updateFont">อัปเดตที่อยู่อีเมล</label></Link>
                </div>
                <input type="text" name="email"></input>
                <div className="itemindent">
                    <label>หมายเลขโทรศัพท์ :</label>
                </div>
                <input type="tel" name="tel"></input>
                <div className="itemindent">
                    <label>ที่อยู่ :</label>
                    <i class="fi fi-sr-pencil"></i>
                </div>
                <input type="text" name="addr"></input> <br />
                <label className="updateFont updateFont2">เปลี่ยนรหัสผ่าน</label>
            </div>

            <div className="Profile__Button">
                    <input type="file" />
                    <button className="purple_Btn">บันทึก</button>
                        <div className="cancel_BtnPos">
                            <Link to='/profile'><button className="white_Btn">ยกเลิก</button></Link>
                        </div>
            </div>
            </div>
        </div>
    )
}

export default EditProfile
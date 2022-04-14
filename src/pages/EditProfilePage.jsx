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
                </div>
                <div className="itemindent">
                    <label>อีเมล :</label>
                </div>
                <div className="itemindent">
                    <label>หมายเลขโทรศัพท์ :</label>
                </div>
                <div className="itemindent">
                    <label>ที่อยู่ :</label>
                </div>
            </div>
            <div className="Profile__Button">
                    <input type="file" />
                    <button className="purple_Btn">บันทึก</button>
                        <div className="cancel_BtnPos">
                            <button className="white_Btn">ยกเลิก</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default EditProfile
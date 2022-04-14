import React from "react";
import { Link } from "react-router-dom";
import "../css/ProfilePage.css"
import "../css/ProfileBox.css"
import NavBarAcc from '../component/NavBarAcc';
import BoxProfile from '../component/ProfileBox';

const Profile = () =>{
    return(
        <div>
            {/* <NavBarAcc/> */}
            
                <div className="BodyBox">
                    <BoxProfile />
                    <div className="Profile__Info">
                            
                                <div className="itemindent">    
                                    <label>ชื่อ : <br /></label>
                                </div>
                                    <label className="label_2">User Name</label>
                            
                            <div className="itemindent">
                                <label>อีเมล : <br /></label>
                            </div>
                                <label className="label_2">testemail@gmail.com</label>
                            

                            <div className="itemindent">
                                <label>หมายเลขโทรศัพท์: <br /></label>
                            </div>
                                <label className="label_2">08123456789</label>

                            <div className="itemindent">
                                <label>ที่อยู่: <br /></label>
                            </div>
                                <label className="label_2">123/4 Ladkrabang, BKK 10520</label>
                            
                    </div>
                    
                    <div className="Profile__Button">
                        <div className="edit_BtnPos">
                            <Link to="/editprofile"><button className="white_Btn">แก้ไขโปรไฟล์</button></Link>
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default Profile
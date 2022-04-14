import React from "react";
import { Link } from "react-router-dom";
import "../css/ProfilePage.css"
import NavBarAcc from '../component/NavBarAcc';
import BoxProfile from '../component/ProfileBox';

const Profile = () =>{
    return(
        <div>
            <NavBarAcc/>
            
                <div className="BodyBox">
                    <BoxProfile />
                    <div className="Profile__Info">
                            {/* <div className="item_Info"> */}
                                <div className="itemindent">    
                                    <label>ชื่อ : <br /></label>
                                </div>
                                    <label>User Name</label>
                            {/* </div> */}

                            {/* <div className="item_Info"> */}
                            <div className="itemindent">
                                <label>อีเมล : <br /></label>
                            </div>
                                <label>testemail@gmail.com</label>
                            {/* </div> */}

                            <div className="itemindent">
                                <label>หมายเลขโทรศัพท์: <br /></label>
                            </div>
                                <label>08123456789</label>

                            <div className="itemindent">
                                <label>ที่อยู่: <br /></label>
                            </div>
                                {/* <label>123/4 Ladkrabang, BKK 10520</label> */}
                            
                    </div>
                    
                    <div className="Profile__Button">
                    {/* <input type="file" /> */}
                    {/* <p><button className="purple_Btn">บันทึก</button></p> */}
                        <div className="edit_BtnPos">
                            <Link to="/editprofile"><button className="white_Btn">แก้ไขโปรไฟล์</button></Link>
                        </div>
                    </div>
                    
                    {/* <div className="ProfilePageFont">
                    </div> */}
                    {/* <input> </input> */}
                </div>
        </div>
    )
}

export default Profile
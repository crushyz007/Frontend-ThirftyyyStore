import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/ProfilePage.css"
import "../css/ProfileBox.css"
import NavBarAcc from '../components/NavBarAcc';
import BoxProfile from '../components/ProfileBox';

const Profile = () =>{
    
    const[details,setDetails] = useState({username:"",email:"",telnum:"",addr:""})

    // useEffect(()=>{
    //     getProfile();      
    // },[])
    
    return(
        <div>
            <NavBarAcc/>
            
                <div className="BodyBox">
                    <BoxProfile />
                    <div className="Profile__Info">
                            <div className="itemindent">    
                                <label>ชื่อ : <br /></label>
                            </div>
                                <label className="label_2">{details.username}เอ</label>
                            
                            <div className="itemindent">
                                <label>อีเมล : <br /></label>
                            </div>
                                <label className="label_2">{details.email}Grace@gmail.com</label>
                            

                            <div className="itemindent">
                                <label>หมายเลขโทรศัพท์: <br /></label>
                            </div>
                                <label className="label_2">{details.telnum}0812345678</label>

                            <div className="itemindent">
                                <label>ที่อยู่: <br /></label>
                            </div>
                                <label className="label_2">{details.addr}123/1 Ladkrabang BKK 1050</label>
                            
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
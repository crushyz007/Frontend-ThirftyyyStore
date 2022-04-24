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
                                <label className="label_2">{details.username}ทนงทวย คงควรคอย</label>
                            
                            <div className="itemindent">
                                <label>อีเมล : <br /></label>
                            </div>
                                <label className="label_2">{details.email}Tanongtuay__lnwza007@gmail.com</label>
                            

                            <div className="itemindent">
                                <label>หมายเลขโทรศัพท์: <br /></label>
                            </div>
                                <label className="label_2">{details.telnum}0812345678</label>

                            <div className="itemindent">
                                <label>ที่อยู่: <br /></label>
                            </div>
                                <label className="label_2">{details.addr}123/45 หอพักว่าไงน้องสาว  หมู่บ้านไหวอะป่าวเบเบ้ ซอยยูโนวอิสโกอิ้งดาว ถนนอะเอาละล้าว ม.1 เขตลาดกระบัง แขวงลาดกระบัง กทม. 10500</label>
                            
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
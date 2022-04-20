import React from "react";
import { Link } from "react-router-dom";
import "../css/EditProfilePage.css"
import "../css/ProfileBox.css"
import NavBarAcc from '../components/NavBarAcc';
import BoxProfile from '../components/ProfileBox';
import { useState,useEffect} from "react";
// import { Tooltip } from "react-bootstrap;"
const EditProfile = () =>{
    const [images, setImages] = useState([]); 
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => {
        if(images.length < 1) return;
        const newImageUrls = [];
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)))
        setImageURLs(newImageUrls);
    }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files]);
    }

    return(
        <div>
            <NavBarAcc />
            <div className="BodyBox"> 
            <BoxProfile />
            <div className="Profile__Edit"> 
                <div>
                    <label>ชื่อ :</label>
                    {/* <Tooltip title="Delete"><button>asdasd</button></Tooltip> */}
                    <i class="fi fi-rr-exclamation"></i>
                </div>
                    <input type="text" name="name" placeholder="User Name"></input>

                <div className="itemindent">
                    <label>อีเมล :</label> 
                    <Link to="/changemail"><label className="updateFont">อัปเดตที่อยู่อีเมล</label></Link>
                </div>
                    <input type="text" name="email" placeholder="email@gmail.com"></input>
                
                <div className="itemindent">
                    <label>หมายเลขโทรศัพท์ :</label>
                </div>
                    <input type="tel" name="tel" placeholder="0812345678"></input>
                
                <div className="itemindent">
                    <label>ที่อยู่ :</label>
                    <Link to="/changeaddr" style={{ textDecoration: 'none' }}><i class="fi fi-sr-pencil"></i></Link>
                </div>
                    <input type="text" name="addr" placeholder="123/4 Ladkrabang, BKK 10520"></input> <br />
                    <Link to="/changepass"><label className="updateFont updateFont2">เปลี่ยนรหัสผ่าน</label></Link>
            
            </div>

            <div className="Profile__UploadBox">
                {imageURLs.map((imageSrc, idx) => (<img key={idx} width="300" height="300" src={imageSrc} />))}
            </div>
            
            <div className="Profile__Button">
                    <input type="file" multiple accept="image/*" onChange={onImageChange} />
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
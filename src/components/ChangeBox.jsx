import React from "react";
import { Link } from "react-router-dom";
import "../css/ChangeBox.css"

const ChangeBox = () =>{

    return(
        <div>
            <div className="boxChange">
                <div className="purpleStuff"></div>
                {/* <div className="Change__Button">
                    <button className="purple_Btn">บันทึก</button>
                    <Link to="/editprofile"><button className="white_Btn">ยกเลิก</button></Link>
                </div> */}
            </div>
        </div>
    )
}

export default ChangeBox
import React from "react";
import "../css/ChangeBox.css"

const ChangeBox = () =>{
    return(
        <div>
            <div className="boxChange">
                <div className="purpleStuff"></div>
                <div className="Change__Button">
                    <button className="purple_Btn">บันทึก</button>
                    <button className="white_Btn">ยกเลิก</button>
                </div>
            </div>
        </div>
    )
}

export default ChangeBox
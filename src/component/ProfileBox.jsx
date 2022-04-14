import React from "react"
import "../css/ProfileBox.css"
import ProfilePic from "../pic/ProfilePic.png"

const ProfileBox = () =>{
    return(
        <div>
            <div className="boxProfile">
                <div className="purpleStuff"></div>
                <div className="ProfileFont">Profile</div>
                <div className="ProfilePic_Box">
                    <img src={ProfilePic} width="300px" height="300px" className="Profile_Pic" />
                </div>
            </div>
            
        </div>
    )
}

export default ProfileBox
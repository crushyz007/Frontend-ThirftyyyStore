import React from "react";
import "../css/ChangeEmailPage.css"
import "../css/ChangeBox.css"
import NavBarAcc from '../component/NavBarAcc';
import BoxChange from '../component/ChangeBox';

const ChangeEmail = () =>{
    return(
        <div>
            <NavBarAcc />
            <div className="BodyBox">
            <BoxChange />
            </div>
        </div>
    )
}
export default ChangeEmail
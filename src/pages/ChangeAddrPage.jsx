import React from "react";
import "../css/ChangeAddrPage.css"
import NavBarAcc from '../components/NavBarAcc';
import AddrBox from '../components/AddAddrBox'

const ChangeAddr = () =>{
    return(
        <div>
        <NavBarAcc />
            <div className="BodyBox">
                <AddrBox />
            </div>
        </div>
    )
}

export default ChangeAddr
import React from "react";
import { Link } from "react-router-dom";
import "../css/ChangeAddrPage.css"
import NavBarAcc from '../components/NavBarAcc';
import AddrBox from '../components/AddAddrBox'

const ChangeAddr = () =>{
    return(
        <div>
        <NavBarAcc />
            <div className="ChangAddr_Header">
                <div className="purpleStuff_ChangeAddr"></div>
                <div className="ChangeAddr_Font">แก้ไขที่อยู่</div>
                <div className="ChangeAddr_Line"></div>
            </div>
        
        <div className="ChangeAddr_Box">
            <AddrBox />
            <div className="ChangeAddr_AddBox"><Link to="/addaddr" style={{ textDecoration: 'none' }}><i class="fi fi-rr-add"></i></Link></div>
            <AddrBox />
            <AddrBox />
        </div>
        
        </div>
    )
}

export default ChangeAddr
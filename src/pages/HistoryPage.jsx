import React from "react";
import '../css/ProfileBox.css'
import '../css/HistoryPage.css'
import NavBarAcc from '../components/NavBarAcc';

const History=()=>{
    return(
        <div>
            <NavBarAcc />
            <div className="History__TopicPos">
                <div className="purplestuff__History"></div>
                <div className="History__Topic">ประวัติการสั่งซื้อ</div>
                <div className="History__Line"></div>
                <thead className="History__FontBox">
                    <tr className="History__Font Font_Left">ชื่อสินค้า</tr>
                    <tr className="History__Font"></tr>
                    <tr className="History__Font">จำนวน</tr>
                    <tr className="History__Font">วันที่</tr>
                    <tr className="History__Font">ราคา</tr>
                    <tr className="History__Font">สถานะ</tr>
                </thead>
            </div>
        </div>
    )
}

export default History
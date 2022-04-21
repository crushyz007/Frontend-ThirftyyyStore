import React from "react";
import '../css/ProfileBox.css'
import '../css/MyCartPage.css'
import RemoveCartModal from "../components/RemoveCartModal";
import NavBarAcc from '../components/NavBarAcc';
import GoodsBox from '../components/GoodsBox'
import { useState } from "react";

const MyCart = () =>{
    
    const [modalShow, setModalShow] = useState(false);

    return(
        <div>
            <NavBarAcc />
            <div className="MyCart__TopicPos">
                <div className="purpleStuff_MyCart"></div>
                <div className="MyCart_Topic">ตะกร้าสินค้า</div>
                <div className="Trash_Pos"><i class="fi fi-rr-trash" onClick={() => setModalShow(true)}></i></div>
                <div className="MyCart_Line"></div>
                <RemoveCartModal 
                    show = {modalShow}
                    onHide = {() => setModalShow(false)} 
                />
                
            </div>

            <div className="MyCart_TopicBox">
                <div className="MyCart_Font">ชื่อสินค้า</div>
                <div className="MyCart_Font">จำนวน</div>
                <div className="MyCart_Font">ราคา</div>
                <p>
                    <input type="checkbox"></input><div className="MyCart_Font">ทั้งหมด</div>
                </p>
            </div>
        
        <GoodsBox />
        </div>
    )
}

export default MyCart
import React from "react";
import '../css/ProfileBox.css'
import '../css/MyCartPage.css'
import RemoveCartModal from "../components/RemoveCartModal";
import NavBarAcc from '../components/NavBarAcc';
import Orders from '../components/Orders'
import { useState } from "react";
import Form from "react-bootstrap/Form";


const MyCart = () =>{
    
    const [modalShow, setModalShow] = useState(false);

    return(
        <div>
            <NavBarAcc />
            <div className="MyCart__TopicPos">
                <div className="purpleStuff_MyCart"></div>
                <div className="MyCart_Topic">ตะกร้าสินค้า</div>
                {/* <div className="Trash_Pos"><i class="fi fi-rr-trash" onClick={() => setModalShow(true)}></i></div> */}
                <div className="MyCart_Line"></div>
                <RemoveCartModal 
                    show = {modalShow}
                    onHide = {() => setModalShow(false)} 
                />

                <thead className="MyCart__FontBox">
                    <tr className="MyCart__Font Font_Left" >ชื่อสินค้า</tr>
                    <tr className="MyCart__Font"></tr>
                    <tr className="MyCart__Font" >จำนวน</tr>
                    <tr className="MyCart__Font" >ราคา</tr>
                    <tr className="MyCart__Font Font_Right" >
                        {/* <input type="checkbox" id="total" /> */}
                        {/* <label for="total">ลบสินค้า</label> */}
                        <i class="fi fi-rr-trash"></i>
                    </tr>
                </thead>
            </div>
        
        <Orders />
            <Form>
                {/* <div className="MyCart__Amount">
                    <div>
                    <label htmlFor="total" className="total">ทั้งหมด</label>
                    <label htmlFor="price" className="price">x</label>
                    <label htmlFor="baht" className="baht">THB</label><br />
                    <label htmlFor="quantity" className="quantity">จำนวน</label>
                    <label htmlFor="amount" className="amount">x</label>
                    <label htmlFor="piece" className="piece">ชิ้น</label><br />
                    </div>

                    <button type="submit" className="Order_Btn">สั่งซื้อ</button>
                </div> */}
            </Form>
        </div>
    )
}

export default MyCart
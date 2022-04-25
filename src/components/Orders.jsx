import React from "react";
import '../css/Orders.css'

const Orders =(props)=>{
    const { cartItems, onRemove } = props;
    // const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    // const totalPrice = itemsPrice;

    return(
        <div>
            <div className="Orders__BoxPos">
                <thead className="Orders__FontBox">
                    <tr className="Orders__Font ">การ์ดน้องเบบี้ไวเปอร์</tr>                
                    <tr className="Orders__Font Font__Right">1</tr>
                    <tr className="Orders__Font Font__Right2">500</tr>
                    <tr className="Orders__Font Font__Right3">
                        <button className="Orders__Btn">-</button>
                        {/* <input type="checkbox" id="total2" />
                        <label for="total2">ทั้งหมด</label> */}
                    </tr>
                        
                </thead>
                <div className="Orders__Line"></div>
            </div>
            
        </div>
    )
}

export default Orders
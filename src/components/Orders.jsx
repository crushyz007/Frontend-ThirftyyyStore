import React from "react";
import '../css/Orders.css'

const Orders =(props)=>{
    
    return(
        <div className="BodyBox">
            <div className="Order_Box">
            <div>
                <img src=""></img>
                <label htmlFor="name" className="name">ชื่อ</label>
            </div>
            <label htmlFor="quantity" className="quantity">จำนวน</label>
            <label htmlFor="price" className="price">ราคา</label>
            <input type="checkbox" className="check" />
            </div>
        </div>
    )
}

export default Orders
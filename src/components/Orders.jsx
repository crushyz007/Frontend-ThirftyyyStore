import React from "react";
import '../css/Orders.css'

const Orders =(props)=>{
    
    return(
        // <div className="BodyBox">
        //     <div className="Order_Box">
        //     <div>
        //         <img src=""></img>
        //         <label htmlFor="name" className="name">ชื่อ</label>
        //     </div>
        //     <label htmlFor="quantity" className="quantity">จำนวน</label>
        //     <label htmlFor="price" className="price">ราคา</label>
        //     <input type="checkbox" className="check" />
        //     </div>
        // </div>
        <div>
            <div className="Orders__BoxPos">
                <thead className="Orders__FontBox">
                    <tr className="Orders__Font">ชื่อ</tr>
                    <tr className="Orders__Font">จำนวน</tr>
                    <tr className="Orders__Font">ราคา</tr>
                    <tr className="Orders__Font">
                        <input type="checkbox" id="total2" />
                        <label for="total2">ทั้งหมด</label>
                    </tr>
                </thead>
            </div>
        </div>
    )
}

export default Orders
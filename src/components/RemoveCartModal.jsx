import React, { useState } from "react"
import {Modal} from 'react-bootstrap'
import '../css/RemoveCartModal.css'

const RemoveCartModal = (props) => {
    const handleYes = (a, b) => {
        console.log(a, b.type)
    }
    return (
        <Modal
            {...props}
            contentClassName="content__box__MyCart"
            backdropClassName="backdrop__box"
            aria-labelledby="contained-modal-title-vcenter"
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Body>
                <div className="box__prize">
                    <div className="h4__box">
                        <h4 className="h4__MyCart">ลบสินค้าออกจากตะกร้า ?</h4>
                    </div>
                    <div className="button__prize">
                        <button onClick={(event) => handleYes("Yes", event)} className="btn__yes" type="submit" >ยืนยัน</button>
                        <button onClick={props.onHide} className="btn__no">ยกเลิก</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default RemoveCartModal
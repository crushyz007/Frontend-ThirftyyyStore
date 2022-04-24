import React from "react";
import "../css/AddAddrPage.css"
import "../css/ChangeBox.css"
import NavBarAcc from '../components/NavBarAcc';
import BoxChange from '../components/ChangeBox';
import {Dropdown} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState,useEffect} from "react";
import Form from "react-bootstrap/Form";

const AddAddr = () =>{
//     function MyForm() {
//         const [myProvince, setMyProvince] = useState("จังหวัด");
        
//         const handleChange = (event) => {
//         setMyProvince(event.target.value)
//         }
// }
    const[details,setDetails] = useState({name:"",surname:"",road:"",subdistrict:"",district:"",province:"",postcode:"",telnum:"",other:""})
    const[error,setError] = useState("")
    const[noti,setNoti] = useState("")
    const[isSubmit,setIsSubmit] = useState(false)
    
    const handleChange = (e) =>{
        const{name,value} = e.target
        setDetails({...details,[name]:value})
    }
    const submitHandler = (e) =>{
            e.preventDefault();
            AddAddr(details);
            setError(validate(details));
            setIsSubmit(true)
        }

    useEffect(()=>{
        console.log(error)
            // console.log(details)
        if(Object.keys(error).lenght=== 0 && isSubmit){
            console.log(details);  
                }
    },[error]);
    
    const AddAddr=details=>{
        const regexTelnum = /((\+66|0)(\d{1,2}\-?\d{3}\-?\d{3,4}))|((\+๖๖|๐)([๐-๙]{1,2}\-?[๐-๙]{3}\-?[๐-๙]{3,4}))/gm
        console.log(details)
        if(!details.telnum){
            setNoti("")
        }
        else if(!regexTelnum.test(details.telnum)){
            setNoti("นี่ไม่ใช่ format ของเบอร์โทร กรุณากรอกใหม่")}
        }

    const validate=(values)=>{
        const errors={};
        const regexTelnum = /((\+66|0)(\d{1,2}\-?\d{3}\-?\d{3,4}))|((\+๖๖|๐)([๐-๙]{1,2}\-?[๐-๙]{3}\-?[๐-๙]{3,4}))/gm

        if(!values.telnum){
            errors.telnum = "";
        }
        else if (!regexTelnum.test(values.telnum)) {
            errors.telnum = "This is not a valid telnum format!";
        }else if(values.telnum.lenght > 10){
            errors.telnum = "This is not a valid telnum format!";
        }
        return errors;
    }

    return(
        <div>
            <NavBarAcc /> 
            <div className="Change__Topic">เพิ่มที่อยู่</div>
            <div className="BodyBox">
                <BoxChange />
                
                <Form className="AddAddr__Info" onSubmit={submitHandler}>
                    <div>
                        <label type="text" name="name" >ชื่อ</label>
                        <label className="indentText_Line1" >นามสกุล</label> <br />
                        <input className="input_Name" type="text" name="name" value={details.name} onChange={handleChange}></input>
                        <input className="input_Name indentBox_Line1" type="text" name="surname" value={details.surname} onChange={handleChange}></input>
                    </div>

                    <div>
                        <label className="indentText_Line2" >ถนน / ซอย</label>
                        <label className="indentText2_Line2">ตำบล</label>
                        <label className="indentText3_Line2">อำเภอ / เขต</label> <br />
                        <input className="input_Addr indentBox_Line2" type="text" name="road" value={details.road} onChange={handleChange}></input>
                        <input className="input_Addr indentBox_Line2" type="text" name="subdistrict" value={details.subdistrict} onChange={handleChange}></input>
                        <input className="input_Addr indentBox_Line2" type="text" name="district" value={details.district} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label className="indentText1_Line3">จังหวัด</label>
                        <label className="indentText2_Line3">รหัสไปรษณีย์</label>
                        <label className="indentText3_Line3">เบอร์โทรศัพท์</label> <br />
                    
                    {/* <Dropdown className="Dropdown_Size" >
                            <Dropdown.Toggle id="dropdown-basic" className="Dropdown_Color" >จังหวัด</Dropdown.Toggle>
                            <Dropdown.Menu className="Dropdown_Color">
                                <Dropdown.Item style={{height:"100px",width:"auto",overflowY:'auto'}}>
                                <Dropdown.Item href="#/action-1" >กระบี่</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" >กรุงเทพฯ</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">กาญจนบุรี</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">กาฬสินธุ์</Dropdown.Item>
                                <Dropdown.Item href="#/action-5">กำแพงเพชร</Dropdown.Item>
                                <Dropdown.Item href="#/action-6">ขอนแก่น</Dropdown.Item>
                                <Dropdown.Item href="#/action-7">จันทบุรี</Dropdown.Item>
                                <Dropdown.Item href="#/action-8">ฉะเชิงเทรา</Dropdown.Item>
                                <Dropdown.Item href="#/action-9">ชลบุรี</Dropdown.Item>
                                <Dropdown.Item href="#/action-10">ชัยนาท</Dropdown.Item>
                                <Dropdown.Item href="#/action-11">ชัยภูมิ</Dropdown.Item>
                                <Dropdown.Item href="#/action-12">ชุมพร</Dropdown.Item>
                                <Dropdown.Item href="#/action-13">เชียงราย</Dropdown.Item>
                                <Dropdown.Item href="#/action-14">เชียงใหม่</Dropdown.Item>
                                <Dropdown.Item href="#/action-15">ตรัง</Dropdown.Item>
                                <Dropdown.Item href="#/action-16">ตราด</Dropdown.Item>
                                <Dropdown.Item href="#/action-17">ตาก</Dropdown.Item>
                                <Dropdown.Item href="#/action-18">นครนายก</Dropdown.Item>
                                <Dropdown.Item href="#/action-19">นครปฐม</Dropdown.Item>
                                <Dropdown.Item href="#/action-20">นครพนม</Dropdown.Item>
                                <Dropdown.Item href="#/action-21">นครราชสีมา</Dropdown.Item>
                                <Dropdown.Item href="#/action-22">นครศรีธรรมราช</Dropdown.Item>
                                <Dropdown.Item href="#/action-23">นครสวรรค์</Dropdown.Item>
                                <Dropdown.Item href="#/action-24">นนทบุรี</Dropdown.Item>
                                <Dropdown.Item href="#/action-25">นราธิวาส</Dropdown.Item>
                                <Dropdown.Item href="#/action-26">น่าน</Dropdown.Item>
                                <Dropdown.Item href="#/action-27">บึงกาฬ</Dropdown.Item>
                                <Dropdown.Item href="#/action-28">บุรีรัมย์</Dropdown.Item>
                                <Dropdown.Item href="#/action-29">ปทุมธานี</Dropdown.Item>
                                <Dropdown.Item href="#/action-30">ประจวบคีรีขันธ์</Dropdown.Item>
                                <Dropdown.Item href="#/action-31">ปราจีนบุรี</Dropdown.Item>
                                <Dropdown.Item href="#/action-32">ปัตตานี</Dropdown.Item>
                                <Dropdown.Item href="#/action-33">พะเยา</Dropdown.Item>
                                <Dropdown.Item href="#/action-34">พระนครศรีอยุธยา</Dropdown.Item>
                                <Dropdown.Item href="#/action-35">พังงา</Dropdown.Item>
                                <Dropdown.Item href="#/action-36">พัทลุง</Dropdown.Item>
                                <Dropdown.Item href="#/action-37">พิจิตร</Dropdown.Item>
                                <Dropdown.Item href="#/action-38">พิษณุโลก</Dropdown.Item>
                                <Dropdown.Item href="#/action-39">เพชรบุรี</Dropdown.Item>
                                <Dropdown.Item href="#/action-40">เพชรบูรณ์</Dropdown.Item>
                                <Dropdown.Item href="#/action-41">แพร่</Dropdown.Item>
                                <Dropdown.Item href="#/action-42">ภูเก็ต</Dropdown.Item>
                                <Dropdown.Item href="#/action-43">มหาสารคาม</Dropdown.Item>
                                <Dropdown.Item href="#/action-44">มุกดาหาร</Dropdown.Item>
                                <Dropdown.Item href="#/action-45">แม่ฮ่องสอน</Dropdown.Item>
                                <Dropdown.Item href="#/action-46">ยโสธร</Dropdown.Item>
                                <Dropdown.Item href="#/action-47">ยะลา</Dropdown.Item>
                                <Dropdown.Item href="#/action-48">ร้อยเอ็ด</Dropdown.Item>
                                <Dropdown.Item href="#/action-49">ระนอง</Dropdown.Item>
                                <Dropdown.Item href="#/action-50">ระยอง</Dropdown.Item>
                                <Dropdown.Item href="#/action-51">ราชบุรี</Dropdown.Item>
                                <Dropdown.Item href="#/action-52">ลพบุรี</Dropdown.Item>
                                <Dropdown.Item href="#/action-53">ลำปาง</Dropdown.Item>
                                <Dropdown.Item href="#/action-54">ลำพูน</Dropdown.Item>
                                <Dropdown.Item href="#/action-55">เลย</Dropdown.Item>
                                <Dropdown.Item href="#/action-56">ศรีสะเกษ</Dropdown.Item>
                                <Dropdown.Item href="#/action-57">สกลนคร</Dropdown.Item>
                                <Dropdown.Item href="#/action-58">สงขลา</Dropdown.Item>
                                <Dropdown.Item href="#/action-59">สตูล</Dropdown.Item>
                                <Dropdown.Item href="#/action-60">สมุทรปราการ</Dropdown.Item>
                                <Dropdown.Item href="#/action-61">สมุทรสงคราม</Dropdown.Item>
                                <Dropdown.Item href="#/action-62">สมุทรสาคร</Dropdown.Item>
                                <Dropdown.Item href="#/action-63">สระแก้ว</Dropdown.Item>
                                <Dropdown.Item href="#/action-64">สระบุรี</Dropdown.Item>
                                <Dropdown.Item href="#/action-65">สิงห์บุรี</Dropdown.Item>
                                <Dropdown.Item href="#/action-66">สุโขทัย</Dropdown.Item>
                                <Dropdown.Item href="#/action-67">สุพรรณบุรี</Dropdown.Item>
                                <Dropdown.Item href="#/action-68">สุราษฎร์ธานี</Dropdown.Item>
                                <Dropdown.Item href="#/action-69">สุรินทร์</Dropdown.Item>
                                <Dropdown.Item href="#/action-70">หนองคาย</Dropdown.Item>
                                <Dropdown.Item href="#/action-71">หนองบัวลำภู</Dropdown.Item>
                                <Dropdown.Item href="#/action-72">อ่างทอง</Dropdown.Item>
                                <Dropdown.Item href="#/action-73">อำนาจเจริญ</Dropdown.Item>
                                <Dropdown.Item href="#/action-74">อุดรธานี</Dropdown.Item>
                                <Dropdown.Item href="#/action-75">อุตรดิตถ์</Dropdown.Item>
                                <Dropdown.Item href="#/action-76">อุทัยธานี</Dropdown.Item>
                                <Dropdown.Item href="#/action-77">อุบลราชธานี</Dropdown.Item>

                            </Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown> */}
                        {/* <form>
                            <select value={myProvince} onChange={handleChange}>
                                <option value="province1">BKK</option>
                                <option value="Volvo">Volvo</option>
                                <option value="Fiat">Fiat</option>
                            </select>
                        </form> */}
                        {/* <Form.Select className="Form_Color">
                            <option></option>
                            <option value="1">กระบี่</option>
                            <option value="2">กรุงเทพฯ</option>
                            <option value="3">กาญจนบุรี</option>
                            <option value="3">กาญจนบุรี</option>
                            <option value="3">กาญจนบุรี</option>
                            <option value="3">กาญจนบุรี</option>
                            <option value="3">กาญจนบุรี</option>
                            <option value="3">กาญจนบุรี</option>
                            <option value="3">กาญจนบุรี</option>
                            <option value="3">กาญจนบุรี</option>
                            <option value="3">กาญจนบุรี</option>
                            <option value="3">กาญจนบุรี</option>
                            <option value="3">กาญจนบุรี</option>
                            <option value="3">กาญจนบุรี</option>
                            <option value="3">กาญจนบุรี</option>
                            <option value="3">กาญจนบุรี</option>
                        </Form.Select> */}
                        

                        
                    </div>
                    <div>   
                        <input  className="input_Addr indentBox1_Line3" type="text" name="province" value={details.province} onChange={handleChange} />
                        <input className="input_Addr indentBox2_Line3" type="text" name="postcode" value={details.postcode} onChange={handleChange}></input>
                        <input className="input_Addr indentBox2_Line3" type="text" name="telnum" value={details.telnum} onChange={handleChange}></input>
                    </div> 

                    <div>
                        <label className="indentText_Line4">เพิ่มเติม</label> <br /></div>
                    <div>    
                        <input className="input_More indentBox_Line4" type="text" name="other" value={details.other} onChange={handleChange}></input>
                    </div>

                    <div className="AddAddrChange__Button">
                        <button className="purple_Btn" type="submit" onClick={submitHandler}>บันทึก</button>
                        <Link to="/editprofile"><button className="white_Btn">ยกเลิก</button></Link>
                    </div>  
                    
                </Form>
                
            </div>
            {(noti != "")?(<div className="AddAddrPage__Noti">{noti}</div>):""}
        </div>
    )
}
export default AddAddr
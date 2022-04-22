import React,{ useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import '../css/LoginPage.css'

const Login = () => {

    const adminUser ={
        username:"admin1",
        password:"admin"
    }

    const[user,setUser] = useState({username:""});
    const[error,setError] = useState("");

    const Login = details=>{
        console.log(details);
        
        if (details.username == adminUser.username && details.password == adminUser.password){
        console.log("Logged in");
        }
        else {
            console.log("Invalid User");
            setError("Invalid User");
        }
    }

    // const Logout = () =>{
    //     setUser({username:"",email:""})
    //     console.log("Logout");
    // }
    const [details,setDetails] = useState({username:"",password:""});
    

    const submitHandler = e=>{
        e.preventDefault();
        Login(details);
    }

    const handleChange = e =>{
        const{name,value} = e.target
        setDetails({...details,[name]:value})
    }

    return (
        <div>
            {/* <div className="winkle">
                <div class="winkle winkle1"></div>
                <div class="winkle winkle2"></div>
            </div> */}
            <div className="BodyBox">
                <div className="box">
                    <div class="linearbox">
                        <Link to='/profile'><button>Profile</button></Link>
                        <Link to='/mycart'><button>Cart</button></Link>
                    </div>
                    
                    <div>
                        <div className="font__group">
                            <div className="font1">Welcome to</div>
                            <div className="font2">Triftyyy Store !</div>
                        </div>

                        <Form className="form-group" onSubmit={submitHandler}>
                            <div className="item1">
                                <label >ชื่อผู้ใช้งาน <br /></label>
                                <input type="text" name="username" id="username" onChange={handleChange}  />
                            </div >
                            <div className="item2">
                                <label >รหัสผ่าน <br /></label>
                                <input type="password" name="password" id="password" onChange={handleChange} />
                            </div>
                            <div>
                                    <button className="button" type="submit">เข้าสู่ระบบ</button>
                            </div>
                        </Form>

                        <div className="line-group">
                            <div className="line"></div>
                            <p className="font3">หรือ</p>
                            <div className="line"></div>
                        </div>

                        <p className="font4">ยังไม่มีบัญชีใช่ไหม ?</p>
                        <Link to='/register' style={{ textDecoration: 'none' }}><p className="purplefont font7"> สมัครเลย</p></Link>
                        
                        <Link to="/reset" style={{ textDecoration: 'none' }}><p className="purplefont font5">ลืมรหัสผ่าน ?</p></Link>
                    </div>

                </div>
    </div>
    </div>
    )
}

export default Login
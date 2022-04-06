import React from "react";
import { Link } from "react-router-dom";
import '../css/login.css'

const Login = () => {
    return (
        <div>
            <div className="winkle">
                <div class="winkle winkle1"></div>
                <div class="winkle winkle2"></div>
            </div>

            <div className="box">
                <div class="linearbox"></div>
                
                <div>
                    <div className="font__group">
                        <div className="font1">Welcome to</div>
                        <div className="font2">Triftyyy Store !</div>
                    </div>
                    <form className="form-group">
                        <div className="item1">
                            <label >Username <br /></label>
                            <input type="text" name="uname" />
                        </div >
                        <div className="item2">
                            <label >Password <br /></label>
                            <input type="password" name="pass" />
                        </div>
                        <div>
                                <button class="button">Sign in</button>
                        </div>
                    </form>

                    <div className="line-group">
                        <div className="line"></div>
                        <p className="font3">OR</p>
                        <div className="line"></div>
                    </div>

                    <p className="font4">Don't have an account ?</p><p></p>
                    <Link to='/register'><button>Register</button></Link>
                </div>

            </div>
    </div>
    )
}

export default Login
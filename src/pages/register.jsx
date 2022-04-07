import React from "react";
import { Link } from "react-router-dom";
import '../css/register.css'

const Register = () => {
    return (
        <div>
            
            <div className="box">
                <div class="linearbox"></div>
                    <div>
                        <div className="font__groupRegister">
                            <div className="font2">Hello, Join us!</div>

                            <form className="form-groupRegister">
                                <div className="itemindent">    
                                    <label >Username <br /></label>
                                    <input type="text" name="uname" />
                                </div>
                                <div className="itemindent">    
                                    <label >Email address <br /></label>
                                    <input type="text" name="email" />
                                </div>    
                                <div className="itemindent">   
                                    <label >Password <br /></label>
                                    <input type="text" name="pass" />
                                </div>     
                                <div className="itemindent">
                                    <label >Confirm Password <br /></label>
                                    <input type="text" name="cpass" />
                                </div>
                                <div>
                                <button className="button buttonRegister">Start Now !</button>
                                </div>
                            </form>

                        </div>
                        <p className="font6">Already have an account? 
                        <Link to="/"><p className="purplefont font8">Log in</p> </Link></p>
                    </div>
            </div>
        
        </div>
    )
}

export default Register
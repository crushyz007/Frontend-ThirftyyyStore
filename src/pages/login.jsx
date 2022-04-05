import React from "react";
import '../css/login.css'

const Login = () =>{
    return(
    <div>
        
        <div className="winkle">
            <div class="winkle winkle1"></div>
            <div class="winkle winkle2"></div>    
        </div>
        <div className="box">
            <div className="font1">Welcome to</div>
            <div className="font2">Triftyyy Store !</div>
            <div className="username">Username</div>
            {/* <form class="input input-group-lg" > <input type="text" class="form"></input></form> */}
            <div className="password">Password</div>
            <div class="linearbox"></div>
            {/* <form class="input input-group-lg" ><input type="text" class="form"></input></form> */}
        </div>
        <div className="inputright">
            <input type="text" class="form"></input>
            <input type="text" class="form"></input>
        </div>
    </div>
    )    
}

export default Login
import React from "react";

import "./Login.css"
function Signup(){
    return(
        <div>
        <div className="container">
            <h2>SIGNUP</h2>
        <label htmlFor="uname"><b>Name</b></label>
        <input type="text" placeholder="Enter your name" name="uname" required />
        <br></br>
        
        <label htmlFor="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />
        <br></br>
        
        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
        <br></br>
        <button type="submit">SIGNUPhg</button>
      
      </div>

        </div>
    );
}
export default Signup;
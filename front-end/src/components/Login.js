import React, { useState } from "react";
import Menus from "./Menus";
import { Row, Col } from 'reactstrap';
import { Button } from "reactstrap";
import '../App.css';


function Login() {
    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage
            .getItem("Password")
            .replace(/"/g, "");
        let mail = localStorage.getItem("Email").replace(/"/g, "");


        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if (passwordlog !== pass || emaillog !== mail) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }

    return (
        <div className="container">
            <div className="login-form">
            {home ? (
                <form onSubmit={handleLogin}>
                    <h2> Sign In !!</h2>
                    <div className="input-container">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email" 
                            style={{  width: "400px" , borderRadius: "50px" }}
                            onChange={(event) => setEmaillog(event.target.value)}
                            required
                        />
                    </div><br />

                    <div className="input-container">
                        <label >Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            style={{ width: "400px" , borderRadius: "50px" }}
                            onChange={(event) => setPasswordlog(event.target.value)}
                            required
                        />
                    </div><br />
                   
                        <Button 
                        type="submit"
                        className="button-container" 
                        style={{ width: "150px" }}
                        >
                            Login
                        </Button>
                   

                    {flag && (
                        <div className="error">
                            Email id or password is Incorrect!! Keep trying.
                        </div>
                    )}
                </form>
            ) : (
                <Col md={4}>
                    <Menus />
                </Col>

            )}
        </div>
        </div>

    );
}

export default Login;

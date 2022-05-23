import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";


function LoginRegister() {
    const navigate = useNavigate();
    return (
        <>
            <div className="container">
                <div className="login-form" >
                    <br />
                    <Button 
                    type="submit"
                    className="button-container" 
                    style={{ width: "150px" }}
                    onClick={() => navigate("/Registration")}>
                        Register
                    </Button>
                    <Button 
                    type="submit"
                    className="button-container" 
                    style={{ width: "150px" }}
                    onClick={() => navigate("/Login")}>
                        Login
                    </Button>
                </div>
            </div>
        </>
    );
}
export default LoginRegister;


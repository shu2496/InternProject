import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";


function LoginRegister() {
    const navigate = useNavigate();
    return (
        <>
            <br />
            <Button onClick={() => navigate("/Registration")}>
                Registration</Button>
            <Button onClick={() => navigate("/Login")}>Login</Button>

        </>
    );
}
export default LoginRegister;


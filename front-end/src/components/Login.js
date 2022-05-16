import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Menus from "./Menus";
import { Row, Col } from 'reactstrap';
import { Button } from "reactstrap";

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
        <div>
            {home ? (
                <form onSubmit={handleLogin}>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            style={{ width: "300px" }}
                            onChange={(event) => setEmaillog(event.target.value)}
                        />
                    </div><br />

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            style={{ width: "300px" }}
                            onChange={(event) => setPasswordlog(event.target.value)}
                        />
                    </div><br />

                    <Button type="submit" style={{ backgroundColor: 'black' }}>
                        Login
                    </Button>

                    {flag && (
                        <Alert color="primary" variant="warning">
                            Fill correct Info else keep trying.
                        </Alert>
                    )}
                </form>
            ) : (
                <Col md={4}>
                    <Menus />
                </Col>

            )}
        </div>
    );
}

export default Login;

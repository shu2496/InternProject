import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { Button } from "reactstrap";
import Login from "./Login";

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);



    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone || !profession) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));
            console.log("Saved in Local Storage");

            setLogin(!login);
        }
    }

    function handleClick() {
        setLogin(!login);
    }




    return (
        <>
            <div className="container">
                <div className="login-form">

                    <div>
                        {" "}
                        {login ? (
                            <form onSubmit={handleFormSubmit}>


                                <div className="input-container">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Full Name"
                                        name="name"
                                        style={{ width: "400px", borderRadius: "50px" }}
                                        onChange={(event) => setName(event.target.value)}
                                        required
                                    /><br />
                                </div>

                                <div className="input-container">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        style={{ width: "400px", borderRadius: "50px" }}
                                        onChange={(event) => setEmail(event.target.value)}
                                        required
                                    /><br />
                                </div>

                                <div className="input-container">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        style={{ width: "400px", borderRadius: "50px"}}
                                        onChange={(event) => setPassword(event.target.value)}
                                        required
                                    /><br />
                                </div>

                                <div className="input-container">
                                    <label>Phone No.</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        pattern="[+]{1}[0-9]{11,14}"
                                        className="form-control"
                                        placeholder="Enter contact no"
                                        style={{ width: "400px", borderRadius: "50px"}}
                                        onChange={(event) => setPhone(event.target.value)}
                                        required
                                    />
                                </div><br />

                                <div className="input-container" style={{ width: "300px" }}>
                                    <label>Choose your Profession</label>
                                    <Form.Control
                                        as="select"
                                        onChange={(event) => setProfession(event.target.value)}
                                        required
                                        style={{ width: "400px", borderRadius: "50px"}}
                                    >
                                        <option>Select</option>
                                        <option>Student</option>
                                        <option>Teacher</option>
                                        <option>Software Engineer</option>
                                        <option>Full Stack Developer</option>
                                        <option>other</option>
                                    </Form.Control>

                                </div><br />

                                <Button
                                    type="submit"
                                    className="button-container"
                                    style={{ color: "black", backgroundColor: "white", width: "100px" }}>
                                    Register
                                </Button>
                                <p
                                    onClick={handleClick}
                                    className="forgot-password text-right">

                                    <h2>Already registered ?{" "} then log in!!</h2>
                                </p>
                                {flag && (
                                    <div className="error">
                                        I got it.. you are in hurry!! But every Field is important!!
                                    </div>
                                )}
                            </form>
                        ) : (
                            <Login />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Registration;

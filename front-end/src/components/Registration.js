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
            localStorage.setItem(
                "Password",
                JSON.stringify(password)
            );
            console.log("Saved in Local Storage");

            setLogin(!login);
        }
    }

    function handleClick() {
        setLogin(!login);
    }




    return (
        <>

            <div>
                {" "}
                {login ? (
                    <form onSubmit={handleFormSubmit}>


                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Full Name"
                                name="name"
                                style={{ width: "300px" }}
                                onChange={(event) => setName(event.target.value)}
                            /><br />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                style={{ width: "300px" }}
                                onChange={(event) => setEmail(event.target.value)}
                            /><br />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                style={{ width: "300px" }}
                                onChange={(event) => setPassword(event.target.value)}
                            /><br />
                        </div>

                        <div className="form-group">
                            <label>Phone No.</label>
                            <input
                                type="Phone"
                                className="form-control"
                                placeholder="Enter contact no"
                                style={{ width: "300px" }}
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </div><br />

                        <div className="form-group" style={{ width: "300px" }}>
                            <label>Choose your Profession</label>
                            <Form.Control
                                as="select"
                                onChange={(event) => setProfession(event.target.value)}
                            >
                                <option>Select</option>
                                <option>Student</option>
                                <option>Teacherr</option>
                                <option>Software Engineer</option>
                                <option>Full Stack Developer</option>
                            </Form.Control>
                        </div><br />

                        <Button type="submit" style={{ backgroundColor: 'black' }}>
                            Register
                        </Button>
                        <p onClick={handleClick} className="forgot-password text-right">
                            Already registered{" "}log in?
                        </p>
                        {flag && (
                            <Alert color="primary" variant="danger">
                                I got it you are in hurry! But every Field is important!
                            </Alert>
                        )}
                    </form>
                ) : (
                    <Login />
                )}
            </div>

        </>
    );
}

export default Registration;

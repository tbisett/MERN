import React, { useState } from 'react';

// ALL OF OUR USESTATE VARIABLES/SETTERS
const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [firstnameerror, setfirstNameError] = useState("");
    const [lastnameerror, setLastNameError] = useState("");
    const [emailerror, setEmailError] = useState("");
    const [passworderror, setPasswordError] = useState("");
    const [confirmpassworderror, setConfirmPasswordError] = useState("");

    // CREATE USER ARROW FUNCTION, PREVENT DEFAULT SO PAGE DOESNT REFRESH, NEW USER VAR THAT HOLDS FROM INFO
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
    };

    // FIRST NAME ERROR FUNCTION
    const firstNameError = (event) => {
        setfirstName(event);
        if (event.length < 1) {
            setfirstNameError()
        } else if (event.length < 3) {
            setfirstNameError("First name must be at least 3 chars")
        } else {
            setfirstNameError(<p style={{color:"green"}}>Nice to meet you {event}</p>)
        }
    }

    // LAST NAME ERROR FUNCTION
    const lastNameError = (event) => {
        setlastName(event);
        if (event.length < 1) {
            setLastNameError()
        } else if (event.length < 3) {
            setLastNameError("Last name must be at least 3 chars")
        } else {
            setLastNameError(<p style={{color:"green"}}>Valid</p>)
        }
    }

    // EMAIL ERROR FUNCTION
    const emailError = (event) => {
        setEmail(event);
        if (event.length < 1) {
            setEmailError()
        } else if (event.length < 3) {
            setEmailError("Email must be at least 3 chars")
        } else {
            setEmailError(<p style={{color:"green"}}>Valid</p>)
        }
    }

    // PASSWORD ERROR FUNCTION
    const passwordError = (event) => {
        setPassword(event);
        if (event.length < 1) {
            setPasswordError("")
        } else if (event.length < 8) {
            setPasswordError("must be at least 8 chars")
        } else {
            setPasswordError(<p style={{color:"green"}}>Valid</p>)
        }
    }

    // CONFIRM PASSWORD ERROR FUNCTION
    const confirmPasswordError = (event) => {
        setconfirmPassword(event)
        // setConfirmPasswordError(event);
        if (event.length < 1) {
            setConfirmPasswordError()
        } else if (event !== password) {
            setConfirmPasswordError("confirm password must match password")
        } else {
            setConfirmPasswordError(<p style={{color:"green"}}>Valid</p>)
        }
    }



    return (
        <>
            <br />
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input value={firstName} type="text" onChange={(e) => firstNameError(e.target.value)} placeholder="first name"/> <br />
                    {/* TERNARY OPERATORS FOR ERROR FUNCTIONS */}
                    {firstNameError ? <span style={{ color: "red" }}>{firstnameerror}</span> : <span>&nbsp;</span>}

                </div>
                <div>
                    <label>Last Name: </label>
                    <input value={lastName} type="text" onChange={(e) => lastNameError(e.target.value)} placeholder="last name" /> <br />
                    {lastNameError ? <span style={{ color: "red" }}>{lastnameerror}</span> : <span>&nbsp;</span>}
                </div>
                <div>
                    <label>Email Address: </label>
                    <input value={email} type="text" onChange={(e) => emailError(e.target.value)} placeholder="email"/> <br />
                    {emailError ? <span style={{ color: "red" }}>{emailerror}</span> : <span>&nbsp;</span>}
                </div>
                <div>
                    <label>Password: </label>
                    <input value={password} type="password" onChange={(e) => passwordError(e.target.value)} placeholder="password" /> <br />
                    {passwordError ? <span style={{ color: "red" }}>{passworderror}</span> : <span>&nbsp;</span>}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input value={confirmPassword} type="password" onChange={(e) => confirmPasswordError(e.target.value)} placeholder="confirm password" /> <br />
                    {confirmPasswordError ? <span style={{ color: "red" }}>{confirmpassworderror}</span> : <span>&nbsp;</span>}
                </div>
                <input type="submit" value="Create User" /> <br />
                <br></br>
                <div class="table_div">
                    <table class="table table-hover table-dark table-condensed .w-auto">
                        <caption>Form Info</caption>
                        <thead>
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Confirm Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{email}</td>
                                <td>{password}</td>
                                <td>{confirmPassword}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        </>
    );
};

export default UserForm;
                                

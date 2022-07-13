import React, { useState } from 'react';


const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userNameError, setuserNameError] = useState("")
    const [userEmailError, setuserEmailError] = useState("")
    const [userPassError, setuserPassError] = useState("")

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        setUsername("");
        setEmail("");
        setPassword("");
        setuserNameError("")
    
        
    };
    const userValid = (e) =>{
        setUsername(e);
        console.log(e);
        if(e.length < 2 ){
            setuserNameError("User name must be longer than 2 charachters");
        }else{
            setuserNameError("")
        }

    }
    const emailValid = (e) =>{
        setEmail(e);
        console.log(e);
        if(e.length < 5 ){
            setuserEmailError("User name must be longer than 5 charachters");
        }else{
            setuserEmailError("")
        }

    }
    const passValid = (e) =>{
        setPassword(e);
        console.log(e);
        if(e.length < 8 ){
            setuserPassError("User name must be longer than 8 charachters");
        }else{
            setuserPassError("")
        }

    }

    return (
        <form onSubmit={createUser}>
            <div>
                <label>Username: </label>
                <input type="text" onChange={(e) => userValid(e.target.value)} value={username}/>

                {userNameError}
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => emailValid(e.target.value)} value={email} />
                {userEmailError}
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => passValid(e.target.value)} value={password}/>
                {userPassError}
            </div>
            <input type="submit" value="Create User" />
            {username}

            
        </form>

        
    );
};

export default UserForm;

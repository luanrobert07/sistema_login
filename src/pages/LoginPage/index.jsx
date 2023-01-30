import React, {useState, useContext} from "react";
import {AuthContext} from "../../contexts/auth"

import "./styles.css"

const LoginPage = (event) => {
    const { authenticated, login} = useContext(AuthContext);

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = () => {
        event.preventDefault(); //não recarrega a página
        console.log("submit", {email, password});
        
        login(email, password);
    }


    return (
        <div id="login">
            <h1 className="title">Login do sitema</h1>
            <p>{String(authenticated)}</p>
            <div className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"
                    value={email} onChange={(event) => setEmail(event.target.value)}/>
                </div>

                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password"
                    value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div className="action">
                    <button type="submit">Entrar</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
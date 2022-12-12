import React from "react";
import { LoginContainer, LoginContent } from "./styles";


export default function Login(){
    return(
        <LoginContent>
            <LoginContainer>
                <div>
                    <p>Logo</p>
                </div>
                <div className="txt-field">
                    <label>E-mail:</label>
                    <input type="email"></input>
                </div>
                <div className="txt-field">
                    <label>Password:</label>
                    <input type="password"></input>
                </div>
                <div>
                    <button>Sig in</button>
                    <p>Forget password?</p>
                </div>
            </LoginContainer>
        </LoginContent>
    );
}
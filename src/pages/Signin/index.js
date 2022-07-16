import React, {useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Signin = () => {
    const {signin} = useAuth();
    const navigate = useNavigate();

    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ error, setError] = useState("");

    const handleLogin = () => {
        if(!email | !password) {
            setError("Fill all informations");
            return;
        }

        const res = signin(email, password);

        if(res) {
            setError(res);
            return;
        }

        navigate("/home");

        const handleList = () => {
            if(email.length == 0) {
                alert("There is no users")
                return;
            } 

            
        }
    };

    return (
        <C.Container>
            <C.Label>Login Test</C.Label>
            <C.Content>
                <Input 
                    type="email"
                    placeholder="Inform your email"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}/>

                <Input 
                    type="password"
                    placeholder="Inform your password"
                    value={password}
                    onChange={(e) => [setPassword(e.target.value), setError("")]}/>  

                <C.Label>{error}</C.Label>
                <Button Text="Enter" onClick={handleLogin} />
                <C.LabelSignup>
                    Doesn't have an account?
                    <C.Strong>
                        <Link to="/signup">&nbsp; Register</Link>
                    </C.Strong>
                </C.LabelSignup>
            </C.Content>
        </C.Container>
    );

};

export default Signin;
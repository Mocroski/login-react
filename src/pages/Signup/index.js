import React, {useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const {signup} = useAuth();

    const handleSignup = () => {
        if(!email | !emailConf | !password) {
            setError("Complete all the parameters");
            return;
        } else if (email !== emailConf) {
            setError("The email is no the same");
            return;
        }

        const res = signup(email,password);

        if(res) {
            setError(res);
            return;
        }

        alert("User registration is complete");
        navigate("/");
    };

    return (
        <C.Container>
            <C.Label>Login Test</C.Label>
            <C.Content>
                <Input type="email" placeholder="Your Email" value={email} onChange={(e) => [setEmail(e.target.value), setError("")]} />

                <Input type="email" placeholder="Confirm Email" value={emailConf} onChange={(e) => [setEmailConf(e.target.value), setError("")]} />

                <Input type="password" placeholder="Your Password" value={password} onChange={(e) => [setPassword(e.target.value), setError("")]} />

                <C.labelError>{error}</C.labelError>
                <Button Text="Signin" onClick={handleSignup} />
                <C.LabelSignin>
                    Already a user?
                    <C.Strong>
                        <Link to="/">&nbsp;Login</Link>
                    </C.Strong>
                </C.LabelSignin>
            </C.Content>
        </C.Container>
    )
}
export default Signup;
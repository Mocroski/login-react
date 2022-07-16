import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
    const {signout} = useAuth();
    const navigate = useNavigate();
    const {touch} = useAuth();
    const {list} = useAuth();

    return (
        <C.Container>
            <C.Title>Home</C.Title>
            <Button Text="Touch" onClick={() => [touch()]}>
                Touch
            </Button>
            <Button Text="List" onClick={() => [list(), navigate("/list")]}>
                List
            </Button>
            <Button Text="Exit" onClick={() => [signout(), navigate("/")]}>
                Exit
            </Button>
        </C.Container>
    );
};

export default Home;
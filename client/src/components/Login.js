import { StyledLogin } from "../styles/StyledLogin";
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";
import { BsSquare,BsTriangle } from "react-icons/bs";
import {PiDotOutlineLight} from "react-icons/pi"
import { useState } from "react";

export default function Login() {
    const [visible,setVisible] = useState(false)
    const nav = useNavigate();
    const navToRegister = () => {
        nav("/register")
    }
    
    const makeVisible = () => {
        setVisible(!visible); 
    }
    return (
        <StyledLogin>
            <form>
                <Avatar className="others" sx={{ bgcolor: "lightslategray" }}></Avatar >
                <h1 className="others" id="header">Login</h1>
                <input placeholder="username" type="text" />
                <div  className="eyeContainer">
                    <span style = {{color : "white"}} onClick={makeVisible} className="material-symbols-outlined visible">
                        {visible ? "visibility_off" : "visibility"}
                    </span>
                    <input placeholder="password" type={visible ? "text" : "password"} />
                </div>
                <input id="sub" type="submit" value="Login" />
                <span id="grid1"></span>
                <span id="grid2"></span>
                <span id="grid3"></span>
                <span id="grid4"></span>
                <div className="inputs">
                    <div className="slider"> <span onClick={navToRegister} id="text">don't have an account?</span></div></div>
            </form>

            {Array(10).fill(0).map((n, i) => {
                    return <BsSquare key={i} className={`squares squares${i}`} />
                })
                }
                {Array(15).fill(0).map((n, i) => { //eslint-disable-line
                    if (i > 10) {
                        return <BsTriangle key={i} className={`squares squares${i}`} />
                    }
                })}
                {Array(20).fill(0).map((n, i) => { //eslint-disable-line
                    if (i >= 10) {
                        return <PiDotOutlineLight key={i} className={`squares squares${i}`} />
                    }
                })}
        </StyledLogin>
    )
}
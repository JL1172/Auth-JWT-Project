import { StyledLogin } from "../styles/StyledLogin";
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";
import { BsSquare, BsTriangle } from "react-icons/bs";
import { PiDotOutlineLight } from "react-icons/pi"
import { useContext, useState } from "react";
import { GlobalProvider } from "./contexts/GlobalProvider";
import Spinner1 from "./Spinner";

export default function Login() {
    const { login, changeHandler, inputValues, spinnerOn } = useContext(GlobalProvider);

    const disabled = () => {
        if (inputValues.user_password.length > 3 && inputValues.user_username.length > 3) {
            return false;
        } else {
            return true;
        }
    }

    const [visible, setVisible] = useState(false)
    const nav = useNavigate();
    const navToRegister = () => {
        nav("/register")
    }

    const makeVisible = () => {
        setVisible(!visible);
    }
    const advancedLog = (e) => {
        e.preventDefault();
        e.stopPropagation(); 
        login(e);
    }


    return (
        <StyledLogin>
            {spinnerOn ?
                <Spinner1 />
                :
                <form onSubmit={(e) => advancedLog(e)}>
                    <Avatar className="others" sx={{ bgcolor: "lightslategray" }}></Avatar >
                    <h1 className="others" id="header">Login</h1>
                    <input name="user_username" onChange={(e) => changeHandler(e.target.name, e.target.value)} value={inputValues.user_username} placeholder="username" type="text" />
                    <div className="eyeContainer">
                        <span style={{ color: "white" }} onClick={makeVisible} className="material-symbols-outlined visible">
                            {visible ? "visibility_off" : "visibility"}
                        </span>
                        <input placeholder="password" name="user_password" value={inputValues.user_password} onChange={(e) => changeHandler(e.target.name, e.target.value)} type={visible ? "text" : "password"} />
                    </div>
                    <input disabled = {disabled()} id="sub" type="submit" value="Login" />
                    <span id="grid1"></span>
                    <span id="grid2"></span>
                    <span id="grid3"></span>
                    <span id="grid4"></span>
                    <div className="inputs">
                        <div className="slider"> <span onClick={navToRegister} id="text">don't have an account?</span></div></div>

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
                </form>
            }
        </StyledLogin>
    )
}
import { StyledLogin } from "./styles/StyledLogin";
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const nav = useNavigate();
    const navToRegister = () => {
        nav("/register")
    }
    return (
        <StyledLogin>
            <form>
            <Avatar className = "others" sx={{ bgcolor: "purple" }}></Avatar >
                <h1 className = "others" id = "header">Login</h1>
                <input placeholder="username" type = "text" />
                <input placeholder = "password" type = "password" />
                <input id = "sub" type = "submit" value = "Login"/>
                <span id="grid1"></span>
                <span id="grid2"></span>
                <span id="grid3"></span>
                <span id="grid4"></span>
                <div className="inputs">
                    <div className="slider"> <span onClick={navToRegister} id = "text">don't have an account?</span></div></div>
            </form>
        </StyledLogin>
    )
}
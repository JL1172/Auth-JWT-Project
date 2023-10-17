import { StyledLogin } from "./styles/StyledLogin";
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";

export default function Register() {
    const nav = useNavigate();
    const navToRegister = () => {
        nav("/")
    }
    return (
        <StyledLogin>
            <form>
            <Avatar className = "others" sx={{ bgcolor: "purple" }}></Avatar    >
                <h1 className = "others" id = "header">Register</h1>
                <input placeholder="username" type = "text" />
                <input list = "list" placeholder="role"/>
                <datalist id = "list">
                    <option value = "student" />
                    <option value = "instructor" /> {/**make it so it updates on every load */}
                </datalist>
                <input placeholder = "password" type = "password" />
                <input id = "sub" type = "submit" value = "Register"/>
                <span id="grid1"></span>
                <span id="grid2"></span>
                <span id="grid3"></span>
                <span id="grid4"></span>
                <div className="inputs">
                    <div className="slider2"> <span onClick={navToRegister} id = "text">go to login</span></div></div>
            </form>
        </StyledLogin>
    )
}
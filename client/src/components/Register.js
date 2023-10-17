import { StyledRegister } from "../styles/StyledRegister";
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRoles } from "../axiosActions/axios-actions";
import { BsSquare,BsTriangle } from "react-icons/bs";
import {PiDotOutlineLight} from "react-icons/pi"

export default function Register() {
    const [roles, setRoles] = useState([]);
    const [visible,setVisible] = useState(false)

    const nav = useNavigate();
    const navToRegister = () => {
        nav("/")
    }
    useEffect(() => {
        getRoles().then(res => {
            setRoles(res.data);
        }).catch(err => console.error(err))
    }, [])

    const makeVisible = () => {
        setVisible(!visible); 
    }
    return (
        <StyledRegister>
            <form>
                <Avatar className="others" sx={{ bgcolor: "lightblue" }}></Avatar    >
                <h1 className="others" id="header">Register</h1>
                <input placeholder="username" type="text" />
                <input list="list" placeholder="role" />
                <datalist id="list">
                    {roles.map(n => {
                        return <option key={n.role_id} value={n.role_name} />
                    })}
                </datalist>
                <div  className="eyeContainer">
                    <span style = {{color : "white"}} onClick={makeVisible} className="material-symbols-outlined visible">
                        {visible ? "visibility_off" : "visibility"}
                    </span>
                    <input placeholder="password" type={visible ? "text" : "password"} />
                </div>
                <input id="sub" type="submit" value="Register" />



                <span id="grid1"></span>
                <span id="grid2"></span>
                <span id="grid3"></span>
                <span id="grid4"></span>
                <div className="inputs">
                    <div className="slider2"> <span onClick={navToRegister} id="text">go to login</span></div></div>

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
        </StyledRegister>
    )
}
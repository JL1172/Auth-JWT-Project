import { StyledRegister } from "../styles/StyledRegister";
import Avatar from '@mui/material/Avatar';
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRoles } from "../axiosActions/axios-actions";
import { BsSquare, BsTriangle } from "react-icons/bs";
import { PiDotOutlineLight } from "react-icons/pi"
import { GlobalProvider } from "./contexts/GlobalProvider";
import Spinner1 from "./Spinner";

export default function Register() {
    const { register, changeHandler, inputValues, spinnerOn } = useContext(GlobalProvider);

    const [roles, setRoles] = useState([]);
    const [visible, setVisible] = useState(false)


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

    const disabled = () => {
        if (inputValues.user_password.length > 3 && inputValues.user_username.length > 3 && inputValues.role_name) {
            return false;
        } else {
            return true;
        }
    }


    const advancedReg = (e) => {
        e.preventDefault();
        register(e)
    }
    return (
        <StyledRegister>
            {spinnerOn ?
                <Spinner1 />
                :
                <form onSubmit={(e) => advancedReg(e)}>
                    <Avatar className="others" sx={{ bgcolor: "transparent" }}></Avatar    >
                    <h1 className="others" id="header">Register</h1>
                    <input name="user_username" onChange={(e) => changeHandler(e.target.name, e.target.value)} value={inputValues.user_username} placeholder="username" type="text" />
                    <input id = "in" name="role_name" value={inputValues.role_name} onChange={(e) => changeHandler(e.target.name, e.target.value)} list="list" placeholder="role" />
                    <datalist id="list">
                        {roles.map(n => {
                            return <option key={n.role_id} value={n.role_name} />
                        })}
                    </datalist>
                    <div className="eyeContainer">
                        <span style={{ color: "white" }} onClick={makeVisible} className="material-symbols-outlined visible">
                            {visible ? "visibility_off" : "visibility"}
                        </span>
                        <input placeholder="password" name="user_password" value={inputValues.user_password} onChange={(e) => changeHandler(e.target.name, e.target.value)} type={visible ? "text" : "password"} />
                    </div>
                    <input disabled = {disabled()} id="sub" type="submit" value="Register" />



                    <span id="grid1"></span>
                    <span id="grid2"></span>
                    <span id="grid3"></span>
                    <span id="grid4"></span>
                    <div className="inputs">
                        <div className="slider2"> <span onClick={navToRegister} id="text">go to login</span></div></div>

                    {/* {Array(10).fill(0).map((n, i) => {
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
                    })} */}
                </form>
            }
        </StyledRegister>
    )
}
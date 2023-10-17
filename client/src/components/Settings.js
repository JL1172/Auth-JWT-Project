import { StyledSettings } from "../styles/StyledSettings";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";

import Spinner2 from "./Spinner2";
import { Alert, Avatar } from "@mui/material";
import { accessUserList } from "../axiosActions/axios-actions";


export default function Settings() {
    const [info,setInfo] = useState([]);
    const [successMessage,setSuccesMessage] = useState("");
    const [errorMessage,setErrorMessage] = useState(""); 
    const [select, setSelect] = useState("");
    const [spinnerOn,setSpinnerOn] = useState(false); 

    const highlight = (value) => {
        setSelect(value)
    }


    const [inputValues,setInputValues] = useState({user_password : "", user_username : ""})

    const changeHandler = (name,value) => {
        setInputValues({...inputValues, [name] : value})
    }
    const disabled = () => {
        if (inputValues.user_password.length > 3 && inputValues.user_username.length > 3) {
            return false;
        } else {
            return true;
        }
    }

    const [visible, setVisible] = useState(false)

    const makeVisible = () => {
        setVisible(!visible);
    }
    const advancedLog = (e) => {
        e.preventDefault();
        e.stopPropagation(); 
        setErrorMessage("");
        setSuccesMessage("");
        setSpinnerOn(true)
        accessUserList(inputValues).then(res=> {
            setInfo([res.data])
            setSpinnerOn(false)
        }).catch(err=> {
            setErrorMessage(err.response.data.message)
            setSpinnerOn(false)
        })
    }
    const closeMessage = () => {
        setSuccesMessage("");
        setErrorMessage("");
      }
    

    return (
        <StyledSettings>
            <Tabs value={select} aria-label="basic tabs example">
                <Tab onClick={(e) => highlight(0)} label="Profile Info" />
                <Tab onClick={(e) => highlight(1)} label="Item Two" />
                <Tab onClick={(e) => highlight(2)} label="Item Three" />
            </Tabs>
            {select === 0 &&
                <div >
                    {spinnerOn ? <Spinner2 /> : 
                    <form onSubmit={(e) => advancedLog(e)}>
                        <Avatar className="others" sx={{ bgcolor: "transparent" }}></Avatar >
                        <h1 className="others" id="header">Login to Edit Profile</h1>
                        <input name="user_username" onChange={(e) => changeHandler(e.target.name, e.target.value)} value={inputValues.user_username} placeholder="username" type="text" />
                        <div className="eyeContainer">
                            <span style={{ color: "white" }} onClick={makeVisible} className="material-symbols-outlined visible">
                                {visible ? "visibility_off" : "visibility"}
                            </span>
                            <input placeholder="password" name="user_password" value={inputValues.user_password} onChange={(e) => changeHandler(e.target.name, e.target.value)} type={visible ? "text" : "password"} />
                        </div>
                        <input disabled={disabled()} id="sub" type="submit" value="Login" />
                        </form>}

                </div>
            }
             {errorMessage && <Alert style={{ zIndex: "3", position : "fixed", width : "100%" }} severity="error">{errorMessage}<span onClick={closeMessage} id ="close" className="material-symbols-outlined">
          close
        </span></Alert>}
        {successMessage && <Alert style={{ zIndex: "3", position : "fixed", width : "100%" }} severity="success">{successMessage}<span onClick={closeMessage} id ="close" className="material-symbols-outlined">
          close
        </span></Alert>}
        </StyledSettings>
    )
}
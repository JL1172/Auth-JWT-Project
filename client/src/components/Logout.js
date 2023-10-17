import { Avatar, SpeedDial, SpeedDialAction } from "@mui/material";
import { useContext, useState } from "react";
import { GlobalProvider } from "./contexts/GlobalProvider";
import { CiLogout } from "react-icons/ci";
import {FiSettings} from "react-icons/fi"; 
import {BiHomeAlt2} from "react-icons/bi"; 
import { useNavigate } from "react-router-dom";

export default function Logout2() {
    const { initial, logoutOfProfile } = useContext(GlobalProvider);
    const nav = useNavigate();
    const navToSettings = () => {
        nav("/users/protected/auth/settings")
    }
    const navToHome = () => {
        nav("/user/protected/auth/asdflkjasdI_jwJLIE4ivHJ")
    }
    const actions = [
        { name: "logout", icon: <CiLogout onClick={(e) => logoutOfProfile(e)} style={{ height: "1.3rem", width: "1.3rem" }} /> },
        {name : "profile", icon : <FiSettings onClick={()=> navToSettings()} style={{ height: "1.3rem", width: "1.3rem" }}/>},
        {name : "home", icon : <BiHomeAlt2 onClick={()=> navToHome()} style={{ height: "1.3rem", width: "1.3rem", transform : "rotate(180deg)" }} />}
    ];
    const [initialSecond] = useState(()=> {
        if (window.localStorage.getItem("initial")) {
            return JSON.parse(window.localStorage.getItem("initial"))
        } else {
            window.localStorage.setItem("initial",JSON.stringify(initial))
            return initial; 
        }
    })
    return (
        <div>
            <SpeedDial
                style={{ transform: "rotate(180deg)" }}
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', top: 5, right: 5 }}
                icon={<Avatar style={{ transform: "rotate(180deg)" }} sx={{ bgcolor: "inherit" }}>{initialSecond}</Avatar>}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        sx={{ bgcolor: "whitesmoke" }}
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </div>
    )
}
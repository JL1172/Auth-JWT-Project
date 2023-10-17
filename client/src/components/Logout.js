import { Avatar, SpeedDial, SpeedDialAction } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { GlobalProvider } from "./contexts/GlobalProvider";
import { CiLogout } from "react-icons/ci";
import {FiSettings} from "react-icons/fi"; 

export default function Logout2() {
    const { initial, logoutOfProfile } = useContext(GlobalProvider);
    const actions = [
        { name: "logout", icon: <CiLogout onClick={(e) => logoutOfProfile(e)} style={{ height: "1.3rem", width: "1.3rem" }} /> },
        {name : "settings", icon : <FiSettings style={{ height: "1.3rem", width: "1.3rem" }}/>}
    ];
    const [initialSecond,setInitialSecond] = useState(()=> {
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
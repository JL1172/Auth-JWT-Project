import { Avatar, SpeedDial, SpeedDialAction } from "@mui/material";
import { useContext } from "react";
import { GlobalProvider } from "./contexts/GlobalProvider";
import {CiLogout} from "react-icons/ci"; 

export default function Logout2() {
    const { initial,logoutOfProfile } = useContext(GlobalProvider);
    const actions = [{ name: "logout" }];

    return (
        <div>
            <SpeedDial
                style={{ transform: "rotate(180deg)"}}
                ariaLabel="SpeedDial basic example"
                sx={{  position: 'absolute', top: 5, right: 5 }}
                icon={<Avatar style={{ transform: "rotate(180deg)" }} sx={{ bgcolor: "inherit" }}>{initial}</Avatar>}
            >
                {actions.map((action) => (
                    <SpeedDialAction 
                    sx={{ bgcolor: "whitesmoke" }}
                        key={action.name}
                        icon={<CiLogout onClick={(e)=>logoutOfProfile(e)} style={{height : "1.3rem",width : "1.3rem"}}/>}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </div>
    )
}
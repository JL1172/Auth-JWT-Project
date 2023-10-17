import { StyledUser } from "../styles/StyledUser";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { GlobalProvider } from "./contexts/GlobalProvider";
import Logout2 from "./Logout";
import { Stack } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { accessUserList } from "../axiosActions/axios-actions";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function User() {
    const { initial } = useContext(GlobalProvider);
 
    return (
        <StyledUser>
           
        </StyledUser>
    )
}
import { StyledUser } from "../styles/StyledUser";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { GlobalProvider } from "./contexts/GlobalProvider";
import Logout2 from "./Logout";
import { Stack } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function User() {
    const {initial} = React.useContext(GlobalProvider);
    return (

        <StyledUser>
            {initial && <Logout2 />}
            <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Box>
        </StyledUser>
    )
}

import React, { useMemo, useState } from 'react';
import SideBar from "../src/SideBar";
import Box from '@mui/material/Box';
import { Grid, ThemeProvider, createTheme } from '@mui/material';

export default function MasterData() {
  const[dark,setDark]=useState(true)


  const setDarkValue = () => {
    setDark(!dark);
  };

  const darkTheme = useMemo(() => createTheme({
    palette:{
      mode:dark ? "dark" : "light"
    }
  }),[dark])
  return (
    <ThemeProvider theme={darkTheme}>
    <Box sx={{ display: 'flex' }}>
        <SideBar dark={dark} setDark={setDarkValue} />
      <Box sx={{margin:"50px 0 0 20px"}}>
        <h1>MasterData</h1>
      </Box>
    </Box>
    </ThemeProvider>
  )
}

import React, { useMemo, useState } from 'react';
import SideBar from "../src/SideBar";
import Box from '@mui/material/Box';
import { Grid, ThemeProvider, createTheme ,Avatar} from '@mui/material';
import { makeStyles } from "@mui/styles";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const useStyles = makeStyles(() => ({
  mainCard :{
    backgroundColor:"#1B1B1B",
    height:"110px" ,
     padding:"8px",
     color:"white",
     marginRight:"15px",
     borderRadius:"8px",
     display:"flex",
    justifyContent:"space-between"
     
  },
  avatarStyle:{
    height:"80px",
    width:"80px",
    float:"right"
  },
  cardName :{
    padding:"5px",
    color:"rgb(129 122 122)",
    fontSize: '13px',
    fontWeight: "700"
  },
  cardStatus:{
    margin:"3px 0 0 5px",
    fontSize: '18px',
    fontWeight: "700"
  },
  cardDetails:{
    display:"flex",
    alignItems:"center",
    marginTop:"8px",
    color:"rgb(129 122 122)"
  },
  iconStyle:{
    fontSize:"22px",
    color:"green"
  },
  percintStyle :{
    fontSize:"12px",
    color:"green",
    marginRight:"4px"
  }
 }))

export default function Dashboard() {
  const[dark,setDark]=useState(true)

  const classes = useStyles();


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
    <Grid sx={{ display: 'flex' }}>
        <SideBar dark={dark} setDark={setDarkValue} />
      <Grid container xs={12} sx={{margin:"80px 0 0 20px"}}>
        <Grid xs={12} sx={{display:"flex",justifyContent:"space-between",width:"100%"}}>
          <Grid xs={3} className={`${classes.mainCard}`} direction="row-reverse">
             <Avatar alt='ahmad' sx={{height:"60px",width:"60px",margin:"4px"}} src={('/ahmad.jpg')} />
             <div>
             <div className={`${classes.cardName}`}>
              Ahmad Kasem
              </div>
              <div className={`${classes.cardStatus}`}>Pending</div>
              <div className={`${classes.cardDetails}`}>
                <ArrowUpwardIcon className={`${classes.iconStyle}`}  style={{color:"orange"}} />
                <span className={`${classes.percintStyle}`} style={{color:"orange"}}>8%</span>less recent</div>
             </div>
          </Grid>

          <Grid xs={3} className={`${classes.mainCard}`} direction="row-reverse">
           <Avatar alt='mayar' sx={{height:"60px",width:"60px",margin:"4px"}} src={('/ahmafd.jpg')} />
             <div>
             <div className={`${classes.cardName}`}>Mayar Khaskieh</div>
              <div className={`${classes.cardStatus}`}>Active</div>
              <div className={`${classes.cardDetails}`}>
                <ArrowUpwardIcon className={`${classes.iconStyle}`} />
                <span className={`${classes.percintStyle}`}>25%</span>last month</div>
             </div>
          </Grid>

          <Grid xs={3} className={`${classes.mainCard}`} direction="row-reverse">
           <Avatar alt='ahmad' sx={{height:"60px",width:"60px",margin:"4px"}} src={('/mahmoad.jpg')} />
             <div>
             <div className={`${classes.cardName}`}>
              Mahmoud al-mas
              </div>
              <div className={`${classes.cardStatus}`}>Pending</div>
              <div className={`${classes.cardDetails}`}>
                <ArrowUpwardIcon className={`${classes.iconStyle}`}  style={{color:"yellow"}} />
                <span className={`${classes.percintStyle}`}  style={{color:"yellow"}}>7.5%</span>same before</div>
             </div>
          </Grid>

          <Grid xs={3} className={`${classes.mainCard}`} direction="row-reverse">
           <Avatar alt='souad' sx={{height:"60px",width:"60px",margin:"4px"}} src={('/ahmadd.jpg')} />
             <div>
             <div className={`${classes.cardName}`}>
              Souad saad Al-din
              </div>
              <div className={`${classes.cardStatus}`}>Active</div>
              <div className={`${classes.cardDetails}`}>
                <ArrowUpwardIcon className={`${classes.iconStyle}`} />
                <span className={`${classes.percintStyle}`}>35%</span>this month</div>
             </div>
          </Grid>

        </Grid>
       
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}
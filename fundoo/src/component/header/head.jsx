import React from "react";
import '../header/header.css';
import DehazeIcon from '@mui/icons-material/Dehaze';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import gk from '../header/headerImages/gk.png';
import search from '../header/headerImages/search.png';
import dropdown from '../header/headerImages/dropdown.png';
import refresh from '../header/headerImages/refresh.png';
import setting from '../header/headerImages/setting.png';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import Search from "@mui/icons-material/Search";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
const Header= (props)=>{

    const openDrawer=()=>{

        props.listenToHeader();
    }
 return(
    <Paper elevation={4} >
    <div className="parent">
      
    <div className="section-one">
<MenuIcon  onClick={openDrawer}/>
        {/* <DehazeIcon onClick={openDrawer} style={{boder:'2px solid green'}}/> */}
        <div ><img src={gk} /> </div>
        <div>Keep</div>
    </div>
    {/* <div className='headerSectionTwo'>
        <div className='searchBox'>
            <button type="submit" className='searchButton'>
              <SearchIcon fontSize="large" />  
            </button>
            <input type="text" className='searchField' placeholder="Search" />
        </div>
    </div> */}
    <Search style={{color:'black'}} >
            <SearchIconWrapper> 
              <SearchIcon  />
            </SearchIconWrapper>
            <StyledInputBase
            //   className={classes.SearchField}\
             style={{ color: 'black', position: 'relative', border:'1px solid lightGrey',width: 550,borderRadius:10,position:"relative",top:10  }}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
    <div className="section-three">
    <div><RefreshIcon fontSize="medium"/></div>
    <div><ViewStreamIcon/></div>
    <div><SettingsIcon /></div>
    </div>
    <div className="section-four">
        <div><AppsIcon/></div>
        <div><PersonIcon/></div>
    </div>
</div>
</Paper>
 )   
}
export default Header;
import React from 'react'
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function LandingPage() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const router = useNavigate();

  return (
    <div className='landingPageContainer'>
      <nav>
        <div className='navHeader'>
        <img src="video-call.png" alt="" />
          <h2>ConnectWith</h2>
        </div> 
        <div className='navList'>
          <p  style={{fontSize:"1.2rem"}}onClick={() => {
            router("sdfdwe232")
          }}>Join as Guest</p>

          <p style={{fontSize:"1.2rem"}} onClick={() => {
            router("/auth")
          }}>Register</p>

          <div role='button'>
            <p style={{fontSize:"1.2rem"}} onClick={() => {
              router("/auth")
            }}>Login</p>
          </div>
        </div> 

     <div className='mobileNavlist'>
      <MenuIcon onClick={handleClick}
       id="demo-positioned-button"
       aria-controls={open ? 'demo-positioned-menu' : undefined}
       aria-haspopup="true"
       aria-expanded={open ? 'true' : undefined}></MenuIcon>

<Menu 
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        
      >
        <div className='menuItem'>
        <MenuItem style={{fontSize:"0.9rem"}} onClick={() => {
            router("sdfdwe232")
          }}>Join as Guest</MenuItem>

        <MenuItem style={{fontSize:"0.9rem"}}  onClick={() => {
          router("/auth")
        }}>Register</MenuItem>
        <MenuItem style={{fontSize:"0.9rem"}}  onClick={() => {
          router("/auth")
        }}>Login</MenuItem>
        </div>
      </Menu>
     </div>
        
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1><span style={{color:"#FF9839"}}>Connect</span> with your loved Ones</h1> 

          <p>Cover a distance with connectWith</p>
          <div role='button'>
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div>

          <img src="/mobile.png" alt="" />
        </div>
      </div>
    </div>
  )
}

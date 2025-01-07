import React from 'react'
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

export default function LandingPage() {

  const router = useNavigate();

  return (
    <div className='landingPageContainer'>
      <nav>
        <div className='navHeader'>
        <img src="video-call.png" alt="" />
          <h2>ConnectWith</h2>
        </div> 
        <div className='navList'>
          <p onClick={() => {
            router("sdfdwe232")
          }}>Join as Guest</p>

          <p onClick={() => {
            router("/auth")
          }}>Register</p>

          <div role='button'>
            <p style={{fontSize:"0.8rem"}} onClick={() => {
              router("/auth")
            }}>Login</p>
          </div>
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

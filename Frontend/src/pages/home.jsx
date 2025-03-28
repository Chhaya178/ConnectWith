import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { IconButton } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { AuthContext } from '../contexts/AuthContext';



 function HomeComponent() {

    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    const {addToUserHistory} = useContext(AuthContext);

    let handleJoinVideoCall = async() => {
      await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

  return (
    <>
      <div className="navBar">
      
        <div className='logo'>
          <img src="video-call.png" alt="" />
            <h2>ConnectWith</h2>
        </div>

        <div style={{display:"flex", alignItems:"center"}}>
            <IconButton  className="history" style={{color:"black"}} onClick={() => {
              navigate('/history')
            }}>
                <RestoreIcon/> 
                <p>History</p>
            </IconButton> &nbsp; &nbsp;
            <Button className="LogoutBtn" style={{color:"black", fontWeight:"bold"}}  
             onClick={() => {
                localStorage.removeItem("token")
                navigate("/auth")
            }}>Logout</Button>
        </div>
      </div>

      <div className='meetContainer'>
        <div className="leftPanel">
            <div>
                <h2>Providing Quality Video Call</h2> &nbsp; &nbsp; 

                <div style={{display:"flex", gap:"10px"}}>

                <TextField className="meetingCode"
                onChange={(e) => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
                <Button onClick={handleJoinVideoCall} variant="contained">Join</Button>
                </div>
            </div>
        </div>

        <div className="rightPanel">
            <img src="logo3.png" alt="" />
        </div>
      </div>

    </>
  )
}

export default withAuth(HomeComponent)

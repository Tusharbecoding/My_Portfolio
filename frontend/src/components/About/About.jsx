import React from 'react'
import { Typography } from '@mui/material'
import avatar from "../../images/avatar.jpg"
import "./About.css"

const About = () => {
  return (
    <div className="about">
        <div className="aboutContainer">
            <Typography>No hugs and kisses, only bugs and fixes</Typography>
        </div>
        <div className="aboutContainer2">
            <div>
                <img src={avatar} alt="Tushar" className="aboutAvatar" />
                <Typography variant="h4"
                style={{ margin: '1vmax 0', color: 'black'}}>Tushar</Typography>
                <Typography>Fullstack Developer</Typography>
                <Typography style={{ margin: '1vmax 0'}}>UI/UX Designer</Typography>
            </div>
            <div>
                <Typography style={{
                    wordSpacing: "5px",
                    lineHeight: "50px",
                    letterSpacing: "5px",
                    textAlign: "right",
                }}>
                UI/UX Design | Frontend Development | Solidity | Python Development | Web3js. I am a full stack developer with a passion for creating beautiful and functional web and mobile applications.
                </Typography>
            </div>
        </div>
    </div>
  )
}

export default About
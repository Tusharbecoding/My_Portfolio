import React from 'react'
import { Typography } from '@mui/material'
import avatar from "../../images/avatar.jpg"
import "./About.css"

const About = () => {
  return (
    <div className="about">
        <div className="aboutContainer">
            <Typography>This is a sample quote</Typography>
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
                    This is description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis dolorum asperiores, nostrum quam debitis officia. Tempore molestiae quia eius suscipit nemo.
                </Typography>
            </div>
        </div>
    </div>
  )
}

export default About
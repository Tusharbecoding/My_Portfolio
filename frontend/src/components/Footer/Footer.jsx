import React from 'react'
import "./Footer.css"   
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { BsGithub, BsYoutube, BsBehance, BsLinkedin } from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <Typography variant="h5">About Me</Typography>
            <Typography>
            UI/UX Design | Frontend Development | Solidity | Python Development | Web3js. I
            am a full stack developer with a passion for creating beautiful and functional web applications.
            </Typography>

            <Link to="/contact" className="footerContactBtn">
                <Typography>Contact Us</Typography>
            </Link>
        </div>
        <div>
            <Typography variant="h6">Social Media</Typography>
            <a href="https://github.com/Tusharbecoding" target="blank">
                <BsGithub />
            </a>

            <a href="https://www.youtube.com/channel/UCqd4TkSg_RGhpcmUkXhg1oA/videos" target="blank">
                <BsYoutube />
            </a>

            <a href="https://www.behance.net/tusharchopra02122002" target="blank">
                <BsBehance />
            </a>

            <a href="https://www.linkedin.com/in/tushar-chopra-960532215/" target="blank">
                <BsLinkedin />
            </a>
        </div>
    </div>
  )
}

export default Footer

import React from 'react'
import { ReactNavbar } from "overlay-navbar"
import { FaUserAlt } from "react-icons/fa";
import avatar1 from "../../images/avatar1.png"


const Header = () => {
  return (
    <ReactNavbar 
        navColor1 = "white"
        navColor2 = "hsl(219,48%,8%)"
        navColor3 = "hsl(219,48%,6%)"
        navColor4 = "hsl(219,48%,4%)"
        burgerColor = "hsl(250, 100%, 75%)"
        burgerColorHover="hsl(250, 100%, 75%)"
        logo={avatar1}
        logoWidth="150px"
        logoBorder="10"
        logoHoverColor="hsl(250, 100%, 75%)"
        nav2justifyContent="space-around"
        nav3justifyContent="space-around"
        link1Text="Home"
        link2Text="About"
        link3Text="Projects"
        link4Text="Contact"
        link1Url="/"
        link2Url="/about"
        link3Url="/projects"
        link4Url="/contact"
        link1Family="'Josefin Sans', sans-serif"
        link1ColorHover="white"
        link1Color="HSL(250, 100%, 75%)"
        link1Size="1.5rem"
        link1Padding="3vmax"
        profileIcon={false}
        ProfileIconElement={FaUserAlt}
        profileIconColor="HSL(250, 100%, 75%)"
        profileIconColorHover="white"
    />
  )
}

export default Header
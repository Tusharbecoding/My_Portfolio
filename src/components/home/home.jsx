import React, { useEffect } from 'react'
import "./home.css"
import * as THREE from "three"
import moonImage from "../../images/moon.jpg"
import venusImage from "../../images/venus.jpg"
import spaceImage from "../../images/space3.jpg"
import template1 from "../../images/template1.png"
import resume from "../../images/Resume.png"
import { MouseOutlined } from "@mui/icons-material";
import template2 from "../../images/template2.png"
import { Typography } from "@mui/material"

import {
  SiCplusplus,
  SiWeb3Dotjs,
  SiNextdotjs,
  SiJavascript,
  SiSolidity,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiKubernetes,
  SiThreedotjs,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import YoutubeCard from "../YoutubeCard/YoutubeCard";

const Home = () => {

  useEffect(() => {

      const textureLoader = new THREE.TextureLoader()
      const moonTexture = textureLoader.load(moonImage)
      const venusTexture = textureLoader.load(venusImage)
      const spaceTexture = textureLoader.load(spaceImage)

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const canvas = document.querySelector(".homeCanvas")
      const renderer = new THREE.WebGLRenderer({ canvas });
      
      const moonGeometry = new THREE.SphereGeometry(3,64,64)
      const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture })
      const moon = new THREE.Mesh(moonGeometry, moonMaterial)

      const venusGeometry = new THREE.SphereGeometry(3,64,64)
      const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture })
      const venus = new THREE.Mesh(venusGeometry, venusMaterial)

      const pointLight = new THREE.PointLight(0xffffff, 1)
      const pointLight2 = new THREE.PointLight(0xffffff, 0.1)
      pointLight.position.set(8,1,3)
      pointLight2.position.set(-8,-1,-5)
      

      
      scene.add(moon)
      scene.add(pointLight)
      scene.add(pointLight2)
      scene.background = spaceTexture
      
      const constSpeed = 0.01;
      window.addEventListener("mousemove", (e) => {
        if (e.clientX <= window.innerWidth/2) {
          moon.rotation.x -= constSpeed;
          moon.rotation.y += constSpeed;
        }

        if (e.clientX > window.innerWidth/2) {
          moon.rotation.x -= constSpeed;
          moon.rotation.y -= constSpeed;
        }

        if (e.clientY <= window.innerHeight/2) {
          moon.rotation.x -= constSpeed;
          moon.rotation.y -= constSpeed;
        }

        if (e.clientY > window.innerHeight/2) {
          moon.rotation.x -= constSpeed;
          moon.rotation.y += constSpeed;
        }

      })

    
      camera.position.set(0.01,0.01,8)
      const animate = () => {
        requestAnimationFrame(animate)
        moon.rotation.y += 0.001
        venus.rotation.y += 0.001
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.render(scene, camera)
      }
      
      animate();
      return window.addEventListener("scroll", () => {
        camera.rotation.z = window.scrollY * 0.001;
        camera.rotation.y = window.scrollY * 0.003;
  
        const skillsBox = document.getElementById("homeSkillsBox");
  
        if (window.scrollY > 1500) {
          skillsBox.style.animationName = "homeSkillsBoxAnimationOn";
        } else {
          skillsBox.style.animationName = "homeSkillsBoxAnimationOff";
        }
      });
  }, [])

  return (<div className="home">
    <canvas className="homeCanvas"></canvas>
    <div className="homeCanvasContainer">
    <div className="homeCanvasBox">
          <Typography variant="h2">DEVELOPER | </Typography>
          <Typography variant="h2"> DESIGNER </Typography>
    </div>
    
    </div>

    <div className="homeScrollBtn">
        <MouseOutlined />
    </div>

    <div className="homeContainer">
      <Typography variant = "h3" className="resumeTitle" style={{fontFamily: "'Josefin Sans', sans-serif", fontWeight: 'bold'}}>RESUME</Typography>
      <img src={resume} alt="" className="resume"/>
    </div>

    <div className="homeSkills">
      <Typography variant = "h3" style={{fontFamily: "'Josefin Sans', sans-serif", fontWeight: 'bold' }}>SKILLS</Typography>
      <div className="homeCubeSkills">
        <div className="homeCubeSkillsFaces homeCubeSkillsFaces1">
          <img src="https://img.icons8.com/color/48/000000/python.png" alt="Face1" />
        </div>
        <div className="homeCubeSkillsFaces homeCubeSkillsFaces2">
          <img src="https://img.icons8.com/color/48/000000/c-programming.png" alt="Face2" />
        </div>
        <div className="homeCubeSkillsFaces homeCubeSkillsFaces3">
          <img src="https://img.icons8.com/color/48/000000/git.png" alt="Face3" />
        </div>
        <div className="homeCubeSkillsFaces homeCubeSkillsFaces4">
          <img src="https://img.icons8.com/office/48/000000/figma.png" alt="Face4" />
        </div>
        <div className="homeCubeSkillsFaces homeCubeSkillsFaces5">
          <img src="https://img.icons8.com/color/48/000000/tensorflow.png" alt="Face5" />
        </div>
        <div className="homeCubeSkillsFaces homeCubeSkillsFaces6">
          <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="Face6" />
        </div>
        

      </div>
      <div className="cubeShadow"></div>
      
      <div className="homeSkillsBox" id="homeSkillsBox">
        <SiCplusplus />
        <SiTypescript />
        <SiDocker />
        <SiKubernetes/>
        <SiJavascript />
        <SiSolidity />
        <SiExpress />
        <SiNextdotjs/>
        <SiWeb3Dotjs />
        <SiNodedotjs />
        <SiThreedotjs />
        <SiRedux />
      </div>
    </div>

    <div className="homeYoutube">
      <Typography variant = "h3" style={{fontFamily: "'Josefin Sans', sans-serif", fontWeight: 'bold'}}>YOUTUBE</Typography>

      <div className="homeYoutubeWrapper">
        <YoutubeCard image={template1} title="Text to speech using Python" />
        <YoutubeCard image={template2} title="Website in just 5 minutes" />        
      </div>
    </div>
  </div>
  )
}

export default Home
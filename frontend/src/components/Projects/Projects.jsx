import React from 'react'
import './Projects.css'
import { Typography, Button } from '@mui/material'
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import avatar from "../../images/avatar.jpg"
import { FaRegSmileWink } from "react-icons/fa";

const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false
}) => {
    return (
        <>
            <a href={url} className="projectCard" target="blank">
                <div>
                    <img src={projectImage} alt="" />
                    <Typography variant="h5">{projectTitle}</Typography>
                </div>
                <div>
                <Typography variant="h4">About Project</Typography>
                <Typography>{description}</Typography>
                <Typography variant="h6">Tech Stack: {technologies}</Typography>
                </div>
            </a>
            {isAdmin && (
                <Button style={{color: "rgba(40,40,40,0.7)"}}>
                    <Delete />
                </Button>
            )}
        </>
    )
}

const Projects = () => {

    const projects = [1,2,3];
  return (
    <div className="projects">
        <Typography variant="h3">
            Projects <AiOutlineProject />
        </Typography>

        <div className="projectsWrapper">
         {projects.map((project, index) => (
            <ProjectCard url="https://github.com/Tusharbecoding"
            projectImage={avatar}
            projectTitle="Sample Project"
            description="This is a sample description"
            technologies="MERN" />
         ))}
        </div>
        <Typography variant="h3" style={{font: "100 1.2rem 'Ubuntu Mono'"}}>
            All the projects above are made by me <FaRegSmileWink />
        </Typography>
    </div>
  )
}

export default Projects
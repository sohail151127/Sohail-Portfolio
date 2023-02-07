import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName

    function aboutMeText() {
        return <>
            <p>
                <div style={{color: info.baseColor, textAlign:"center",marginBottom:"1rem"}}>About{" "}        
                     {firstName}   
                </div>
                <div style={{color:"white", textAlign:"center"}}>
                    {info.bio}
                </div>
                
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p style={{color: info.baseColor, textAlign:"center"}}>                
                Skills
            </p>

            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>

            <p style={{color: info.baseColor}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
           
            <p>
                <span style={{color: info.baseColor}}>Hobbies/Interests 
                 </span>
            </p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'2rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}
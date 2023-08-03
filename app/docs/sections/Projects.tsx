'use client'
import React from 'react';
import ProjectsText from '../rcomponents/projectsText';

const Projects: React.FC = () => {

    return(
        <div id='Projects' className='flex relative'>
        <ProjectsText />    
        <style>
        {`
            #Projects {
                height: 130vh;
            }
            @media (max-width: 1370px) {
                #Projects {
                        height: 185vh;
                    }
                    @media (max-width: 900px) {
                        #Projects {
                                height: 180vh;
                            }
                            @media (max-width: 550px) {
                                #Projects {
                                        height: 140vh;
                                    }
                                    @media (max-width: 400px) {
                                        #Projects {
                                                height: 155vh;
                                            }
            @media (max-height: 650px) {
                #Projects {
                    height: 180vh;
                }
            }
            `}
      </style>
        </div>
    )
}

export default Projects;
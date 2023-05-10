'use client'
import React from 'react';
import ExperienceText from '../rcomponents/experienceText';
import Luffy from '../rcomponents/luffy';

const Experience: React.FC = () => {

    return(
        <div id='Experience' className='flex relative border border-red-500'>
        <ExperienceText />
        <Luffy />
        <style>
            {`
            #Experience {
                height: 130vh;
            }
            `}
        </style>
        </div>
    )
}

export default Experience;
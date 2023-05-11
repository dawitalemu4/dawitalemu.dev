'use client'
import React from 'react';
import ContactForm from '../rcomponents/contactForm';

const Contact: React.FC = () => {

    return(
        <div id='Contact' className='flex relative border border-red-500 h-screen'>
        <ContactForm />
        </div>
    )
}

export default Contact;
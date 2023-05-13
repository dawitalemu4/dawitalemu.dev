'use client'
import React from 'react';
import ContactForm from '../rcomponents/contactForm';

const Contact: React.FC = () => {

    return(
        <div id='Contact' className='flex relative'>
        <ContactForm />
        <style>
            {`
            #Contact {
                height: 90vh;
            }
            @media (max-width: 900px) {
                #Contact {
                height: 120vh;
                }
            }
            @media (max-width: 560px) {
                #Contact {
                height: 80vh;
                }
            }
            @media (max-width: 400px) {
            #Contact {
            height: 70vh;
            }
        }
                `}
        </style>
        </div>
    )
}

export default Contact;
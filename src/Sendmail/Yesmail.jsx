import React from 'react'
import emailjs from 'emailjs-com';

const Yesmail = () => {
    console.log("in");
    emailjs.send('service_0exlvz9', 'template_38mzsor', {
    }, 'FuLBxTJ-BjzvuPotA')
    .then((response) => {
        console.log('Email sent:', response);
    })
    .catch((error) => {
        console.error('Error sending email:', error);
    });
    
    console.log("out");
}

export default Yesmail
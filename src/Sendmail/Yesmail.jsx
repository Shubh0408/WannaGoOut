import React from 'react'
import emailjs from 'emailjs-com';

const Yesmail = (to_name) => {

    emailjs.send('service_0exlvz9', 'template_38mzsor', {
        to_name: to_name,
    }, 'FuLBxTJ-BjzvuPotA')
    .then((response) => {
        console.log('Email sent:', response);
    })
    .catch((error) => {
        console.error('Error sending email:', error);
    });
}

export default Yesmail
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'priyatam@factoreal.com',
        subject: 'Thanks for joining in!!',
        text: 'Welcome to the app '+ name + '. Let me know how you get along with the app.'
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'priyatam@factoreal.com',
        subject: 'Sorry to see you go!!',
        text: 'Goodbye '+ name + '. i hope to see you back somtimes soon.'  
    })
}

// sgMail.send ({
//     to: 'priyatam@factoreal.com',
//     from: 'priyatam@factoreal.com',
//     subject: 'This is my first creation',
//     text: 'I hope this one actually get to you'
// })


module.exports = {
    sendWelcomeEmail, sendCancelationEmail
}
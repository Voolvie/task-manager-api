const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'klemczak.szymon@gmail.com',
        subject: 'Thanks for joining in',
        text: `Witoj w apce byczku ${name}`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'klemczak.szymon@gmail.com',
        subject: 'Goodbye user',
        text: `Narazicho ${name}`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}
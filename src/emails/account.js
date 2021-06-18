const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'klemczak.task.manager@gmail.com',
        subject: 'Witamy na pokładzie!',
        text: `Witaj w aplikacji Task-Manager ${name}!`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'klemczak.task.manager@gmail.com',
        subject: 'Żegnaj użytkowniku!',
        text: `Dziekuje za korzystanie z aplikacji ${name}`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}
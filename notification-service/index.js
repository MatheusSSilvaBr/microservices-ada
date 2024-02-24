const { receiveMessages } = require('./src/config/rabbitmq')
const nodemailer = require('./src/config/nodemailer')
const emailTemplates = require('./src/emails/templates')

const main = () => {
    receiveMessages((message) => {
        const { notificationName, email, description = null } = JSON.parse(message.content.toString())
        console.log('Message:', JSON.parse(message.content.toString()))

        let emailToSend
        if(notificationName === 'register-success') {
            emailToSend = emailTemplates[notificationName] 
            emailToSend.to = email
        }else if(notificationName === 'order-success') {
            emailToSend = emailTemplates[notificationName]
            emailToSend.to = email
            emailToSend.text = description
        }
       
        nodemailer.sendMail(emailToSend).then((info) => {
        console.log('Preview URL: ' + info)
        })
    })
}

main()
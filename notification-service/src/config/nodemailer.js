const nodemailer = require('nodemailer')

const  mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'laurel0@ethereal.email',
        pass: '45fSfwuG7ubzDpceMG'
    }
}

module.exports = nodemailer.createTransport(mailConfig)
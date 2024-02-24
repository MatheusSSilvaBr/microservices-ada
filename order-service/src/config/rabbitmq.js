const amqplib = require('amqplib/callback_api')

exports.sendNotification = (notificationName, email, description) => {
    amqplib.connect('amqp://localhost', (err, connection) => {
        if(err) {
            throw err
        }

        connection.createChannel((err, channel) => {
            if(err) {
                throw err
            }

            channel.assertQueue('notification-queue')
            const message = {
                notificationName,
                email,
                description
            }

            channel.sendToQueue('notification-queue', Buffer.from(JSON.stringify(message)))

            console.log(`[x] Sent message: ${JSON.stringify(message)}`)
        })
        
    })
}
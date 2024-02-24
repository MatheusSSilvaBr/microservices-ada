const yup = require('yup')
const OrderService = require('../services/order-service')
const { sendNotification } = require('../config/rabbitmq')

class OrderController {
    static async create(req, res) {
        try {
            const schema = yup.object({
                user_id: yup.string().required(),
                description: yup.string().required()
            })
    
            if(!await schema.isValid(req.body)) {
                throw { status: 400, message: 'Validation Fails'}
            }
            //Get user email
            const email = await OrderService.getUserEmail(req.body.user_id)
            if(!email) {
                throw { status: 400, message: 'User not found'}
            }

            //Create Order
            const { id, description } = await OrderService.create(req.body)

            //Dispatch notification
            sendNotification('order-success', email, description)
            
            res.status(200).json({ id })
        } catch (error) {
            console.log(error)
            res.status(error.status || 500).json({ error: error.message || 'Server Error'})
        }
    }
}

module.exports = OrderController
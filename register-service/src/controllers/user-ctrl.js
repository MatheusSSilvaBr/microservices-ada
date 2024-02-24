const yup = require('yup')
const UserService = require('../services/user.service')
const { sendNotification } = require('../config/rabbitmq')

class UserController {
    static async create(req, res) {
        try {
            const schema = yup.object({
                name: yup.string(),
                email: yup.string().email().required(),
                cpf: yup.string().required(),
                street: yup.string().required(),
                number: yup.string().required(),
                neighborhood: yup.string().required(),
                city: yup.string().required(),
                state: yup.string().required(),
                country: yup.string().required(),
            })
    
            if(!await schema.isValid(req.body)) {
                throw { status: 400, message: 'Validation Fails'}
            }

            //Verify if user exists at database
            const { id, email } = await UserService.create(req.body)

            //Dispatch notification
            sendNotification('register-success', email)
            
            res.status(200).json({ id })
        } catch (error) {
            console.log(error)
            res.status(error.status || 500).json({ error: error.message || 'Server Error'})
        }
    }
}

module.exports = UserController
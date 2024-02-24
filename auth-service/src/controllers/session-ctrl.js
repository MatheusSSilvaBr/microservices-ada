const yup = require('yup')
const jwt = require('jsonwebtoken')
const UserService = require('../services/user.service')
const SessionService = require('../services/session.service')

class SessionController {
    static async create(req, res) {
        try {
            const schema = yup.object({
                email: yup.string().email().required(),
                password: yup.string().min(6).required()
            })
    
            if(!await schema.isValid(req.body)) {
                throw { status: 400, message: 'Validation Fails'}
            }

            const user = await UserService.userExistsByEmail(req.body.email)
            console.log(user)
            if(!user || !UserService.checkPassword(req.body.password, user?.password)) {
                throw { status: 401, message: 'Invalid Credentials' }
            }

            const token = SessionService.create(user)

            res.status(200).json({ token })
        } catch (error) {
            console.log(error)
            res.status(error.status || 500).json({ error: error.message || 'Server Error'})
        }
    }

    static async verify(req, res) {
        const bearer = req.headers['authorization']

        if(!bearer) {
            return res.status(401).json({ error: 'Unauthorized'})
        }

        const [, token] = bearer.split(' ')


        try {
            jwt.verify(token, process.env.JWT_SECRET_KEY) //Call session api
            
            return res.status(200).json({ message: 'Session is valid' })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 401).json({ error: error.message || 'Unauthorized'})
        }
    }
}

module.exports = SessionController
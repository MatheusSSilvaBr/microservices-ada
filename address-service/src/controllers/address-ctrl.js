const yup = require('yup')
const UserService = require('../services/user-service')
const AddressService = require('../services/address-service')

class AddressController {
    static async create(req, res) {
        try {
            const schema = yup.object({
                email: yup.string().email().required(),
                cep: yup.string().matches(/^\d{5}-\d{3}$/, 'CEP inválido').required()
            })
    
            if(!await schema.isValid(req.body)) {
                throw { status: 400, message: 'Validation Fails'}
            }

            const user = await UserService.userExistsByEmail(req.body.email)
            console.log(user)
            if(!user) {
                throw { status: 401, message: 'Invalid Credentials' }
            }

            const response = await AddressService.search(user, req.body.cep)
            res.status(200).json(response)
        } catch (error) {
            console.log(error)
            res.status(error.status || 500).json({ error: error.message || 'Server Error'})
        }
    }

    static async verify(req, res) {
    }
}

module.exports = AddressController
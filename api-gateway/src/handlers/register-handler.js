const axios = require('axios')

class RegisterHandler {
    static async register(req, res) {
        try {
            const { data } = await axios.post(`${process.env.REGISTER_SERVICE_BASE_URL}/register`, req.body)

            return res.status(200).json(data)
        } catch (error) {
            res.status(error?.response?.status || 500).json({ error: error?.response?.data?.error || 'Server Error '})
        }
    }
}

module.exports = RegisterHandler
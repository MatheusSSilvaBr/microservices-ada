const axios = require('axios')

class SessionHandler {
    static async create(req, res) {
        try {
            const { data } = await axios.post(`${process.env.SESSION_SERVICE_BASE_URL}/create-session`, req.body)

            return res.status(200).json(data)
        } catch (error) {
            res.status(error?.response?.status || 500).json({ error: error?.response?.data?.error || 'Server Error '})
        }
    }
}

module.exports = SessionHandler
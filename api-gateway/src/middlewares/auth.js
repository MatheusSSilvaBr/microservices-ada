const axios = require('axios')

module.exports = async (req, res, next) => {
    try {
        const headers = {
            'accept': 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, compress, deflate, br',
            'connection': 'close',
            'host': 'localhost:3002',
            'user-agent': 'axios/1.6.7',
            'authorization': req.headers['authorization']
        }
        
        const { data } = await axios.get(`${process.env.AUTH_SERVICE_BASE_URL}/verify-session`, { headers })
        if(data.message =='Session is valid') {
            next()
        }
    } catch (error) {
        res.status(error?.response?.status || 500).json({ error: error?.response?.data?.error || 'Server Error '})
    }

}
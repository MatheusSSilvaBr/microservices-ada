const jwt = require('jsonwebtoken')

const rolesDB = {
    ADMIN: ['/profile', '/address', '/admin/user'],
    CONSULTANT:  ['/address'],
}

module.exports = async (req, res, next) => {
    const bearer = req.headers['authorization']

    if(!bearer) {
        return res.status(401).json({ error: 'Unauthorized'})
    }

    const [, token] = bearer.split(' ')


    try {
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY) //Call session api
        
        const { role } = user

        if(!rolesDB[role].includes(req.path)) {
            throw { status: 403, message: 'Forbbiden' }
        }
        
        next()
    } catch (error) {
        console.log(error)
        return res.status(error.status || 401).json({ error: error.message || 'Unauthorized'})
    }

}
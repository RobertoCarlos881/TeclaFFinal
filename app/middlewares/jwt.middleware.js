const { isAdmin } = require('../models/users.model');
const { descubrirToken } = require('../services/jwt.service');

const UserInSession = async(req, res, next) => {
    try {
        if (req.headers.authorization != undefined) {
            const token = req.headers.authorization.split(' ')[1];
            let verificado = await descubrirToken(token);
            return next()
        } else {
            throw new Error('Este es un sistema seguro y requiere autorización')
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const LevelAdmin = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        let verificado = await descubrirToken(token);
        const email = await verificado.data.email;
        next();
    } catch (error) {
        res.status(403).json({ error: 'Ocurrio un error en la función LevelAdmin: ' + error.message }) //403 Forbidden El usuario no tiene acceso a ese contenido
    }
}


module.exports = {
    UserInSession,
    LevelAdmin
}
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// ... (suas outras rotas) ...

router.get('/verify', (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    const token = authHeader.split(' ')[1]; // Extrai o token após "Bearer "

    if (!token) {
        return res.status(401).json({ message: 'Token inválido' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }
        res.json({ message: 'Token válido', decoded });
    });
});

module.exports = router;
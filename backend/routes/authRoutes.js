const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const router = express.Router();

router.use(cookieParser());

// Rota para gerar um novo token de acesso (expira em 1 hora)
router.post('/refresh-token', async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return res.status(401).json({ message: 'Token de atualização não fornecido' });
        }

        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

        // Gere um novo token de acesso com expiração de 1 hora
        const accessToken = jwt.sign(
            { id: decoded.id, tipo_usuario: decoded.tipo_usuario },
            process.env.JWT_SECRET,
            { expiresIn: '1h' } // ⏰ Token expira em 1 hora
        );

        res.json({ accessToken });
    } catch (error) {
        console.error('Erro na rota /refresh-token:', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
});

module.exports = router;
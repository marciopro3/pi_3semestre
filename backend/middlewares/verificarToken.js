const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    // Verifica se o cabeçalho de autorização foi enviado
    if (!authHeader) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    const parts = authHeader.split(' ');

    // Verifica se o formato está correto: "Bearer <token>"
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({ message: 'Formato de token inválido' });
    }

    const token = parts[1];

    // Verifica e decodifica o token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            const mensagem =
                err.name === 'TokenExpiredError' ? 'Token expirado' : 'Token inválido';
            return res.status(403).json({ message: mensagem });
        }

        // Anexa os dados do usuário no request para uso posterior
        req.usuario = decoded;
        next();
    });
}

module.exports = verificarToken;
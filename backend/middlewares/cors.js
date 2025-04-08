const corsMiddleware = (req, res, next) => {
  const origin = req.headers.origin;
  if (origin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Se for uma requisição OPTIONS, responde imediatamente:
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204); // Sem conteúdo
  }

  next();
};

module.exports = corsMiddleware;
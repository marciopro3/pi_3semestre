const express = require('express');
require('dotenv').config();

const corsMiddleware = require('./middlewares/cors');

const clienteRoutes = require('./routes/clienteRoutes');
const orcamentoRoutes = require('./routes/orcamentoRoutes');
const seguroAutomovelRoutes = require('./routes/seguroAutomovelRoutes');
const seguroEmpresarialRoutes = require('./routes/seguroEmpresarialRoutes');
const seguroFrotaRoutes = require('./routes/seguroFrotaRoutes');
const seguroRETARoutes = require('./routes/seguroRETARoutes');
const seguroResidencialRoutes = require('./routes/seguroResidencialRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const swaggerDocs = require('./docs/swagger/swagger');

const app = express();

// Middleware CORS (libera todas as origens com suporte a credentials)
app.use(corsMiddleware);

// Middleware para JSON
app.use(express.json());

// Rotas
app.use('/api/clientes', clienteRoutes);
app.use('/api/orcamentos', orcamentoRoutes);
app.use('/api/seguros/automovel', seguroAutomovelRoutes);
app.use('/api/seguros/empresarial', seguroEmpresarialRoutes);
app.use('/api/seguros/frota', seguroFrotaRoutes);
app.use('/api/seguros/reta', seguroRETARoutes);
app.use('/api/seguros/residencial', seguroResidencialRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/painel', dashboardRoutes);

// Documentação Swagger
swaggerDocs(app);

// Inicializa o servidor
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${port}`);
});
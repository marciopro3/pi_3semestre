const express = require('express');
const cors = require('cors');
require('dotenv').config();
const clienteRoutes = require('./routes/clienteRoutes');
const orcamentoRoutes = require('./routes/orcamentoRoutes');
const seguroAutomovelRoutes = require('./routes/seguroAutomovelRoutes');
const seguroEmpresarialRoutes = require('./routes/seguroEmpresarialRoutes');
const seguroFrotaRoutes = require('./routes/seguroFrotaRoutes');
const seguroRETARoutes = require('./routes/seguroRETARoutes');
const seguroResidencialRoutes = require('./routes/seguroResidencialRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/clientes', clienteRoutes);
app.use('/api/orcamentos', orcamentoRoutes);
app.use('/api/seguros/automovel', seguroAutomovelRoutes);
app.use('/api/seguros/empresarial', seguroEmpresarialRoutes);
app.use('/api/seguros/frota', seguroFrotaRoutes);
app.use('/api/seguros/reta', seguroRETARoutes);
app.use('/api/seguros/residencial', seguroResidencialRoutes);
app.use('/api/usuarios', usuariosRoutes);

const port = process.env.PORT || 4040;
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${port}`);
});
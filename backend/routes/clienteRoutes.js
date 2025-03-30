const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rota para buscar todos os clientes
router.get('/', clienteController.getClientes);

// Rota para buscar um cliente por ID
router.get('/:id', clienteController.getClienteById);

// Rota para criar um novo cliente
router.post('/', clienteController.createCliente);

// Rota para atualizar um cliente
router.put('/:id', clienteController.updateCliente);

// Rota para excluir um cliente
router.delete('/:id', clienteController.deleteCliente);

module.exports = router;
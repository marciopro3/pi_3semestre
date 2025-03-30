const express = require('express');
const router = express.Router();
const seguroAutomovelController = require('../controllers/seguroAutomovelController');

// Rota para buscar todos os seguros de automóvel
router.get('/', seguroAutomovelController.getSegurosAutomovel);

// Rota para buscar um seguro de automóvel por ID
router.get('/:id', seguroAutomovelController.getSeguroAutomovelById);

// Rota para criar um novo seguro de automóvel
router.post('/', seguroAutomovelController.createSeguroAutomovel);

// Rota para atualizar um seguro de automóvel
router.put('/:id', seguroAutomovelController.updateSeguroAutomovel);

// Rota para excluir um seguro de automóvel
router.delete('/:id', seguroAutomovelController.deleteSeguroAutomovel);

module.exports = router;
const express = require('express');
const router = express.Router();
const orcamentoController = require('../controllers/orcamentoController');

// Rota para buscar todos os orçamentos
router.get('/', orcamentoController.getOrcamentos);

// Rota para buscar um orçamento por ID
router.get('/:id', orcamentoController.getOrcamentoById);

// Rota para criar um novo orçamento
router.post('/', orcamentoController.createOrcamento);

// Rota para atualizar um orçamento
router.put('/:id', orcamentoController.updateOrcamento);

// Rota para excluir um orçamento
router.delete('/:id', orcamentoController.deleteOrcamento);

module.exports = router;
const express = require('express');
const router = express.Router();
const seguroEmpresarialController = require('../controllers/seguroEmpresarialController');

router.get('/', seguroEmpresarialController.getSegurosEmpresarial);
router.get('/:id', seguroEmpresarialController.getSeguroEmpresarialById);
router.post('/', seguroEmpresarialController.createSeguroEmpresarial);
router.put('/:id', seguroEmpresarialController.updateSeguroEmpresarial);
router.delete('/:id', seguroEmpresarialController.deleteSeguroEmpresarial);

module.exports = router;
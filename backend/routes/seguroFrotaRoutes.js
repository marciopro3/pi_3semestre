const express = require('express');
const router = express.Router();
const seguroFrotaController = require('../controllers/seguroFrotaController');

router.get('/', seguroFrotaController.getSegurosFrota);
router.get('/:id', seguroFrotaController.getSeguroFrotaById);
router.post('/', seguroFrotaController.createSeguroFrota);
router.put('/:id', seguroFrotaController.updateSeguroFrota);
router.delete('/:id', seguroFrotaController.deleteSeguroFrota);

module.exports = router;
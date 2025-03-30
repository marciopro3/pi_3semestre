const express = require('express');
const router = express.Router();
const seguroResidencialController = require('../controllers/seguroResidencialController');

router.get('/', seguroResidencialController.getSegurosResidencial);
router.get('/:id', seguroResidencialController.getSeguroResidencialById);
router.post('/', seguroResidencialController.createSeguroResidencial);
router.put('/:id', seguroResidencialController.updateSeguroResidencial);
router.delete('/:id', seguroResidencialController.deleteSeguroResidencial);

module.exports = router;
const express = require('express');
const router = express.Router();
const seguroRETAController = require('../controllers/seguroRETAController');

router.get('/', seguroRETAController.getSegurosRETA);
router.get('/:id', seguroRETAController.getSeguroRETAById);
router.post('/', seguroRETAController.createSeguroRETA);
router.put('/:id', seguroRETAController.updateSeguroRETA);
router.delete('/:id', seguroRETAController.deleteSeguroRETA);

module.exports = router;
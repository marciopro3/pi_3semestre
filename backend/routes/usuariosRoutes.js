const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const verificarToken = require('../middlewares/verificarToken');

router.get('/', verificarToken, usuariosController.getUsuarios);
router.get('/:id', verificarToken, usuariosController.getUsuarioById);
router.post('/', usuariosController.createUsuario);
router.put('/:id', verificarToken, usuariosController.updateUsuario);
router.delete('/:id', verificarToken, usuariosController.deleteUsuario);
router.post('/login', usuariosController.loginUsuario);

module.exports = router;
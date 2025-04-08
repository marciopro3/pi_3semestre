const express = require('express');
const path = require('path');
const verificarToken = require('../middlewares/verificarToken');

const router = express.Router();

router.get('/dash', verificarToken, (req, res) => {
    res.sendFile(path.join(__dirname, '../protegido/pages/dash.html'));
});

module.exports = router;
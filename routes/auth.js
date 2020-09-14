// rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');


// iniciar sesion
// api/auth
router.post('/',
    authController.autenticarUsuario
);

//obtiene el usuario autenticado
router.get('/',
    auth,
    authController.usuarioAuntenticado
)

module.exports = router;
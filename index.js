const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//crear el servidor
const app = express();

//conectar a la base de datos
conectarDB();

//habilitar cors
app.use(cors());

// habilitar express,JSON
app.use(express.json({ extended: true }));


// PUERTO DE LA APP
const port = process.env.port || 4000;

// importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

// //ARRANCAR EL SERVIDOR
 app.listen(port,'0.0.0.0', () => {
        console.log(`el servidor esta corriendo en el puerto ${port}`)
   });

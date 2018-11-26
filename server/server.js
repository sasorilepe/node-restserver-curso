require('./config/config');

//Configuración global de rutas
const app = require('./routes/index');

const mongoose = require('mongoose');

mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});
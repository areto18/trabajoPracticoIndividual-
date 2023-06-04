const express = require('express');
const path = require('path');

const app = express();

/**Ejemplo para ver
 * const publicPath = path.resolve(__dirname. './public');
 * app.use( express.static(publicPath) );
 */

app.use(express.static(path.join(__dirname, '/public'))); //setear la carpeta de archivos publicos

 app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
 });
 
 app.get('/formulario', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
 });

 app.get('/ingresar', (req, res) => {
   res.sendFile(path.resolve(__dirname, './views/login.html'));
});

 app.listen(3002, function () {
   console.log("Servidor corriendo");
});
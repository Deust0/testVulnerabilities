const express = require('express');
const app = express();
const path = require('path');  // Requiere el módulo path
//const helmet = require('helmet');


const port = 3000;

//app.use(helmet());
// Establece el directorio 'xss_04' para servir archivos estáticos
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    //res.setHeader('X-Content-Type-Options', 'nosniff');
    res.sendFile(path.join(__dirname, '/html/index.html'));  // Asegúrate de que index.html está en el directorio 'xss_04'
});

app.listen(port, () => {
    console.log('Este Servidor Web Iniciado en este http://localhost:%d',port);
});
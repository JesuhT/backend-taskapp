//Importaciones
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const registerRouter = require("./src/router");
const onDb = require("./src/config/db");

//Configuraciones de express
const app = express();

//Conexión a la base de datos
onDb();

//Puerto local
const port = 3000;

//Acceso de cors
app.use(cors());
//Manejo de body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Configuración de variables de entorno
dotenv.config();

//Registro de rutas
registerRouter(app);


//Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

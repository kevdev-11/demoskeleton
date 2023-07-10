const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const db = require("./utils/database");
const initModels = require("./models/initModels");

//1. llamando a la instancia de express:
const app = express();

//2. middlewares son estos:
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

//3. Todo lo relacionado a la base de datos:

initModels();

db.authenticate()
.then(()=>console.log("database auth"))
.catch((err)=> console.log(err));

db.sync({
    force: false,
}).then (()=> console.log("database synchronized"))
.catch((err)=> console.log(err))

app.get('/', (req, res) => res.json({message: 'Hello World!'}));

module.exports = app;
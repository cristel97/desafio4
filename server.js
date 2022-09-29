const express = require("express");
const routerProductos = require('./src/routes/productos')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.use("/api/productos", routerProductos);

//Running server
const PORT = process.env.PORT || 8080

const server = app.listen(PORT,()=>{console.log('Server Running')});
server.on('error',error=>console.log(`Error ${error}`));

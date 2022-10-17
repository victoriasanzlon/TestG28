const servidorWeb = require("express");

const app = servidorWeb();
const puerto = 3001;

app.get("/", (req, res) => {
    res.send("Estas consultando la raiz de la API");
});

app.get("/personas", (req, res) => {

    let persona = {
        "nombre": "Juan Carlos",
        "apellido": "Zambrano",
        "estadoCivil": "Casado",
        "edad": 30,
        "tieneHijos": true,
        "medicoAsignado": "{\"id\" : \"123\", \"nombre\" : \"medico 1\", \"liciencia\" : \"{123456} }"
    }
    res.send(persona);
});


app.listen(puerto, () => { 
    console.log("El servidor esta en ejecución el puerto" + puerto);
}) 

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var encriptacion_1 = require("./encriptacion");
var express = require('express');
var mysql = require("mysql");
var iprequest = require("request-ip");
var app = express();
//jwt Token
var jwt = require("jsonwebtoken");
//cors
var cors = require('cors');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
app.use(cors());
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'basedatosweb'
});
connection.connect(function (err) {
    if (err) {
        console.error('Error conectando a la DB ' + err.stack);
        return;
    }
    console.log('Conexión establecida' + connection.threadId);
});
var configuracion = {
    hostname: "127.0.0.1",
    port: 5001,
};
app.post("/crearusuario", jsonParser, function (req, res) {
    var email = req.body.email;
    var nombre = req.body.nombre;
    var telefono = req.body.telefono;
    var password = req.body.password;
    password = (0, encriptacion_1.encriptar)(password, "3");
    connection.query("INSERT INTO usuarios(correo, nombre, telefono, contrasenya) VALUES (?,?,?,?)", [email, nombre, telefono, password], function (error, results, fields) {
        if (error)
            throw error;
        res.send(JSON.stringify({ "mensaje": "Se ha creado la cuenta", "error": false }));
        return;
    });
});
app.post("/iniciarsesion", jsonParser, function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    password = (0, encriptacion_1.encriptar)(password, "3");
    connection.query("SELECT * FROM `usuarios` WHERE correo=? and contrasenya=?", [email, password], function (error, results, fields) {
        if (error)
            throw error;
        if (results.length == 0) {
            res.send(JSON.stringify({ "mensaje": "El correo y/o contraseña no existe", "error": true }));
            return;
        }
        var id = results[0].id;
        var token = jwt.sign({ id: id }, "tokenSecreto", { expiresIn: 60 * 10 });
        res.send(JSON.stringify({ "mensaje": "Se ha iniciado sesion correctamente", "error": false, "token": token }));
        return;
    });
});
app.post("/pruebaDatos", jsonParser, function (req, res) {
    var token = req.headers['authorization'];
    jwt.verify(token, "tokenSecreto", function (err, user) {
        if (err) {
            res.send(JSON.stringify({ "mensaje": "Sesion no iniciada", "error": true }));
        }
        else {
            res.send(JSON.stringify({ "mensaje": "Sesion iniciada", "error": false, "token": user }));
        }
    });
});
app.post("/esAdmin", jsonParser, function (req, res) {
    var token = req.headers['authorization'];
    jwt.verify(token, "tokenSecreto", function (err, user) {
        if (err) {
            res.send(JSON.stringify({ "mensaje": "Sesion no iniciada", "error": true }));
        }
        else {
            connection.query("SELECT * FROM `usuarios` WHERE id=?", [user.id], function (error, results, fields) {
                if (error)
                    throw error;
                if (results.length == 0) {
                    res.send(JSON.stringify({ "mensaje": "Usted no es admin", "error": true }));
                    return;
                }
                res.send(JSON.stringify({ "mensaje": "Se ha iniciado correctamente", "error": false, "token": token, "admin": results[0].esAdmin }));
                return;
            });
        }
    });
});
/* Al cambiar la pagina, se pueda almacenar el email para los recuperar cuenta */
var emailAuxiliar;
function correoRecuperar(email, flag) {
    if (flag) {
        emailAuxiliar = email;
        return;
    }
    return emailAuxiliar;
}
app.post("/recuperarCuenta1", jsonParser, function (req, res) {
    var email = req.body.email;
    correoRecuperar(email, true);
    connection.query("SELECT * FROM `usuarios` WHERE correo=?", [email], function (error, results, fields) {
        if (error)
            throw error;
        if (results.length == 0) {
            res.send(JSON.stringify({ "mensaje": "El correo no existe", "error": true }));
            return;
        }
        res.send(JSON.stringify({ "mensaje": "Se ha encontrado el correo", "error": false }));
        return;
    });
});
app.put("/recuperarcuenta3", jsonParser, function (req, res) {
    var email = correoRecuperar("", false);
    var password = req.body.password;
    password = (0, encriptacion_1.encriptar)(password, "3");
    connection.query("UPDATE usuarios SET contrasenya=? WHERE correo=?", [password, email], function (error, results, fields) {
        if (error)
            throw error;
        res.send(JSON.stringify({ "mensaje": "Se ha cambiado la contraseña", "error": false }));
    });
});
app.delete("/eliminarOllaComun", jsonParser, function (req, res) {
    var id = req.body.id;
    connection.query("DELETE FROM `ollascomunes` WHERE id=?", [id], function (error, results, fields) {
        if (error)
            throw error;
        res.send(JSON.stringify({ "mensaje": "Se ha encontrado el id", "error": false }));
        return;
    });
});
app.post("/crearollacomun", jsonParser, function (req, res) {
    var imagen = req.body.imagen;
    var titulo = req.body.titulo;
    var fecha = req.body.fecha;
    var descripcion = req.body.descripcion;
    var direccion = req.body.direccion;
    var region = req.body.region;
    var telefono = req.body.telefono;
    var correo = req.body.correo;
    var cordX = req.body.cordX;
    var cordY = req.body.cordY;
    connection.query("INSERT INTO ollascomunes(imagen,titulo,fecha,descripcion,direccion,region,telefono,correo,cordX,cordY) VALUES (?,?,?,?,?,?,?,?,?,?)", [imagen, titulo, fecha, descripcion, direccion, region, telefono, correo, cordX, cordY], function (error, results, fields) {
        if (error)
            throw error;
        res.send(JSON.stringify({ "mensaje": "Se ha creado la olla comun", "error": false }));
        return;
    });
});
app.get("/obtenerollascomunes", jsonParser, function (req, res) {
    connection.query("SELECT * FROM ollascomunes", function (error, results, fields) {
        if (error)
            throw error;
        //Se envian todas las ollas comunes
        res.send(results);
        return;
    });
});
app.post("/notError", jsonParser, function (req, res) {
    var nombre = req.body.nombre;
    var descripcion = req.body.descripcion;
    connection.query("INSERT INTO errores(nombre, descripcion) VALUES (?,?)", [nombre, descripcion], function (error, results, fields) {
        if (error)
            throw error;
        res.send(JSON.stringify({ "mensaje": "Se ha creado la notificacion de error", "error": false }));
        return;
    });
});
app.listen(configuracion, function () {
    console.log("Conectando al servidor http://localhost:".concat(configuracion.port));
});

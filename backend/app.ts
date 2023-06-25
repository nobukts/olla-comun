import {encriptar} from './encriptacion';
const express = require('express');
const mysql=require("mysql");
const iprequest=require("request-ip");
const app=express();
//cors
const cors=require('cors');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
app.use(cors());

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port:  3306,
    database : 'basedatosweb'
});

connection.connect(function(err:any) {
    if (err) {
      console.error('Error conectando a la DB ' + err.stack);
      return;
    }
    console.log('Conexión establecida' + connection.threadId);
});

const configuracion={
    hostname: "127.0.0.1",
    port: 5001,
}

app.post("/crearusuario",jsonParser,(req:any, res:any) => {
    let email=req.body.email;
    let nombre=req.body.nombre;
    let telefono=req.body.telefono;
    let password=req.body.password;
    password = encriptar(password,"3")
    
    connection.query("INSERT INTO usuarios(correo, nombre, telefono, contrasenya) VALUES (?,?,?,?)",[email,nombre,telefono,password],function(error:any,results:any,fields:any){
        if (error) throw error;
        res.send( JSON.stringify({"mensaje":"Se ha creado la cuenta","error":false} ));
        return;
    });
    
});

app.post("/iniciarsesion",jsonParser,(req:any, res:any) => {
    let email=req.body.email;
    let password=req.body.password;
    password = encriptar(password,"3")
    
    connection.query("SELECT * FROM `usuarios` WHERE correo=? and contrasenya=?",[email,password],function(error:any,results:any,fields:any){
        if (error) throw error;
        if(results.length == 0){
            res.send( JSON.stringify({"mensaje":"El correo y/o contraseña no existe","error":true} ));
            return;
        }
        res.send( JSON.stringify({"mensaje":"Se ha iniciado sesion correctamente","error":false} ));
        return;
    });
    
});

let emailAuxiliar:string
function correoRecuperar(email:string,flag:boolean){
    if(flag){
        emailAuxiliar = email
        return;
    }
    /* console.log(emailAuxiliar) */
    return emailAuxiliar;
}

app.post("/recuperarCuenta1",jsonParser,(req:any, res:any) => {
    let email=req.body.email;
    correoRecuperar(email,true);
    
    connection.query("SELECT * FROM `usuarios` WHERE correo=?",[email],function(error:any,results:any,fields:any){
        if (error) throw error;
        if(results.length == 0){
            res.send( JSON.stringify({"mensaje":"El correo no existe","error":true} ));
            return;
        }
        res.send( JSON.stringify({"mensaje":"Se ha encontrado el correo","error":false} ));
        return;
    });
    
});



app.put("/recuperarcuenta3",jsonParser,(req:any, res:any) => {
    let email = correoRecuperar("",false);
    let password=req.body.password;
    password = encriptar(password,"3")
    
    connection.query("UPDATE usuarios SET contrasenya=? WHERE correo=?",[password,email],function(error:any,results:any,fields:any){
        if (error) throw error;
        res.send( JSON.stringify({"mensaje":"Se ha cambiado la contraseña","error":false} ));
    });
    
});

app.post("/crearollacomun",jsonParser,(req:any, res:any) => {
    let imagen=req.body.imagen;
    let titulo=req.body.titulo;
    let fecha=req.body.fecha;
    let descripcion=req.body.descripcion;
    let direccion=req.body.direccion;
    let region=req.body.region;
    let telefono=req.body.telefono;
    let correo=req.body.correo;
    let cordX=req.body.cordX;
    let cordY=req.body.cordY;
    
    connection.query("INSERT INTO ollascomunes(imagen,titulo,fecha,descripcion,direccion,region,telefono,correo,cordX,cordY) VALUES (?,?,?,?,?,?,?,?,?,?)",[imagen,titulo,fecha,descripcion,direccion,region,telefono,correo,cordX,cordY],function(error:any,results:any,fields:any){
        if (error) throw error;
        res.send( JSON.stringify({"mensaje":"Se ha creado la olla comun","error":false} ));
        return;
    });
    
});

app.listen(configuracion, () => {
    console.log(`Conectando al servidor http://localhost:${configuracion.port}`)
})


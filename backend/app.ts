import {encriptar} from './encriptacion';
const express = require('express');
const mysql=require("mysql");
const iprequest=require("request-ip");
const app=express();
//jwt Token
const jwt = require("jsonwebtoken");
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
        const id = results[0].id;
        const token = jwt.sign({id}, "tokenSecreto", {expiresIn: 60 * 10});
        res.send( JSON.stringify({"mensaje":"Se ha iniciado sesion correctamente","error":false,"token":token} ));
        return;
    });
    
});

app.post("/pruebaDatos", jsonParser,(req:any,res:any) => {
    const token = req.headers['authorization']
    jwt.verify(token as string, "tokenSecreto", (err:any, user:any) => {
        if(err){
            res.send(JSON.stringify({"mensaje":"Sesion no iniciada", "error":true}))
        }else{
            res.send(JSON.stringify({"mensaje":"Sesion iniciada", "error":false,"token": user}))
            
        }
    })
})

app.post("/esAdmin", jsonParser,(req:any,res:any) => {
    const token = req.headers['authorization']
    jwt.verify(token as string, "tokenSecreto", (err:any, user:any) => {
        if(err){
            res.send(JSON.stringify({"mensaje":"Sesion no iniciada", "error":true}))
        }else{
            connection.query("SELECT * FROM `usuarios` WHERE id=?",[user.id],function(error:any,results:any,fields:any){
                if (error) throw error;
                if(results.length == 0){
                    res.send( JSON.stringify({"mensaje":"Usted no es admin","error":true} ));
                    return;
                }
                res.send( JSON.stringify({"mensaje":"Se ha iniciado correctamente","error":false,"token":token,"admin":results[0].esAdmin} ));
                return;
            });
        }
    })
})

/* Al cambiar la pagina, se pueda almacenar el email para los recuperar cuenta */
let emailAuxiliar:string
function correoRecuperar(email:string,flag:boolean){
    if(flag){
        emailAuxiliar = email
        return;
    }
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

app.delete("/eliminarOllaComun",jsonParser,(req:any, res:any) => {
    let id=req.body.id;
    
    connection.query("DELETE FROM `ollascomunes` WHERE id=?",[id],function(error:any,results:any,fields:any){
        if (error) throw error;
        res.send( JSON.stringify({"mensaje":"Se ha encontrado el id","error":false} ));
        return;
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

app.get("/obtenerollascomunes",jsonParser,(req:any,res:any) => {
    connection.query("SELECT * FROM ollascomunes",function(error:any,results:any,fields:any){
        if(error) throw error;
        //Se envian todas las ollas comunes
        res.send( results );
        return;
    })
})

app.post("/notError",jsonParser,(req:any, res:any) => {
    let nombre=req.body.nombre;
    let descripcion=req.body.descripcion;
    
    connection.query("INSERT INTO errores(nombre, descripcion) VALUES (?,?)",[nombre,descripcion],function(error:any,results:any,fields:any){
        if (error) throw error;
        res.send( JSON.stringify({"mensaje":"Se ha creado la notificacion de error","error":false} ));
        return;
    });
    
});

app.listen(configuracion, () => {
    console.log(`Conectando al servidor http://localhost:${configuracion.port}`)
})


//requires
var express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload'); /* sube imagenes */

//Inicializar variables.
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Cors Middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});

//CONFIGURACION DE LA CONEXION.
const mc = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'docentes'
})

//CONECTAR LA BASE DE DATOS.
mc.connect();

//RECUPERAR TODOS LOS DOCENTES.
app.get('/docentes', function(req,res){
    mc.query('SELECT * FROM docentes', function(error,results,fields){
        if(error) throw error;
        return res.send({
            error:false,
            data:results,
            message:'Lista de docentes.'
        });
    });
});

//RUTAS.
app.get('/',(req,res,next)=>{
    res.status(200).json({
        ok:true,
        mensaje:'Peticion realizada correctamente'
    })
});

//AÑADIR NUEVO DOCENTE.
app.post('/docente',function(req,res){
    let datosdocente={
        //docenteId:req.body.code,
        docenteNombre: req.body.name,
        docenteHoras:req.body.hora,
        docenteDescripcion: req.body.description,
    }
    if(mc){
        mc.query("INSERT INTO docentes SET ?", datosdocente,function(error,result){
            if(error){
                res.status(500).json({"Mensaje":"Error"});
            }
            else{
                res.status(201).json({"Mensaje":"Insertado"});
            }
        });
    }
});

//ELIMINAR DOCENTE
app.delete('/docente/:id',function(req,res){
    let id=req.params.id;
    if(mc){
        console.log(id);
        mc.query("DELETE FROM docentes WHERE docenteId = ?", id, function(error,result){
            if(error){
                return res.status(500).json({"Mensaje":"Error"});
            }
            else{
                return res.status(200).json({"Mensaje":"Registro con id="+id+" Borrado."});
            }
        });
    }
});

//EDITAR DOCENTE
app.put('/docente/:id',(req,res)=>{
    let id=req.params.id;
    let docente=req.body;
    console.log(id);
    console.log(docente);
    if(!id||!docente){
        return res.status(400).send({error:docente, message:'Debe proveer un id y los datos de un producto.'});
    }
    mc.query("UPDATE docentes SET ? WHERE docenteId = ?",[docente,id],function(error,results,fields){
        if(error) throw error;
        return res.status(200).json({"Mensaje":"Registro con id="+id+" ha sido actualizado."});
    });
});

//Escuchar peticiones.
app.listen(3000,()=>{
    console.log('Express Server - puerto 3000 online');
});



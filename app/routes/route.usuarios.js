const express = require('express');
const perfil = express.Router();

const conexion = require('../db/db.conexion');

perfil.get('/', (req, res)=>{     
    conexion.query('SELECT * FROM usuarios',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            res.render('index.ejs', {results:results});            
        }   
    })
})

perfil.get('/create', (req,res)=>{
    res.render('create');
})

perfil.get('/edit/:id_usuario', (req,res)=>{    
    const id_usuario = req.params.id_usuario;
    conexion.query('SELECT * FROM usuarios WHERE id_usuario=?',[id_usuario] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('edit.ejs', {user:results[0]});            
        }        
    });
});

perfil.get('/delete/:id_usuario', (req, res) => {
    const id_usuario = req.params.id_usuario;
    conexion.query('DELETE FROM usuarios WHERE id_usuario = ?',[id_usuario], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});

const crud = require('../controller/crud');

perfil.post('/save', crud.save);
perfil.post('/update', crud.update);

module.exports = perfil;
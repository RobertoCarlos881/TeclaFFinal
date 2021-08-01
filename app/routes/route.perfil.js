const express = require('express');
const perfil = express.Router();

const conexion = require('../db/db.conexion');

perfil.get('/', (req, res)=>{     
    conexion.query('SELECT * FROM users',(error, results)=>{
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

perfil.get('/edit/:id', (req,res)=>{    
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('edit.ejs', {user:results[0]});            
        }        
    });
});

perfil.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});

const crud = require('../controllers/crud');

perfil.post('/save', crud.save);
perfil.post('/update', crud.update);

module.exports = perfil;
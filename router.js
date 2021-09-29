const express=require('express');

const router= express.Router();

const conexion=require('./database/db');

router.get('/', (req,res)=>{

    

    conexion.query("SELECT * FROM `empleados`", (error,results)=>{

        
     
        
        if(error){
            throw error;

        }else
        {
            res.render('index', {results:results});



        }
    })
    
}
)

router.get('/create', (req,res)=>{

    res.render('create');
});

const crud=require('./controllers/crud');
const { Router } = require('express');

//Para utilizar los metodos de CRUD

router.post('/save', crud.save);


module.exports=router;
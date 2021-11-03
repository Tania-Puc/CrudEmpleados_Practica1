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
 
router.get('/edit/:id_empleado', (req,res)=>{
    const id_empleado=req.params.id_empleado;
        
      conexion.query("SELECT * FROM empleados WHERE id_empleado= ?",[id_empleado],(error,results)=>{

        if(error){
            throw error;
        }else
        {
             res.render('edit', {empleados:results[0]});     
        }
    })
});

//RUTA PARA ELIMINAR EL REGISTRO
router.get('/delete/:id_empleado', (req,res)=> {
    const id_empleado=req.params.id_empleado;
    conexion.query("DELETE FROM empleados WHERE id_empleado=?",[id_empleado],(error,results)=>{
        if(error){   
            throw error;
        }else
        {
             res.redirect('/');       
        }                
    })
})
const crud=require('./controllers/crud');
const { Router } = require('express');
//Para utilizar los metodos de CRUD
router.post('/save', crud.save);
router.post('/update', crud.update);
module.exports=router;
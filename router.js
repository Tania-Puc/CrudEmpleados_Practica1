const express=require('express');

const router= express.Router();

const conexion=require('./database/db');

router.get('/', (req,res)=>{

    //'SELECT * FROM `empleados` WHERE `fecha_ingreso`>= CURDATE()'
    conexion.query("SELECT * FROM `empleados`", (error,results)=>{
        

        
     
        
        if(error){
            throw error;

        }else
        {
             res.send(results);



        }
    })
    
}
)



module.exports=router;
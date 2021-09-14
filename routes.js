const express = require('express')
const routes = express.Router()

//traer todos los elementos
routes.get('/',(req,res)=>{
    //res.send('testing api')
    req.getConnection((err,conn)=>{
        if(err)return res.send(err)
        conn.query('SELECT * FROM books ',(err,rows)=>{
            if(err)return res.send(err)
                res.json(rows)
        })
    })
})

//registrar elemento nuevo
routes.post('/',(req,res)=>{
    //res.send('testing api')
    req.getConnection((err,conn)=>{
        if(err)return res.send(err)
       
       // console.log(req.body)//ver contenido de peticion a rest api
        conn.query('INSERT INTO books set ?',[req.body],(err,rows)=>{
            if(err)return res.send(err)
                res.send('book added')
        })
        
    })
})
//eliminar elemento
routes.delete('/:id',(req,res)=>{
    //res.send('testing api')
    req.getConnection((err,conn)=>{
        if(err)return res.send(err)
       
       // console.log(req.body)//ver contenido de peticion a rest api
        conn.query('DELETE FROM books WHERE id = ? ',[req.params.id],(err,rows)=>{
            if(err)return res.send(err)
                res.send('book excluded')
        })
        
    })
})
//actualiza elemento seleccionado
routes.put('/:id',(req,res)=>{
    //res.send('testing api')
    req.getConnection((err,conn)=>{
        if(err)return res.send(err)
       
       // console.log(req.body)//ver contenido de peticion a rest api
        conn.query('UPDATE books set ? WHERE id= ? ',[req.body, req.params.id],(err,rows)=>{
            if(err)return res.send(err)
                res.send('book update')
        })
        
    })
})


module.exports = routes

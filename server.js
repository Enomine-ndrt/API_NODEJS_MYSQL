const express = require('express')//requerir el modulo express
const mysql = require('mysql')//se require el modulo importado
const myconn = require('express-myconnection')//se requiere el modulo express-myconnection importado anteriormente
const routes = require('./routes')
const dbOptions ={// se define los valores que se necesitan para la conexion
        host : 'localhost',
        port : 3306 ,//puerto mysql
        user : 'root' ,
        pasword : '',
        database: 'library'
}
const app = express()
//midleweare ----------------------------------
app.use(myconn(mysql,dbOptions,'single'))
app.use(express.json())



app.set('port',process.env.PORT || 9000)//poner puerto a usar
//router -------------------------------------------------
app.get('/',(req,res)=>{
    res.send('welcome to my api')
})

app.use('/api',routes)
//server running---------------------------------------
app.listen(app.get('port'),()=>{
    console.log('sever runnig on port ',app.get('port'))//imprimir
})
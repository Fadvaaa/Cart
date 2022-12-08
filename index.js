require('dotenv').config()


const express=require('express')
const app=express()
const open = require('open')
const { CreateItem, AddingItem, ViewItem, UpdateItem,DeleteItem, ViewUpdates} = require('./controllers/item')
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))


let dbConnect=require('./config/database')
dbConnect()

app.get('/',ViewItem)  
app.get('/add',AddingItem)  
app.post('/add',CreateItem)  
app.get('/update/:item',ViewUpdates)
app.post('/update',UpdateItem)
app.get('/delete/:item',DeleteItem)

app.get('/*',(req,res)=>{
    res.sendFile(__dirname+'/static/error.html')
})
let port =Math.floor(Math.random()*1000)
app.listen(port,async(req,res)=>{
    console.log('app runs on ',port)
    await open(`http://localhost:${port}`)

})
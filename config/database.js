const mongoose=require('mongoose')
const ConnectWithDb=()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log('DB connected')
    }).catch((error)=>{
        console.log('DB connection failed')
        console.log('error')
        process.exit(1)
    })
}

module.exports=ConnectWithDb
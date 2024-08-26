
const router = require('./Routes/router')

require('dotenv').config()

const express = require("express")

require('./DB/connection')

const cors = require('cors')

const pfServer = express();

pfServer.use(cors())

pfServer.use(express.json());


pfServer.use(router)

pfServer.use('/uploads',express.static('./uploads'))

const PORT = 4000;


pfServer.listen(PORT, ()=>{
    console.log(`Server is running successfully at port : ${PORT}`)
})

pfServer.get('/', (req,res)=>{
    res.send("Project fair server is running successfully")
})
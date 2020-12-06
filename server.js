const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")
const app  = express()

const PORT =process.env.PORT || 5000
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use(express.static(path.resolve(__dirname,"build")))

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"build","index.html"))
})

app.listen(PORT,()=>{
    console.log("Listening:",PORT)
})
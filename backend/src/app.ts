
import express from "express";
import healthRouter from "./routes/health.route.js"


const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())


app.get('/',(req,res) =>{
    res.send("EHR is working correctly")
})

app.use('/api',healthRouter)

app.get('/api/health',(req,res)=>{
    res.send ({
        status : 200,
        message : "EHR Working correctly",
        timeStamp : new Date().toISOString()
     })
})

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`)
})
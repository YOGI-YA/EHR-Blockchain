import express from "express"


const app = express()

const PORT = process.env.PORT || 5000


app.get('/',(req,res) =>{
    res.send("EHR is working correctly")
})

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`)
})
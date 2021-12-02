import express from "express";
import data from "./data.js"
const port = process.env.PORT || 5000
const app = express();

app.get('/', (req, res)=>{
    res.status(200).send(`Server is ready`)
})

app.get('/api/products',(req,res)=>{
    res.status(200).send(data.products)
})

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
})
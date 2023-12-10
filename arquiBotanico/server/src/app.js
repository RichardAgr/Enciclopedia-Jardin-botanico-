import cors  from 'cors'
import express from "express"
import productRouter from '../routes/productRouter.js';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.use('/jardinBotanico', productRouter)

app.get("/addProduct" ,(req,res) => {
    res.send("Prueba")
})

app.use('/Images', express.static('./Images'))

export default app;
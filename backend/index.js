require('dotenv').config()
const express = require ("express")
const mongoose = require("mongoose")
const cors = require("cors")
const articlesRouter = require("./routes/articles.js")
const userRouter = require("./routes/user.js")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/news-explorer")
.then(() => console.log("connected to db"))
.catch(err => console.log("error while connecting to db: ",err))

app.use(userRouter)
app.use("/articles", articlesRouter)

app.listen(3000, () =>{
	console.log("Servidor rodando na porta 3000")
})
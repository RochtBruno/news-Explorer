const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/user.js")
const auth = require("../middleware/auth.js")

const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET

router.post("/signup", async(req, res) => {
	try {
		const { email, password, name } = req.body
		const hash = await bcrypt.hash(password, 10)
		const user = await User.create({email, password: hash, name})
		res.status(201).send({ email: user.email, name: user.name, _id: user._id})
	} catch (error) {
		res.status(400).send({message: "Erro ao cadastrar usuário", error: error.message})
	}
})

router.post("/signin",async (req, res) => {
	try {
		const {email, password} = req.body
		const user = await User.findOne({ email }).select("+password")
		if(!user){
			return res.status(401).send({message: "Email ou senha incorretos"})
		}
		const matched = await bcrypt.compare(password, user.password)
		if(!matched){
			return res.status(401).send({ message: "Email ou senha incorretos"})
		}
		const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
			expiresIn: "7d"
		})
		res.send({ token })
	} catch (error) {
		res.status(500).send({ message: "Erro ao fazer login" })
	}
})

router.get("/users/me", auth, async (req, res) => {
	try {
		const user = await User.findById(req.user._id).select("-password")
		if(!user){
			return res.status(404).send({ message: "Usuário não encontrado" })
		}
		res.send(user)
	} catch (error) {
		res.status(500).send({ message: "Erro ao buscar usuário" })
	}
})

module.exports = router
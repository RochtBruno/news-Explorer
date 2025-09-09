const express = require("express");
const Article = require("../models/article.js")
const auth = require("../middleware/auth.js")

const router = express.Router();

router.get("/", auth, async(req, res) =>{
	try{
		const articles = await Article.find({owner : req.user._id})
		res.send(articles)
	}catch(err){
		res.status(500).send({message: "Erro ao buscar artigos"})
	}
})

router.post("/", auth, async(req, res) =>{
	try {
		const article = await Article.create({...req.body, owner: req.user._id})
		res.status(201).send(article)
	} catch (error) {
		res.status(400).send({message: "Erro ao salvar artigo", error: error.message})
	}
})

router.delete("/:id", auth, async(req, res) => {
	try {
		const article = await Article.findOneAndDelete({_id: req.params.id, owner: req.user._id})
		if(!article){
			return res.status(404).send({message: "Artigo não encontrado"})
		}
		res.status(200).send({message: "Artigo removido"})
	} catch (error) {
		res.status(500).send({message: "Erro ao remover artigo"})
	}
})

module.exports = router
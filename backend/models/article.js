const mongoose = require("mongoose")

const ArticleSchema = new mongoose.Schema({
	keyword:{
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	fonte: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true,
		validate: {
			validator: function(v) {
				return /^https?:\/\/.+/.test(v)
			},
			message: props => `${props.value} não é um URL válido!`
		}
	},
	image:{
		type: String,
		required: true,
		validate: {
			validator: function(v) {
				return /^https?:\/\/.+/.test(v)
			},
			message: props => `${props.value} não é um URL válido!`
		}
	},
	owner:{
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
		select: false
	}
})

module.exports = mongoose.model("articles", ArticleSchema)
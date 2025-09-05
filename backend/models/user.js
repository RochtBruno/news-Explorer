const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
	email:{
		type: String,
		required: true,
		unique: true,
	},
	password:{
		type: String,
		required: true,
	},
	name:{
		type: String,
		minLength: 2,
		maxLength: 30
	}
})

module.exports = mongoose,model("user", UserSchema)
const jwt = require("jsonwebtoken")

const JWT_SECRET = process.env.JWT_SECRET

function auth(req, res, next) {
	const { authorization } = req.headers;

	if(!authorization || !authorization.startsWith("Bearer ")){
		return res.status(401).send({message: "Autorização necessária"})
	}
	const token = authorization.replace("Bearer ", "")
	try{
		const payload = jwt.verify(token, JWT_SECRET);
		req.user = payload;
		next();
	}catch(err){
		res.status(401).send({message: "Token inválido"})
	}
}

module.exports = auth
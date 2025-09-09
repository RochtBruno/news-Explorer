import { useState, useEffect, useRef } from 'react'
import "./PopupWithForm.css"
import closePopup from "../../images/close.png"
import api from "../../utils/apiNewsExplorer.js"
import { useAuth } from "../../contexts/AuthContext.jsx"

function PopupWithForm({ onClose }){

	const popupRef = useRef(null);
	const [type, setType] = useState("login")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [name, setName] = useState("")
	const [error, setError] = useState("")
	const { login } = useAuth()

	useEffect(() => {
		function handleEsc(e) {
			if(e.key === "Escape") onClose()
		}
		document.addEventListener("keydown", handleEsc)
		return () => document.removeEventListener("keydown",handleEsc)
	}, [onClose])

	function handleOverlayClick(e){
		if(popupRef.current && !popupRef.current.contains(e.target)){
			onClose()
		}
	}

	async function handleSubmit(e){
		e.preventDefault()
		setError("")
		try {
			if(type === "login"){
				const {token} = await api.signinUser({ email, password })
				login(token)
				console.log("entrou login")
				onClose()
			}else{
				await api.signupUser({ email, password, name })
				console.log("entrou cadastro")
				setType("login")
				setError("Cadastro realizado, faça login")
			}
		} catch (error) {
			setError(error.message || "Erro ao autenticar usuário")
		}
	}

	return(
		<>
			<div className="popupwithform__overlay" onMouseDown={handleOverlayClick}>
				<div className="popupwithform" ref={popupRef}>
					<img className="popupwithform__close" src={closePopup} alt="fechar popup" onClick={onClose}/>
					<h2 className="popupwithform__title">{type === "login" ? "Entrar" : "Inscreva-se"}</h2>
					<form className="popupwithform__form" onSubmit={handleSubmit}>
						<label>
							Email <br />
							<input 
							className="popupwithform__input" 
							type="email" 
							placeholder="Insira seu email" 
							required 
							value={email}
							onChange={e => setEmail(e.target.value)}
							/>
						</label>
						{type === "register" && (
							<label>
								Nome de usuário <br />
								<input 
								className="popupwithform__input" 
								type="text" 
								placeholder="Insira seu nome de usuário" 
								required
								value={name}
								onChange={e => setName(e.target.value)}
								/>
							</label>
						)}
						<label >
							Senha <br />
							<input 
							className="popupwithform__input" 
							type="password" 
							placeholder="Insira sua senha" 
							required
							value={password}
							onChange={e => setPassword(e.target.value)}
							/>
						</label>
						<button type="submit" className="popupwithform__submit">
							{type === "login" ? "Entrar" : "Inscrever-se"}
						</button>
					</form>
					<a 
					className="popupwithform__link" 
					href="/"
					onClick={(e) => {
						e.preventDefault()
						if(type === "login"){
							setType("register")
						}else{
							setType("login")
						}
					}}
					>{type === "login" ? "Inscrever-se" : "Entrar"}</a>
				</div>
			</div>
		</>
	)
}

export default PopupWithForm
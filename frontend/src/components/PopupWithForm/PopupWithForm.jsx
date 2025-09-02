import { useEffect, useRef } from 'react'
import "./PopupWithForm.css"
import closePopup from "../../images/close.png"

function PopupWithForm({type = "login", onClose}){

	const popupRef = useRef(null);

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

	return(
		<>
			<div className="popupwithform__overlay" onMouseDown={handleOverlayClick}>
				<div className="popupwithform" ref={popupRef}>
					<img className="popupwithform__close" src={closePopup} alt="fechar popup" onClick={onClose}/>
					<h2 className="popupwithform__title">{type === "login" ? "Entrar" : "Inscreva-se"}</h2>
					<form className="popupwithform__form">
						<label>
							Email <br />
							<input className="popupwithform__input" type="email" placeholder="Insira seu email" required />
						</label>
						{type === "register" && (
							<label>
								Nome de usuário <br />
								<input className="popupwithform__input" type="text" placeholder="Insira seu nome de usuário" required/>
							</label>
						)}
						<label >
							Senha <br />
							<input className="popupwithform__input" type="password" placeholder="Insira sua senha" required/>
						</label>
						<button type="submit" className="popupwithform__submit">
							{type === "login" ? "Entrar" : "Inscrever-se"}
						</button>
					</form>
					<a className="popupwithform__link" href={type === "login" ? "/signup" : "sigin"}>{type === "login" ? "Inscrever-se" : "Entrar"}</a>
				</div>
			</div>
		</>
	)
}

export default PopupWithForm
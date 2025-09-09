import './Header.css'
import { usePopup } from "../App/App.jsx"
import { useAuth } from "../../contexts/AuthContext.jsx"
import logoutImg from "../../images/logout.png"

function Header({}) {

	const {openPopup} = usePopup()
	const { user, logout } = useAuth()

	return(
		<>
			<div className="header">
				<div className="header__navigation">
					<a className="header__navigation-logo" href="/">NewsExplorer</a>
					<div className="header__navigation-btns">
						<a className="header__navigation-btn-home" href="/">Início</a>
						{user && (
							<a className="header__navigation-btn-home" href="/saved-news">Artigos salvos</a>
						)}
						{user ? (
							<button className="header__navigation-btn-signin" onClick={logout}>
								{user.name}
								<img src={logoutImg} alt="Sair" />
								</button>
						) : (
							<button className="header__navigation-btn-signin" onClick={openPopup}>Entrar</button>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
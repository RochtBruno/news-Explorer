import "./SavedNewsHeader.css"
import { useAuth } from "../../contexts/AuthContext.jsx"
import logoutImg from "../../images/logout.png"

function SavedNewsHeader({}) {

	const { user, logout } = useAuth()

	return(
		<>
			<div className="savedNews">
				<div className="savedNews__navigation">
					<a className="savedNews__navigation-logo" href="/">NewsExplorer</a>
					<div className="savedNews__navigation-btns">
						<a className="savedNews__navigation-btn-home" href="/">Início</a>
						<a className="savedNews__navigation-btn-home" href="/">Artigos salvos</a>
						<button className="savedNews__navigation-btn-signin" onClick={logout}>
							{user.name}
							<img src={logoutImg} alt="Sair" />
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default SavedNewsHeader
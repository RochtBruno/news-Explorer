import './Header.css'
import { usePopup } from "../App/App.jsx"

function Header({}) {

	const {openPopup} = usePopup()

	return(
		<>
			<div className="header">
				<div className="header__navigation">
					<a className="header__navigation-logo" href="/">NewsExplorer</a>
					<div className="header__navigation-btns">
						<a className="header__navigation-btn-home" href="#">Início</a>
						<button className="header__navigation-btn-signin" onClick={openPopup}>Entrar</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
import './Header.css'
import { usePopup } from "../App/App.jsx"
import { useAuth } from "../../contexts/AuthContext.jsx"
import logoutImg from "../../images/logout.png"
import { useState } from 'react'

function Header() {
	const { openPopup } = usePopup()
	const { user, logout } = useAuth()
	const [menuMobileOpen, setMenuMobileOpen] = useState(false)

	const toggleMenuMobile = () => {
		setMenuMobileOpen((open) => !open)
	}

	return (
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
					{/* Botão hambúrguer */}
					<div className={`header__menu-mobile-icon${menuMobileOpen ? " active" : ""}`} onClick={toggleMenuMobile}>
						<div className="line"></div>
						<div className="line"></div>
					</div>
				</div>
			</div>
			{/* Menu mobile */}
			{menuMobileOpen && (
				<div className="header__menu-mobile-panel">
					<a className="header__navigation__mobile-logo" href="/">NewsExplorer</a>
					<div className="header__navigation-wrapper">
						<a className="header__navigation-btn-home" href="/" onClick={toggleMenuMobile}>Início</a>
						{user && (
							<a className="header__navigation-btn-home" href="/saved-news" onClick={toggleMenuMobile}>Artigos salvos</a>
						)}
						{user ? (
							<button className="header__navigation-btn-signin" onClick={() => { logout(); toggleMenuMobile(); }}>
								Sair
							</button>
						) : (
							<button className="header__navigation-btn-signin" onClick={() => { openPopup(); toggleMenuMobile(); }}>Entrar</button>
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default Header
import "./Main.css"
import Header from "../Header/Header.jsx"
import About from "../About/About.jsx"
import NewsCardList from "../NewsCardList/NewsCardList.jsx"
import PopupWithForm from "../PopupWithForm/PopupWithForm.jsx"
import { usePopup } from "../App/App.jsx"

function Main() {

	 const { closePopup, openPopup, isPopupOpen } = usePopup()

	return(
		<>
			<main className="main">
				<Header/>
				<div className="main__content">
					<h2 className="main__content-title">O que está acontecendo no mundo?</h2>
					<p className="main__content-text">Encontre as últimas notícias sobre qualquer tema e salve elas em sua conta pessoal</p>
					<div className="main__content-research">
						<input className="main__content-research-input" type="text" placeholder="Inserir tema"/>
						<button className="main__content-research-btn">Procurar</button>
					</div>
				</div>
				{isPopupOpen && (
					<PopupWithForm onClose={closePopup} />
				)}
			</main>
			<h2 className="cardlist__title">Procurar resultados</h2>
			<NewsCardList />
			<About />
		</>
	)
}

export default Main
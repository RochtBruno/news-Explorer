import "./Main.css"
import Header from "../Header/Header.jsx"
import About from "../About/About.jsx"
import NewsCardList from "../NewsCardList/NewsCardList.jsx"
import PopupWithForm from "../PopupWithForm/PopupWithForm.jsx"
import { usePopup } from "../App/App.jsx"
import api from "../../utils/apiNewsExplorer.js"
import { useState } from "react"

function Main() {

	const { closePopup, openPopup, isPopupOpen } = usePopup()
	const [search, setSearch] = useState("")
	const [error, setError] = useState("")
	const [articles, setArticles] = useState([])
	const [loading, setLoading] = useState(false)
	const [lastKeyword, setLastKeyword] = useState("")

	async function handleSearch(e) {
		e.preventDefault()
		if(!search.trim()){
			setError("Por favor, insira uma palavra-chave")
			return
		}
		setError("")
		setLoading(true)
		try {
			const data = await api.getNews(search)
			setArticles(data.articles)
			console.log(data.articles)
			setLastKeyword(search);
		} catch (error) {
			setError("Desculpe, algo deu errado durante a solicitação. \
				Pode haver um problema de conexão ou o servidor pode estar inativo. Por favor, tente novamente mais tarde.")
		}
		setLoading(false)
	}

	return(
		<>
			<main className="main">
				<Header/>
				<div className="main__content">
					<h2 className="main__content-title">O que está acontecendo no mundo?</h2>
					<p className="main__content-text">Encontre as últimas notícias sobre qualquer tema e salve elas em sua conta pessoal</p>
					<div className="main__content-research">
						<form className="main__content-research" onSubmit={handleSearch}>
							<input 
							className="main__content-research-input" 
							type="text" 
							placeholder="Inserir tema"
							value={search}
							onChange={e => setSearch(e.target.value)}
							/>
							<button 
							className="main__content-research-btn"
							type="submit"
							>Procurar</button>
						</form>
					</div>
				</div>
				{isPopupOpen && (
					<PopupWithForm onClose={closePopup} />
				)}
			</main>
			{articles.length > 0 && <h2 className="cardlist__title">Procurar resultados</h2>}
			{loading && <div className="loading">
				<div className="loader-spinner"></div>
				<p className="loading__text">Procurando notícias...</p>
				</div>}
			<NewsCardList articles={articles} keyword={lastKeyword}/>
			<About />
		</>
	)
}

export default Main
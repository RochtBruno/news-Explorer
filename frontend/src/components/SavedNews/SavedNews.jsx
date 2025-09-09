import "./SavedNews.css"
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader.jsx"
import NewsCardList from "../NewsCardList/NewsCardList.jsx"
import { useAuth } from "../../contexts/AuthContext.jsx"

function SavedNews(){

	const { user } = useAuth()
	return(
		<>
			<SavedNewsHeader />

			<div className="savedNewsMain">
				<p className="savedNews__info">Artigos salvos</p>
				<h2 className="savedNews__title">{user ? `${user.name}, você tem 5 artigos salvos`: `Você tem 5 artigos salvos`}</h2>
				{/* <p className="savedNews__keywords">Por palavras-chave: Natureza, Yellowstone, e 2 outras</p> */}
			</div>
			<NewsCardList/>
		</>
	)
}

export default SavedNews
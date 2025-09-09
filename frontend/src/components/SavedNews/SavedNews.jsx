import "./SavedNews.css"
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader.jsx"
import NewsCardList from "../NewsCardList/NewsCardList.jsx"
import { useAuth } from "../../contexts/AuthContext.jsx"
import { useSavedArticles } from "../../contexts/SavedArticlesContext.jsx"

function SavedNews(){

	const { user } = useAuth()
	const { savedArticles } = useSavedArticles()

	const keywords = [...new Set(savedArticles.map(article => article.keyword))];

	return(
		<>
			<SavedNewsHeader />
			<div className="savedNewsMain">
				<p className="savedNews__info">Artigos salvos</p>
				<h2 className="savedNews__title">{user ? `${user.name}, você tem ${savedArticles.length} artigos salvos`: `Você tem ${savedArticles.length} artigos salvos`}</h2>
				<p className="savedNews__keywords">Por palavras-chave: {keywords.join(", ")}</p>
			</div>
			<NewsCardList articles={savedArticles}/>
		</>
	)
}

export default SavedNews
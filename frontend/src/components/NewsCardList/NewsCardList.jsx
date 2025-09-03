import "./NewsCardList.css"
import NewsCard from "../NewsCard/NewsCard.jsx"

function NewsCardList(){
	return(
		<>
			<div className="cardlist">
				<h2 className="cardlist__title">Procurar resultados</h2>
				<div className="cardlist__wrapper">
					<NewsCard />
					<NewsCard />
					<NewsCard />
				</div>
			</div>
		</>
	)
}

export default NewsCardList
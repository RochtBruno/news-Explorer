import "./NewsCardList.css"
import { useState } from 'react'
import NewsCard from "../NewsCard/NewsCard.jsx"

// const cardsData = [1, 2, 3, 4, 5, 6]

function NewsCardList({articles = [], keyword}){
	const [showAll, setShowAll] = useState(false)
	const visibleCards = showAll ? articles : articles.slice(0,3)
	return(
		<>
			<div className="cardlist">
				
				<div className="cardlist__wrapper">
					{visibleCards.map((article,i) => (
						<NewsCard key={i} article={article} keyword={keyword}/>
					))}
				</div>
				{articles.length > 3 && (
					<button className="cardlist__btn-showAll" onClick={() => setShowAll(!showAll)}>
						{showAll ? "Mostrar menos" : "Mostrar mais"}
					</button>
				)}

			</div>
		</>
	)
}

export default NewsCardList
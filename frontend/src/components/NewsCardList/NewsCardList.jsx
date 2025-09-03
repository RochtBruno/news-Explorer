import "./NewsCardList.css"
import { useState } from 'react'
import NewsCard from "../NewsCard/NewsCard.jsx"

const cardsData = [1, 2, 3, 4, 5, 6]

function NewsCardList(){
	const [showAll, setShowAll] = useState(false)
	const visibleCards = showAll ? cardsData : cardsData.slice(0,3)
	return(
		<>
			<div className="cardlist">
				<h2 className="cardlist__title">Procurar resultados</h2>
				<div className="cardlist__wrapper">
					{visibleCards.map((card,i) => (
						<NewsCard key={i} />
					))}
				</div>
				{cardsData.length > 3 && (
					<button className="cardlist__btn-showAll" onClick={() => setShowAll(!showAll)}>
						{showAll ? "Mostrar menos" : "Mostrar mais"}
					</button>
				)}

			</div>
		</>
	)
}

export default NewsCardList
import "./NewsCard.css"
import savedMark from "../../images/saved.png"
import notSavedMark from "../../images/notSaved.png"

function NewsCard({article}){
	return(
		<>
			<div className="newscard">
				{/* <p className="newscard__topic">{}</p> */}
				<div className="newscard__save">
					<img src={notSavedMark} alt="" />
				</div>
				<img className="newscard__img" src={article.urlToImage} alt="" />
				<div className="newscard__text-wrapper">
					<p className="newscard__date">{article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : ""}</p>
					<h3 className="newscard__title">{article.title}</h3>
					<p className="newscard__text">{article.description}</p>
					<p className="newscard__author">{article.source?.name}</p>
				</div>
			</div>
		</>
	)
}

export default NewsCard
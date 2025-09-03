import "./NewsCard.css"
import nature1 from "../../images/nature1.jpg"

function NewsCard(){
	return(
		<>
			<div className="newscard">
				<img className="newscard__img" src={nature1} alt="" />
				<div className="newscard__text-wrapper">
					<p className="newscard__date">4 de novembro de 2021</p>
					<h3 className="newscard__title">Todo mundo precisa de um ''Lugar Especial para Sentar" especial na naturezaza</h3>
					<p className="newscard__text">Desde que li o influente livro de Richard Louv, "O Último Filho na Floresta", a ideia 
						de ter um "lugar para sentar" especial me pegou de jeito. This advice, which Louv attributes to natureza...</p>
					<p className="newscard__author">treehugger</p>
				</div>
			</div>
		</>
	)
}

export default NewsCard
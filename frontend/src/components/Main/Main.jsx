import "./Main.css"
import Header from "../Header/Header.jsx"

function Main() {
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
			</main>
		</>
	)
}

export default Main
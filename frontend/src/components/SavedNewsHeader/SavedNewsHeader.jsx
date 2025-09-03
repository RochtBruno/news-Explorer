import "./SavedNewsHeader.css"

function SavedNewsHeader({}) {

	return(
		<>
			<div className="savedNews">
				<div className="savedNews__navigation">
					<a className="savedNews__navigation-logo" href="/">NewsExplorer</a>
					<div className="savedNews__navigation-btns">
						<a className="savedNews__navigation-btn-home" href="/">Início</a>
						<a className="savedNews__navigation-btn-home" href="/">Artigos salvos</a>
						<button className="savedNews__navigation-btn-signin">Entrar</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default SavedNewsHeader
import "./About.css"
import profilePhoto from "../../images/foto__perfil.jpeg"

function About(){
	return(
		<>
			<div className="about">
				<div className="about__image">
					<img src={profilePhoto} alt="author's photo" />
				</div>
				<div className="about__text">
					<h2 className="about__text-title">Sobre o autor</h2>
					<p className="about__text-description">Esse bloco descreve o autor do projeto. Aqui você deve indicar seu nome, o que você faz e quais tecnologias de desenvolvedor você conhece.
					<br /> <br />Você também pode falar sobre sua experiência com o Practicum, o que aprendeu lá e como pode ajudar clientes em potencial.</p>
				</div>
			</div>
		</>
	)
}

export default About
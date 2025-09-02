import "./Footer.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer(){
	return(
		<>
		<IconContext.Provider value={{ className: "footer__contact-links" }}>
			<footer className="footer">
				<div className="footer__copyright">© 2025 desenvolvido por Bruno Rocha</div>
				<div className="footer__contact">
					<a className="footer__contact-home" href="/">Home</a>
					<FaGithub />
					<FaLinkedin />
				</div>
			</footer>
			</IconContext.Provider>
		</>
	)
}

export default Footer
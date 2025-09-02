import { useState, createContext, useContext } from 'react'
import './App.css'
import Main from "../Main/Main.jsx"
import About from "../About/About.jsx"
import Footer from "../Footer/Footer.jsx"
import PopupWithForm from "../PopupWithForm/PopupWithForm.jsx"

export const PopupContext = createContext()

export function usePopup() {
	return useContext(PopupContext)
}

function App() {
	const [isPopupOpen,setPopupOpen] = useState(false)

	function handleOpenPopup(){
		setPopupOpen(true)
	}

	function handleClosePopup() {
		setPopupOpen(false)
	}

	return(
		<PopupContext.Provider value={{ openPopup: handleOpenPopup, closePopup: handleClosePopup }}>
			<Main />
			<About />
			<Footer />
			{isPopupOpen && (
				<PopupWithForm onClose={handleClosePopup} />
			)}
		</PopupContext.Provider>
	)
}

export default App

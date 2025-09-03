import { useState, createContext, useContext } from 'react'
import './App.css'
import Main from "../Main/Main.jsx"
import Footer from "../Footer/Footer.jsx"


import { Routes, Route } from "react-router";
export const PopupContext = createContext()

export function usePopup() {
	return useContext(PopupContext)
}

function App() {
	const [isPopupOpen, setPopupOpen] = useState(false)

	function handleOpenPopup(){
		setPopupOpen(true)
	}

	function handleClosePopup() {
		setPopupOpen(false)
	}

	return(
		<PopupContext.Provider value={{ openPopup: handleOpenPopup, closePopup: handleClosePopup, isPopupOpen }}>
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
			<Footer />
		</PopupContext.Provider>
	)
}

export default App

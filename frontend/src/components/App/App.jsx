import { useState, createContext, useContext } from 'react'
import './App.css'
import Main from "../Main/Main.jsx"
import Footer from "../Footer/Footer.jsx"
import SavedNews from "../SavedNews/SavedNews.jsx"
import { useAuth } from "../../contexts/AuthContext.jsx"


import { Routes, Route } from "react-router";
export const PopupContext = createContext()

export function usePopup() {
	return useContext(PopupContext)
}

function ProtectedRoute({ children }) {
	const { user, loading } = useAuth()
	if (loading) return null // ou um loader
	return user ? children : window.location.replace("/")
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
				<Route path="/saved-news" element={
					<ProtectedRoute>
						<SavedNews />
					</ProtectedRoute>
				} />
			</Routes>
			<Footer />
		</PopupContext.Provider>
	)
}

export default App

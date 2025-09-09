import { createContext, useContext, useState, useEffect } from "react";
import api from "../utils/apiNewsExplorer.js";
import { useAuth } from "./AuthContext.jsx";

const SavedArticlesContext = createContext();

export function useSavedArticles() {
	return useContext(SavedArticlesContext);
}

export function SavedArticlesProvider({ children }) {
	const { user } = useAuth();
	const [savedArticles, setSavedArticles] = useState([]);

	useEffect(() => {
		const token = localStorage.getItem("jwt");
		if (user && token) {
			api.getSavedArticles(token)
				.then(setSavedArticles)
				.catch(() => setSavedArticles([]));
		} else {
			setSavedArticles([]);
		}
	}, [user]);

	const saveArticle = async (article) => {
		const token = localStorage.getItem("jwt");
		const saved = await api.saveArticle(article, token);
		setSavedArticles((prev) => [...prev, saved]);
	};

	const deleteArticle = async (id) => {
		const token = localStorage.getItem("jwt");
		await api.deleteArticle(id, token);
		setSavedArticles((prev) => prev.filter((a) => a._id !== id));
	};

	return (
		<SavedArticlesContext.Provider value={{ savedArticles, saveArticle, deleteArticle }}>
			{children}
		</SavedArticlesContext.Provider>
	);
}
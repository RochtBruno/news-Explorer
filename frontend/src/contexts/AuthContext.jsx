import { createContext, useContext, useState, useEffect } from "react";
import api from "../utils/apiNewsExplorer.js";

const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem("jwt");
		if (token) {
			api.getUser(token)
				.then(userData => setUser(userData))
				.catch(() => setUser(null))
				.finally(() => setLoading(false));
		} else {
			setLoading(false);
		}
	}, []);

	function login(token) {
		localStorage.setItem("jwt", token);
		api.getUser(token)
			.then(userData => setUser(userData));
	}

	function logout() {
		localStorage.removeItem("jwt");
		setUser(null);
	}

	return (
		<AuthContext.Provider value={{ user, login, logout, loading }}>
			{children}
		</AuthContext.Provider>
	);
}
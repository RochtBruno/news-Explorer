class Api {

	constructor({ newsApiKey}) {
		this._newsApiKey = newsApiKey
	}

	async _makeRequest(url, method, body, token) {
		const headers = {
			"Content-type": "application/json"
		}
		const options = {
			method,
			headers
		};
		if(token){
			headers["Authorization"] = `Bearer ${token}`
		}
		if (body) {
			options.body = JSON.stringify(body);
		}
		return fetch(this._baseUrl + url, options)
		.then((res) => {
			if (!res.ok) {
			return res.json().then(err => { throw err });
			}
			return res.json();
		})
	}

	async signupUser({ email, password, name}){
		const res = await fetch("http://localhost:3000/signup", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({ email, password, name })
		})
		if(!res.ok)
			throw await res.json()
		return res.json()
	}

	async signinUser({ email, password }){
		const res = await fetch("http://localhost:3000/signin",{
			method: "POST",
			headers: {"Content-type": "application/json"},
			body: JSON.stringify({ email, password })
		})
		if(!res.ok)
			throw await res.json()
		return res.json()
	}

	async getUser(token){
		const res = await fetch("http://localhost:3000/users/me",{
			headers:{ Authorization: `Bearer ${token}`}
		})
		if(!res.ok)
			throw await res.json()
		return res.json()
	}

	async getNews(keyword){
		const today = new Date();
		const to = today.toISOString().split('T')[0];
		const fromDate = new Date(today);
		fromDate.setDate(today.getDate() - 7);
		const from = fromDate.toISOString().split('T')[0];

		const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(keyword)}&apiKey=${this._newsApiKey}&from=${from}&to=${to}&pageSize=100`;

		const response = await fetch(url);
		if (!response.ok) {
		const err = await response.json();
		throw err;
		}
		return response.json();
	}
}

const api = new Api({
	newsApiKey: import.meta.env.VITE_NEWS_API_KEY
});

export default api;
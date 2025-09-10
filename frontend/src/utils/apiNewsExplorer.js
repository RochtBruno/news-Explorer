class Api {

	constructor({ newsApiKey}) {
		this._newsApiKey = newsApiKey
		this._baseUrl = "https://news-explorer-xwja.onrender.com"
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
		return this._makeRequest(`/signup`,"POST",{email, password, name})
	}

	async signinUser({ email, password }){
		return this._makeRequest(`/signin`,"POST",{email,password})
	}

	async getUser(token){
		return this._makeRequest(`/users/me`,"GET",null,token)
	}

	async saveArticle(article, token) {
		return this._makeRequest(`/articles`,"POST",article,token)
	}

	async deleteArticle(id, token) {
		return this._makeRequest(`/articles/${id}`,"DELETE",null,token)
	}

	async getSavedArticles(token) {
		return this._makeRequest(`/articles`,"GET",null,token)
	}

	async getNews(keyword){
		const today = new Date();
		const to = today.toISOString().split('T')[0];
		const fromDate = new Date(today);
		fromDate.setDate(today.getDate() - 7);
		const from = fromDate.toISOString().split('T')[0];

		//const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(keyword)}&apiKey=${this._newsApiKey}&from=${from}&to=${to}&pageSize=100`; //funciona só local
		const url = `https://nomoreparties.co/news/v2/everything?q=${encodeURIComponent(keyword)}&apiKey=${this._newsApiKey}&from=${from}&to=${to}&pageSize=100`;

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
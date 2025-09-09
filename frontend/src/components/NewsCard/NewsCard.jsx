import "./NewsCard.css"
import savedMark from "../../images/saved.png"
import notSavedMark from "../../images/notSaved.png"
import { useAuth } from "../../contexts/AuthContext.jsx"
import { useSavedArticles } from "../../contexts/SavedArticlesContext.jsx"

function NewsCard({article, keyword}){

    const { user } = useAuth();
    const { savedArticles, saveArticle, deleteArticle} = useSavedArticles()

    const isSaved = savedArticles.some(a => a.link === (article.url || article.urlToImage || article.link))
    const savedArticle = savedArticles.find(a => a.link === (article.url || article.urlToImage || article.link))

    const handleSaveClick = () => {
        if (!user) return;
        if (isSaved) {
            deleteArticle(savedArticle._id);
        } else {
            saveArticle({
                keyword: keyword,
                title: article.title,
                text: article.description || article.text,
                date: article.publishedAt || article.date,
                fonte: article.source?.name || article.fonte,
                link: article.url || article.link,
                image: article.urlToImage || article.image,
            });
        }
    };

    // Escolhe a imagem, data e autor corretos
    const image = article.urlToImage || article.image;
    const date = article.publishedAt || article.date;
    const author = (article.source && article.source.name) || article.fonte;

    return(
        <div className="newscard">
            <div className="newscard__save" onClick={handleSaveClick}>
                <img 
                	className="newscard__save-icon" 
                    src={isSaved ? savedMark : notSavedMark} 
                    alt={isSaved ? "Remover dos salvos" : "Salvar artigo"} />
            </div>
            <img className="newscard__img" src={image} alt="" />
            <a className="newscard__link" target="_blank" href={article.link || article.url}>
				<div className="newscard__text-wrapper">
                <p className="newscard__date">{date ? new Date(date).toLocaleDateString() : ""}</p>
                <h3 className="newscard__title">{article.title}</h3>
                <p className="newscard__text">{article.description || article.text}</p>
                <p className="newscard__author">{author}</p>
            </div>
			</a>
        </div>
    )
}

export default NewsCard
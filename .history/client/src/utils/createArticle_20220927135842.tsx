const axios = require('axios').default;

interface ArticleInfo {
    
}

const createArticle = async function (title, content, tags, coverImage) {
    await axios.post('http://localhost:4000/articles/create' {title, content, tags, coverImage})
}

export default createArticle
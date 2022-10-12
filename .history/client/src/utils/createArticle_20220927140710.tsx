const axios = require('axios').default;

interface ArticleInfo {
    title: string;
    content: string;
    tags: string;
    coverImage: string
}

const createArticle = async function (title: an, content, tags, coverImage) {
    await axios.post('http://localhost:4000/articles/create', {title, content, tags, coverImage}, {headers: {Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`}})
}

export default createArticle
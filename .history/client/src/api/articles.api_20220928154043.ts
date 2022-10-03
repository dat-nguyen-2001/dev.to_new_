const axios = require('axios').default;

const getArticles = async () => {
    const res = await axios.get('http://localhost:4000/articles')
    return res.data;
};

const getArticlesByUser = async function (username: string) {
    const res = await axios.post(`http://localhost:4000/articles/${username}`)
    console.log(res)
}

const createArticle = async function (title: string, content: string, tags: string, coverImage: string) {
    await axios.post('http://localhost:4000/articles/create', {title, content, tags, coverImage}, {headers: {Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`}})
}

const articlesApi = {getArticles, getArticlesByUser,createArticle}
export default articlesApi
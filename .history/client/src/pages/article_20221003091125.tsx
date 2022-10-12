import articlesApi from '../api/articles.api'
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
const { getArticlesByUser } = articlesApi

const ArticlePage = () => {
    const { username, title } = useParams();
    const [article, setArticle] = useState<any>()
    const [tagsList, setTagsList] = useState([])
    useEffect(() => {
        username !== undefined && getArticlesByUser(username).then(data => {
            const filteredArticle = data.filter((article: any) => article.title === title);
            setArticle(filteredArticle[0]);
            setTagsList(filteredArticle[0].tags.split(','))
        })
    }, [])
    console.log(article, tagsList)
    return (
        <Layout title={title}>
            {article !== undefined &&
                <div className='mt-[-15px] rounded-md'>
                    {article.coverImage !== "" && <img src={article.coverImage} />}
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>{article.title}</div>
                    <div className='flex space-x-3'>
                        {tagsList.map((tag: string) => (
                            // Set a random background color for a tag
                            <div className={`px-2 py-1 rounded flex space-x-2 bg-[#e5e5e5]`}>
                                <span>#{tag}</span>
                            </div>
                        ))}
                    </div>
                    <div>{article.content}</div>
                </div>}
        </Layout>

    )
}

export default ArticlePage
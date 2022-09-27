import getArticles from '../api/articles.api'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import ArticleBlock from '../components/ArticleBlock'

const HomePage = () => {
  const [articles, setArticles] = useState<any[]>([])
  useEffect(() => {
    getArticles().then(data => {
      setArticles(data)
    })
  }, [])
  console.log('All Articles:', articles)
  return (
    <Layout title="DEV Community 👩‍💻👨‍💻">
      <div className='flex space-x-4 px-5 font-[1.2rem]'>
        <div>Latest</div>
        <div>Relevant</div>
      </div>
      <div className='flex flex-col space-y-2'>
        {articles.map(article => {
          return (
            <div key={article.id}>
              <ArticleBlock article={article}/>
            </div>
          )
        })}
      </div>

    </Layout>
  )
}

export default HomePage



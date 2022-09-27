import  getArticles  from '../api/articles.api'
import Layout from '../components/Layout'
import {useState, useEffect} from 'react'


const HomePage = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    getArticles().then(data => {
      setArticles(data)
    })
  },[])
  return (
    <Layout title="DEV Community 👩‍💻👨‍💻">
      <h1 className='text-[red]'>Welcome to Dev.to 👋</h1>
      <h1 className='text-[red]'>Welcome to Dev.to 👋</h1>
      <h1 className='text-[red]'>Welcome to Dev.to 👋</h1>
      <h1 className='text-[red]'>Welcome to Dev.to 👋</h1>
      <h1 className='text-[red]'>Welcome to Dev.to 👋</h1>
      <h1 className='text-[red]'>Welcome to Dev.to 👋</h1>
      <h1 className='text-[red]'>Welcome to Dev.to 👋</h1>
      <h1 className='text-[red]'>Welcome to Dev.to 👋</h1>
      <h1 className='text-[red]'>Welcome to Dev.to 👋</h1>
      <h1 className='text-[red]'>Welcome to Dev.to 👋</h1>
      {articles.length >0 && articles.map(article => (
        <div>
          {article.title}
        </div>
      ))}
    </Layout>
  )
}

export default HomePage


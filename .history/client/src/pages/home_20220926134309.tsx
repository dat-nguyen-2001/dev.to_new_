import { ArticleAPI } from '../api/articles.api'
import Layout from '../components/Layout'

const HomePage = () => {
  const articles = ArticleAPI;
  console.log(articles)
  
  return(
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
  </Layout>
)}

export default HomePage


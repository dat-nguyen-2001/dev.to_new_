import  getArticles  from '../api/articles.api'
import Layout from '../components/Layout'
import {useState, useEffect} from 'react'
const getAllArticles = async function () {
  const data = await getArticles();
  return data
}


const HomePage = () => {
  const [articles, setArticles] = useState()
  useEffect(() => {
    getAllArticles().then(data => {
      setArticles(data)
    })
  },[])

  return (
    <Layout title="DEV Community 👩‍💻👨‍💻">
      <p>{articles.}</p>
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
  )
}

export default HomePage



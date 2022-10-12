import { useParams } from "react-router-dom";
import getUserInfo from "../utils/getUserInfo";
import { useState, useEffect } from 'react'
import Layout from "../components/Layout";
import ArticleBlock from "../components/ArticleBlock";
import articlesApi from "../api/articles.api";
function User() {

    // Get the user info
    const {getArticlesByUser} = articlesApi
    let { username } = useParams();
    const [user, setUser] = useState<any>(null);
    const [profile_pic, setProfilePic] = useState<string>('');
    const [articles, setArticles] = useState<any[]>([])
    useEffect(() => {
        username !== undefined && getUserInfo(username).then(data => {
            const userFound = data.data[0]
            setUser(userFound);
            setProfilePic(userFound.profile_pic);
            getArticlesByUser(userFound.username).then(res => setArticles(res))
        })
    }, [])

    console.log(user)


    return (
        <Layout title={`${username} - DEV Community 👩‍💻👨‍💻`}>
            <div className="bg-white rounded-lg py-10">
                <div className="mx-auto w-[40%] text-center flex flex-col space-y-4">
                    <img className="mx-auto rounded-full w-20 h-20" src={profile_pic !== '' && profile_pic !== undefined ? profile_pic : 'https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png'} />
                    <h3 className="font-bold text-xl">{username}</h3>
                </div>
            </div>
            <div className='flex flex-col space-y-2 w-[]'>
            {articles.map(article => {
              return (
                <div key={article.id}>
                  <ArticleBlock article={article} />
                </div>
              )
            })}
          </div>
        </Layout>
    );
}

export default User
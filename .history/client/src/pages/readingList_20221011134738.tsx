import Layout from '../components/Layout';
import usersApi from '../api/users.api';
import { useRecoilValue } from 'recoil';
import { usernameState } from '../atoms/usernameAtom';
import {useEffect, useState} from 'react'
const {getUserInfo} = usersApi


const [reading_list, setReadingList] = useState()
useEffect(() => {
    const curUsername = useRecoilValue(usernameState)
    getUserInfo(curUsername).then(data => console.log(data))
}, [])

const ReadingList = () => (
  <Layout title="Reading List - DEV Community 👩‍💻👨‍💻">
    <div className="">
      
    </div>
  </Layout>
)

export default ReadingList

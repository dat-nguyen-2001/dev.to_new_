import Layout from '../components/Layout';
import usersApi from '../api/users.api';
import { useRecoilValue } from 'recoil';
import { usernameState } from '../atoms/usernameAtom';
import {useEffect} from 'react'
const {getUserInfo} = usersApi
const curUsername = useRecoilValue(usernameState)


const reading_list, setReadingList = useSate
useEffect(() => {

}, [])

const ReadingList = () => (
  <Layout title="Reading List - DEV Community 👩‍💻👨‍💻">
    <div className="">
      
    </div>
  </Layout>
)

export default ReadingList

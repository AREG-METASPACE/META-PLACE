import Head from 'next/head'
import {MainWrapper} from "../components/MainWrapper/MainWrapper";
import {UserInfo} from "../blocks/UserInfo/UserInfo";
import NFTList from "../blocks/NFTList/NFTList";


const Home = () => {
  return (
      <div>
        <Head>
          <title>Main</title>
          <meta name="description" content="Generated by create next app"/>
        </Head>
        <MainWrapper shadowOpacity='0.5'>
            <UserInfo />
            <NFTList />
        </MainWrapper>
      </div>
  )
}

export default Home

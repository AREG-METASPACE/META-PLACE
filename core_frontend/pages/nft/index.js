import styled from 'styled-components'
import Head from "next/head";
import {MainWrapper} from "../../components/MainWrapper/MainWrapper";
import NftBlockInfo from "../../blocks/NftBlockInfo/NftBlockInfo";

const Nft = () => {
    return(
        <div>
            <Head>
                <title>Main</title>
                <meta name="description" content="Generated by create next app"/>
            </Head>
            <MainWrapper shadowOpacity={0.6}>
                <NftBlockInfo />
            </MainWrapper>
        </div>
    )
}

export default Nft

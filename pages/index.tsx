import type { NextPage } from 'next'
import {HeaderMenu} from "../src/components/HeaderMenu";
import {MainInfo} from "../src/components/MainInfo";
import {FinancialModel} from "../src/components/FinancialModel";

const Home: NextPage = () => {
    return (
        <>
            <HeaderMenu/>
            <MainInfo/>
            <FinancialModel/>
        </>
    )
}

export default Home

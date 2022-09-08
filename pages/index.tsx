import type { NextPage } from 'next'
import {HeaderMenu} from "../src/components/HeaderMenu";
import {MainInfo} from "../src/components/MainInfo";
import {FinancialModel} from "../src/components/FinancialModel";
import {OpenedToQuestions} from "../src/components/OpenedToQuestions";

const Home: NextPage = () => {
    return (
        <>
            <HeaderMenu/>
            <MainInfo/>
            <FinancialModel/>
            <OpenedToQuestions/>
        </>
    )
}

export default Home

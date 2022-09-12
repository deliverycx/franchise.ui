import type { NextPage } from 'next'
import {HeaderMenu} from "../src/components/HeaderMenu";
import {MainInfo} from "../src/components/MainInfo";
import {FinancialModel} from "../src/components/FinancialModel";
import {OpenedToQuestions} from "../src/components/OpenedToQuestions";
import {BusinessFor} from "../src/components/BusinessFor";
import FixedAsk from '../src/components/fixed-ask';
import FranchiseTerms from "../src/components/FranchiseTerms";

const Home: NextPage = () => {
    return (
        <>
            <HeaderMenu/>
            <MainInfo/>
            <FranchiseTerms/>
            <FinancialModel/>
            <OpenedToQuestions/>
            <BusinessFor/>
            <FixedAsk />
        </>
    )
}

export default Home

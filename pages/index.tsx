import type { NextPage } from 'next'
import {HeaderMenu} from "../src/components/HeaderMenu";
import {MainInfo} from "../src/components/MainInfo";
import {FinancialModel} from "../src/components/FinancialModel";
import {OpenedToQuestions} from "../src/components/OpenedToQuestions";
import {BusinessFor} from "../src/components/BusinessFor";
import FixedAsk from '../src/components/fixed-ask';
import FranchiseTerms from "../src/components/FranchiseTerms";
import OurHelp from "../src/components/OurHelp";
import AboutCompany from "../src/components/AboutCompany";
import Team from "../src/components/Team";
import FAQ from "../src/components/FAQ";
import YourQuestion from "../src/components/YourQuestion";

const Home: NextPage = () => {
    return (
        <>
            <HeaderMenu/>
            <MainInfo/>
            <FranchiseTerms/>
            <FinancialModel/>
            <OpenedToQuestions/>
            <BusinessFor/>
            <OurHelp/>
            <AboutCompany/>
            <Team/>
            <FAQ/>
            <YourQuestion/>
            <FixedAsk />
        </>
    )
}

export default Home

import React from 'react';

const FranchiseTerms = () => {
    return (
        <section className="franch-terms container">
            <h2 className="franch-terms__title">Условия франшизы</h2>
            <h5 className="franch-terms__title--sub">Усредненная для города с населением 300 тыс. в будний день</h5>
            <div className="franch-terms__blocks">
                <div className="franch-terms__blocks-up">
                    <div className="franch-terms__blocks-up--contribution">
                        <div className="money">750 000 ₽</div>
                        <div className="line"/>
                        <div className="sub-text">Паушальный взнос</div>
                    </div>
                    <img src="/assets/img/dobroe.svg" className="franch-terms__blocks-up--picture" alt="Point picture"/>
                </div>
                <div className="franch-terms__blocks-down">
                    <div className="franch-terms__blocks-down--invest">
                        <div className="money">7 147 000 ₽</div>
                        <div className="line"/>
                        <div className="sub-text">Паушальный взнос</div>
                    </div>
                    <div className="franch-terms__blocks-down--payback">
                        <div className="duration">16,4 месяцев</div>
                        <div className="line"/>
                        <div className="sub-text">Окупаемость</div>
                    </div>
                    <div className="franch-terms__blocks-down--royalty">
                        <div className="percent">4%</div>
                        <div className="line"/>
                        <div className="sub-text">Роялти</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FranchiseTerms;

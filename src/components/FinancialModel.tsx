import React from 'react';

export function FinancialModel() {

    // const infoBlocks = [
    //     {
    //         id: 1,
    //         iconUrl:,
    //         primaryTxt:,
    //         secondaryTxt:
    //     }
    // ]

    return (
        <section className="financial-model container">
            <div className="financial-model__title">
                <h2 className="financial-model__title--main">Финансовая модель</h2>
                <h5 className="financial-model__title--sub">Усредненная для города с населением 300 тыс. в будний день</h5>
            </div>
            <div className="financial-model__blocks">
                <div className="financial-model__info-blocks">
                    <div className="info-block">
                        <img src="/assets/icons/contribution.svg" className="icon" alt="icon"/>
                    </div>
                </div>
                <div className="financial-model__moving-block">

                </div>
            </div>
        </section>
    )
}

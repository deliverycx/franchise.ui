import React from 'react';

export function FinancialModel() {

    const leftInfoBlocks = [
        {
            id: 1,
            iconUrl: "/assets/icons/money-blue-circle.svg",
            title: '2 700 000 ₽',
            sub: 'Выручка в месяц'
        },
        {
            id: 2,
            iconUrl: "/assets/icons/paper-grey-circle.svg",
            title: '90 000 ₽',
            sub: 'Выручка в день'
        },
        {
            id: 3,
            iconUrl: "/assets/icons/paperL-grey-circle.svg",
            title: '100',
            title_sub: '/ день',
            sub: 'Количество чеков'
        },
    ]

    const rightInfoBlocks = [
        {
            id: 1,
            iconUrl: "/assets/icons/lamp-grey-circle.svg",
            title: '16,8%',
            sub: 'Прибыль в месяц'
        },

        {
            id: 2,
            iconUrl: "/assets/icons/money-grey-circle.svg",
            title: '900 ₽',
            sub: 'Средний чек'
        },

        {
            id: 3,
            iconUrl: "/assets/icons/paperL-grey-circle.svg",
            title: '3 000',
            title_sub: '/ месяц',
            sub: 'Количество чеков'
        },
    ]

    return (
        <section className="financial-model container">
            <div className="financial-model__title">
                <h2 className="financial-model__title--main">Финансовая модель</h2>
                <h5 className="financial-model__title--sub">Усредненная для города с населением 300 тыс. в будний день</h5>
            </div>
            <div className="financial-model__blocks">
                <div className="financial-model__info-blocks">
                    <div className="financial-model__info-blocks--left">
                        {
                            leftInfoBlocks.map(el => {
                                return <div className="info-block" key={el.id}>
                                    <img src={el.iconUrl} className="icon" alt="icon"/>
                                    <div className="info">
                                        <div className="title">{el.title} <sup className="title-sub">{el.title_sub}</sup></div>
                                        <div className="sub">{el.sub}</div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="financial-model__info-blocks--right">
                        {
                            rightInfoBlocks.map(el => {
                                return <div className="info-block" key={el.id}>
                                    <img src={el.iconUrl} className="icon" alt="icon"/>
                                    <div className="info">
                                        <div className="title">{el.title} <sup className="title-sub">{el.title_sub}</sup></div>
                                        <div className="sub">{el.sub}</div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="financial-model__right-block">
                    <div className="top-text">Выберите <br/>
                        <b >лучшее решение </b><br/>
                        для ваших инвестиций</div>
                    <div className="bottom-block">
                        <div className="income">454 000 ₽</div>
                        <div className="sub">Прибыль в месяц</div>
                        <a href="#" className="main-btn">Получить бизнес-план</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

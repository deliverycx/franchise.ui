import React from 'react';

export function MainInfo() {

    const rewards = [
        {
            id: 1,
            reward: 'ТОП 10',
            description1: 'Лучших франшиз',
            description2: 'России 2021'
        },
        {
            id: 2,
            reward: 'BYUBRAND 2021',
            description1: 'Участники выставки',
            description2: 'франшиз'
        },
        {
            id: 3,
            reward: 'BYUBRAND 2022',
            description1: 'Участники выставки',
            description2: 'франшиз'
        }
    ]

    return (
        <main className="main">
            <div className="container">
                <div className="main-info">
                    <h1 className="main__text-primary">Самая крупная <br/>
                        <span className="main__text-primary--highlight"><b>сетей хинкальных</b> </span>
                        <br/>в России
                    </h1>
                    <div className="main__text-secondary">
                        Станьте владельцем уютной хинкальной <br/>по франшизе с прибылю 4.5 млн рублей в год
                    </div>
                    <a href="#" className="main-btn header-btn">Получить бизнес-план</a>
                </div>
                <div className="main-picture-block">
                    <img src="/assets/img/room-header.svg" alt="Restaurant picture"/>
                    <div className="info-block">
                        <img src="/assets/icons/calendar.svg" alt="calendar icon"/>
                        <div>
                            <div className="info-block--title">54 дня</div>
                            <div className="info-block--secondary">Открытие хинкальной</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__rewards container">
                { rewards.map(el => {
                    return <div key={el.id} className="main__rewards--reward">
                        <span className="wreath"/>
                        <div className="reward-descr">
                            <div className="title">{el.reward}</div>
                            <div className="secondary">{el.description1} <br/> {el.description2}</div>
                        </div>
                    </div>
                })
                }
            </div>
            <div className="main__video">
                <iframe
                    id="existing-iframe-example"
                    width="100%" height="900"
                    src="https://www.youtube.com/embed/fmsiLPKVYVY?autoplay=1&mute=1&enablejsapi=1"
                    frameBorder="0"
                ></iframe>
            </div>
        </main>
    );
}


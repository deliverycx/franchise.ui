import React from 'react';

export function OpenedToQuestions() {
    return (
        <section className="opened-question container">
            <div className="opened-question__info">
                <div className="opened-question__info--main">
                    Мы открыты к вопросам <br/>также, как наша кухня <br/>открыта для гостей
                </div>
                <div className="opened-question__info--sub">Хотите узнать больше? <br/>
                    Получите бесплатную консультацию
                </div>
                <a href="#" className="opened-question__info--btn main-btn">Получить бизнес-план</a>
            </div>
            <img src="/assets/img/questions.svg" className="opened-question__picture" alt="Questions picture"/>
        </section>
    )
}

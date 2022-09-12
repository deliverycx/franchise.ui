import React from 'react';

const OurHelp = () => {
    return (
        <section className="our-help container">
            <img src="/assets/img/help.svg" alt="help picture"/>
            <div className="our-help__description">
                <h4 className="our-help__description--title">Действуйте! А мы <br/> поможем на каждом <br/>этапе
                    сотрудничества</h4>
                <div className="our-help__description--sub">За 7 лет работы мы наступили на все грабли <br/> ресторанного
                    бизнеса и собрали лучшие <br/> практики в готовые руководства.
                </div>
                <div className="our-help__description--sub">Подробно расписали, как мы будем <br/>работать до и после
                    запуска.
                </div>
                <a href="#" className="main-btn">Задать вопросы</a>
            </div>
        </section>
    );
};

export default OurHelp;

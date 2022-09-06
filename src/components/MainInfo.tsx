import React from 'react';

export function MainInfo() {

    return (
        <main className="main">
            <div className="container">
                <div className="main__text-primary">Самая крупная <br/>
                    <span className="main__text-primary--highlight">сетей хинкальных </span>
                    <br/>в России
                </div>
                <div className="main__text-secondary">
                    Станьте владельцем уютной хинкальной <br/>по франшизе с прибылю 4.5 млн рублей в год
                </div>
                <a href="#" className="main-btn">Получить бизнес-план</a>
                <div className="main__rewards"></div>
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


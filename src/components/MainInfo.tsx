import React from 'react';
import Link from "next/link";

export function MainInfo() {
    return (
        <main className="main container">
            <div className="main__text-primary">Самая крупная <br/>
                <span className="main__text-primary--highlight">сетей хинкальных </span>
                <br/>в России
            </div>
            <div className="main__text-secondary">
                Станьте владельцем уютной хинкальной <br/>по франшизе с прибылю 4.5 млн рублей в год
            </div>
            <a href="#" className="main-btn">Получить бизнес-план</a>
            <div className="main__rewards"></div>
            <div className="main__video">
                <div
                    className="col-6 characteristic_h1  section-btn d-flex justify-content-md-end align-self-center">
                    <Link
                        href="https://www.youtube.com/channel/fmsiLPKVYVY">
                        <a className="btn" target="_blank"> Смотреть всё</a>
                    </Link>
                </div>
            </div>
        </main>
    );
}


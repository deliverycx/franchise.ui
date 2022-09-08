import React from 'react';

export function BusinessFor() {

    return (
        <section className="business-for container">
            <div className="u-block">
                <div className="text-prim">Для кого <br/>этот бизнес</div>
                <div className="text-sec">Бизнес доступен для всех с <br/>горящими глазами, светлой головой <br/>
                    и полной вовлеченностью в проект.
                </div>
                <div className="text-sec second">Наши партнеры пришли из разных <br/>сфер, но чаще всего это:</div>
            </div>
            <div className="picture-block u-block"/>
            <div className="solid-block u-block">
                <img src="/assets/icons/white-money.svg" className="icon" alt="money icon"/>
                <div className="block-text">
                    <h3 className="solid-block--heading">Системные франчайзи</h3>
                    <div className="solid-block--secondary">У вас не один успешный бизнес <br/>по франшизе, и вы хотите
                        открыть <br/>
                        еще один в сфере общепита
                    </div>
                </div>
            </div>
            <div className="solid-block u-block">
                <img src="/assets/icons/white-key.svg" className="icon" alt="money icon"/>
                <div className="block-text">
                    <h3 className="solid-block--heading">С собственным <br/>заведением</h3>
                    <div className="solid-block--secondary">У вас есть работающее кафе или <br/> небольшой ресторан, и
                        вы решили <br/> его преобразовать
                    </div>
                </div>
            </div>
            <div className="solid-block u-block">
                <img src="/assets/icons/white-lamp.svg" className="icon-lamp" alt="money icon"/>
                <div className="block-text">
                    <h3 className="solid-block--heading">Прирожденные <br/> управленцы</h3>
                    <div className="solid-block--secondary">Вы всегда работали на управляющих <br/>
                        должностях, но хотите заняться собственным <br/>бизнесом с минимизацией рисков
                    </div>
                </div>
            </div>
            <div className="request-block u-block">
                <div className="block-text">
                    <h3 className="solid-block--heading">Если вы узнали себя <br/>в одном из пунктов</h3>
                </div>
                <a href="#" className="main-btn">Оставить заявку</a>
            </div>
        </section>
    );
}

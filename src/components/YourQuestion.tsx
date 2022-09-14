import React from 'react';
import AnimatedInput from "../core/AnimatedInput/AnimatedInput";

const YourQuestion = () => {
    return (
        <div className="your-questions__container">
            <section className="your-questions container">
                <div className="your-questions__info">
                    <h3 className="your-questions__info--title">У вас еще остались хинкальные вопросы?</h3>
                    <div className="your-questions__info--sub">Заполните форму и в течении 30 минут (в будний день)
                        вам позвонит наш менеджер Георгий.</div>
                </div>
                <div className="your-questions__form">
                    <AnimatedInput className="your-questions__form--name" inputType="text" inputId="name" content="Имя" />
                    <AnimatedInput className="your-questions__form--phone" inputType="phone" inputId="phone" content="Телефон" />
                    <div className="form-checkbox-container">
                        <input type="checkbox" id="check" className="check" />
                        <label htmlFor="check" className="checkbox">
                            <div className="check-mark"/>
                        </label>
                        <label htmlFor="check" className="label-check">Даю согласие на обработку
                            <a href="/private.pdf" target="_blank" >Персональных данных</a></label>
                    </div>
                    <a href="#" className="main-btn">Узнать ответы</a>
                </div>
            </section>
        </div>

    );
};

export default YourQuestion;

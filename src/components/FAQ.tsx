import React from 'react';

const Faq = () => {
    const questionObjects = [
        {
            id: 1,
            question: 'На какой срок заключается договор на работу по франшизе?',
            answer: '3 года',
            sub1: 'написать комментарий ',
            sub2: ' по этой теме'
        },
        {
            id: 2,
            question: 'Сколько нужно сотрудников для комфортной работы?',
            answer: '9 человек',
            sub1: 'в смене, а всего до 15',
            sub2: ' человек'
        },
        {
            id: 3,
            question: 'Сколько посадочных мест должно быть, чтобы окупать такую цену \n' +
                'на хинкали?',
            answer: '14-16 столов',
            sub1: 'написать комментарий',
            sub2: ' по этой теме'
        },
        {
            id: 4,
            question: 'Вы закупаете импортное сырье?',
            answer: 'Нет',
            sub1: 'Мы работаем с продуктом, который делается ',
            sub2: 'в РФ и не связан с колебаниями курсов валют'
        },
        {
            id: 5,
            question: 'Есть ли у вас договор коммерческой концессии?',
            answer: 'Да',
            sub1: 'написать комментарий',
            sub2: 'по этой теме'
        },
        {
            id: 6,
            question: 'Вы проводите обучение? Где оно проходит?',
            answer: 'Да',
            sub1: 'Персональное обучение в хинкальной - в роли ',
            sub2: 'повара, официанта, менеджера и управляющего.'
        },
    ]

    return (
        <section className="faq container">
            <div className="faq__title">FAQ</div>
            <div className="faq__questions-blocks">
                {
                    questionObjects.map(el => {
                        return <div key={el.id} className="faq__questions-blocks--block">
                            <div className="question">{el.question}</div>
                            <div className="answer-sub">
                                <div className="answer">{el.answer}</div>
                                <div className="sub-text">{el.sub1} <br/> {el.sub2}</div>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    );
};

export default Faq;

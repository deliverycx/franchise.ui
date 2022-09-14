import React from 'react';

type Props = {
    className: string,
    inputType: string,
    content: string,
    inputId: string
}

const AnimatedInput = (props: Props) => {
    const {className, inputType, content, inputId} = props;

    return (
        <form action="" className={`${className} form`}>
            <input type={inputType} name={inputId} id={inputId} className="form__input" placeholder={content} autoComplete='false'/>
        </form>
    );
};

export default AnimatedInput;

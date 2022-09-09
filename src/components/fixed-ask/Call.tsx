import InputMask from "react-input-mask";
import { useState} from "react";
// import cloneDeep from "lodash/cloneDeep";
import {ModalWrap} from "../../core/ModalWrap";

const initialFieldsState = {
    phone: {
        rus_alias: "Телефон",
        value: ''
    },
}
export function Call(){
    const [display, setDisplay] = useState("none");
    const [errors, setErrors] = useState({});
    // const [fields, setField] = useState(cloneDeep(initialFieldsState));
    const [isSend, setIsSend] = useState(false);
    // const dispatch = useDispatch();
    const toggle = ()=>{
        setDisplay(
            display === "none" ? "block" : "none"
        );
    }

    // const inputHandler = (e)=>{
    //     const value = e.target.value;
    //
    //     setField({
    //         ...fields,
    //         ["phone"]: {
    //             rus_alias: "Телефон",
    //             value
    //         }
    //     });
    // }

    // const submitHandler = ()=>{
    //     if(isSend === true) return;
    //     setIsSend(true);
    //
    //     axios.post("/form/call", {
    //         content: fields,
    //         theme: "Перезвонить с сайта 'Франшиза Хинкалыч'"
    //     })
    //     .then(({data})=>{
    //         setIsSend(false);
    //
    //
    //         if(data.status === 409){
    //             setErrors(data.errors)
    //
    //             setTimeout(() => {
    //                 setErrors({});
    //             }, 3000);
    //
    //             return;
    //         }
    //         setField(cloneDeep(initialFieldsState));
    //         setDisplay("none");
    //         dispatch(popupSuccessAction());
    //     })
    // }
    return (
        <div className="fixed_ask__wrap">
            <ModalWrap display={display} close={()=>setDisplay("none")}>
                <h4 className="heading">
                Оставьте свой номер телефона и <span className="text_select-red">мы с вами свяжемся!</span>
                </h4>
                <>
                    {/*<InputMask mask="+7 (999) 999 99 99" value={fields.phone.value} onChange={inputHandler}>*/}
                    {/*    {(inputProps)=><input type="text"*/}
                    {/*            placeholder="+7 (000) 000 00 00"*/}
                    {/*            className="input text col-12"*/}
                    {/*        />*/}
                    {/*    }*/}
                    {/*</InputMask>*/}
                    <div className="form_error">
                        {/*{errors.phone ? errors.phone : ''}*/}
                    </div>
                </>
                <div className="modal_wrap__memo">Отдел развития франшизы: пн-пт с 9:00 - 18:00 (московское время)</div>
                <div className="fixed_ask__call-self">или Вы можете позвонить нам сами</div>
                <a href="//wa.me/79780625281?lang=ru" target="_blank" rel="noreferer" className="fixed_ask__contact text_select-red">+7 978 062 52 81</a>
                <button onClick={() => console.log('submitHandler')} className="mx-auto button">ПОЗВОНИТЕ МНЕ</button>
            </ModalWrap>

            <div className="fixed_ask__circle call" onClick={toggle}></div>
        </div>
    )
}

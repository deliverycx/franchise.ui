import {useState} from "react";
import {Input} from "../../core/Input";
import {Textarea} from "../../core/TextArea";
import {ModalWrap} from "../../core/ModalWrap";

const initialFieldsState = {
    name: {
        rus_alias: "Имя",
        value: ''
    },
    email: {
        rus_alias: "Е-маил",
        value: ''
    },
    question: {
        rus_alias: "Вопрос",
        value: ''
    },
};

export function Ask(){
    const [display, setDisplay] = useState("none");
    // const [fields, setField] = useState(cloneDeep(initialFieldsState));
    const [errors, setErrors] = useState({});
    const [checked, setChecked] = useState(false);
    const [isSend, setIsSend] = useState(false);

    // const dispatch = useDispatch();

    const toggle = ()=>{
        setDisplay(
            display === "none" ? "block" : "none"
        );
    }

    // const inputHandler = (e)=>{
    //     const field = e.target.dataset.link;
    //     const value = e.target.value;
    //
    //     const newFields = { ...fields };
    //
    //     newFields[field].value = value;
    //     setField(newFields);
    // }
    // const checkedHandler = ()=>{
    //     setChecked(checked ? false : true);
    // }
    // const sendForm = ()=>{
    //     if(!checked || isSend) return null;
    //     setIsSend(true);
    //
    //     axios.post("/form/ask", {
    //         content: fields,
    //         theme: "Вопрос с сайта 'Франшиза Хинкалыч'"
    //     })
    //         .then(({data})=>{
    //             setIsSend(false);
    //
    //             if(data.status === 409){
    //                 setErrors(data.errors)
    //
    //                 setTimeout(() => {
    //                     setErrors({});
    //                 }, 3000);
    //
    //                 return;
    //             }
    //             setChecked(false);
    //             setField(cloneDeep(initialFieldsState));
    //             setDisplay("none");
    //             dispatch(popupSuccessAction());
    //         })
    //         .catch(e=>console.log(e));
    // }

    return (
        <div className="fixed_ask__wrap">
            <ModalWrap display={display} close={()=>setDisplay("none")}>
                <h4 className="heading">
                    Задать <span className="text_select-red">вопрос</span>
                </h4>

                <Input placeholder="Ваше Имя" linkAttr="name" setter={undefined} value={undefined} error={undefined} />
                <Input placeholder="Ваш Email" linkAttr="email" setter={undefined} value={undefined} error={undefined} />
                <Textarea placeholder="Ваш вопрос" error={errors["question"]} linkAttr="question" setter={undefined} value={undefined} />
                <div className="modal_wrap__memo">Отдел развития франшизы: пн-пт с 9:00 - 18:00 (московское время)</div>
                <a href="mailto:cx.franch@gmail.com" target="_blank" rel="noreferer" className="fixed_ask__contact text_select-red">
                    cx.franch@gmail.com
                </a>
                <label className="checkbox_label">
                    <input type="checkbox" checked={checked} />
                    <span className="custom_checkbox"></span>

                    <a rel="norefeerer" target="_blank" href="/policy.html" className="policy">
                        Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных,
                        в соответствии с Федеральным законом
                        от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на обработку персональных данных
                    </a>
                </label>
                <button onClick={() => console.log('Sent')} className="button mx-auto">Отправить</button>
            </ModalWrap>
            <div className="fixed_ask__circle ask" onClick={toggle}></div>
        </div>
    )
}


export function Input({placeholder, setter, linkAttr, value, error}){
    return (
        <>
            <input type="text"
                   placeholder={placeholder}
                   onChange={setter}
                   data-link={linkAttr}
                   value={value}
                   className={error ? "input text col-12 error_input" : "input text col-12"}
            />
            <div className="form_error">
                {
                    error ? error : ''
                }
            </div>
        </>
    )
}

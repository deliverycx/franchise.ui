export function Textarea({placeholder, setter, linkAttr, value}){
    return (
        <textarea className="input col-12"
                  placeholder={placeholder}
                  value={value}
                  onChange={setter}
                  data-link={linkAttr}
        ></textarea>
    )
}

export function ModalWrap({ children, close, display }) {
    return (
        <div className="modal_wrap" style={{display}}>
            <div className="close" onClick={close}></div>
            {children}
        </div>
    );
}

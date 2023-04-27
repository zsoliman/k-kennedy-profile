const Modal = ({ art, isHidden }) => {
    return (
        <div className={`${isHidden ? "hidden" : ""}`}>
            <div className="HeaderBackground">
                <div className="modal">
                    <img src={art} />
                </div>
            </div>
        </div >
    )
}

export default Modal;
const Modal = ({ art, isHidden, displayModal }) => {
    return (
        <div className={`${isHidden ? "hidden" : ""}`}>
            <div
                className="modalBackground"
                onClick={displayModal}>
                <div className="modal">

                    <img className="modalImg" src={art} />
                    {console.log("art", art)}

                </div>
            </div>
        </div >
    )
}

export default Modal;
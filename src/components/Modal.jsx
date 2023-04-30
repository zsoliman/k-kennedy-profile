const Modal = ({ art, isHidden, displayModal }) => {
    return (
        <div className={`${isHidden ? "hidden" : ""}`}>
            <div
                className="modalBackground"
                onClick={displayModal}>
                <div className="modal">

                    <img src={art} />
                    {/* {console.log("art", art)} */}

                    <div className="ImagePlaceholder">
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Modal;
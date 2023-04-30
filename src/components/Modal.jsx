const Modal = ({ art, isHidden, displayModal }) => {
    return (
        <div className={`${isHidden ? "hidden" : ""}`}>
            <div className="modalBackground">
                <div className="modal">
                    {/* <img src={art} /> */}
                    {/* {console.log("art", art)} */}
                    <button onClick={displayModal}>x</button>
                    <div className="ImagePlaceholder"></div>
                </div>
            </div>
        </div >
    )
}

export default Modal;
const Modal = ({ driveArt, isHidden, displayModal }) => {
    return (
        <div className={`${isHidden ? "hidden" : ""}`}>
            <div
                className="modalBackground"
                onClick={displayModal}>
                <div className="modal">

                    {/* <img className="modalImg" src={art} />
                    {console.log("art", art)} */}

                    {driveArt.map((art, index) =>
                        <img
                            className="ImageThumbnail"
                            src={art}
                            key={index}
                            onClick={displayModal}
                        />

                    )}

                </div>
            </div>
        </div >
    )
}

export default Modal;
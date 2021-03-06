import React from "react";

const ImagePopup = ({ card, isOpen, onClose }) => {
    const handleOverlayClose = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <section className={`${isOpen ? `popup popup_type_img popup_opened` : `popup popup_type_img`}`}
            onMouseUp={handleOverlayClose}>
            <div className="popup__img-container">
                <button className="popup__close" type="button" onClick={onClose} />
                <figure className="popup__figure">
                    <img className="popup__image" src={card?.link} alt="" />
                    <figcaption className="popup__caption">{card?.name}</figcaption>
                </figure>
            </div>
        </section>
    );
}

export default ImagePopup;
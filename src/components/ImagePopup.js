import React from "react";

function ImagePopup({ card, onClose }) {
    return (
        <section className={card ? "popup popup_type_img popup_opened" : "popup popup_type_img"}>
            <div className="popup__img-container">
                <button className="popup__close" type="button" onClick={onClose} />
                <figure className="popup__figure">
                    <img className="popup__image" src={card.link} alt={card.name} />
                    <figcaption className="popup__caption">{card.name}</figcaption>
                </figure>
            </div>
        </section>
    );
}

export default ImagePopup;
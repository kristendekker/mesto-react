import React from "react";

function PopupWithForm({ name, isOpen, onClose, title, children }) {
    return (
        <section className={`${isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`}`}>
            <div className="popup__container">
                <button className="popup__close" type="button" onClick={onClose} />
                <h2 className="popup__title">{title}</h2>
                <form className={`popup__container_type_${name}`} action="#" name={`${name}`} noValidate>
                    {children}
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;
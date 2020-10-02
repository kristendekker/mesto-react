import React from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace, isLoading }) => {
    const nameInputRef = React.useRef(null);
    const linkInputRef = React.useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddPlace({
            name: nameInputRef.current.value,
            link: linkInputRef.current.value
        })
    }

    return (
        <PopupWithForm title={'Новое место'} name={'add'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <label className="popup__control">
                <input ref={nameInputRef} className="popup__input popup__input_type_name" type="text" name="name"
                    placeholder="Название" minLength="1" maxLength="30"
                    pattern="^[A-Za-zА-Яа-яЁё\s\D]+$" required />
                <span className="popup__error" />
            </label>
            <label className="popup__control">
                <input ref={linkInputRef} className="popup__input popup__input_type_job" type="url" name="link"
                    placeholder="Ссылка на картинку" required />
                <span className="popup__error" />
            </label>
            <input className="popup__button popup__button_type_save" type="submit" value={`${isLoading ? `Сохранение...` : `Сохранить`}`}
                name="submit" />
        </PopupWithForm>
    )
}

export default AddPlacePopup;
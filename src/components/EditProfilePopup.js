import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser, isLoading }) => {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    const handleInputNameChange = (event) => {
        setName(event.target.value);
    };

    const handleInputAboutChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onUpdateUser({
            name,
            about: description,
        });
    };

    React.useEffect(() => {
        setName(currentUser.name || '');
        setDescription(currentUser.about || '');
    }, [currentUser]);

    return (
        <PopupWithForm title={'Редактировать профиль'} name={'redact'} isOpen={isOpen} onClose={onClose}
            onSubmit={handleSubmit}>
                <label className="popup__control">
                    <input className="popup__input popup__input_type_name" type="text" name="name" value={name}
                        onChange={handleInputNameChange} placeholder="Имя" minLength="2" maxLength="20"
                        pattern="^[A-Za-zА-Яа-яЁё\s\D]+$" required />
                    <span className="popup__error" />
                </label>
                <label className="popup__control">
                    <input className="popup__input popup__input_type_job" type="text" name="about" value={description}
                        onChange={handleInputAboutChange} placeholder="Занятие" minLength="2" maxLength="200"
                        pattern="^[A-Za-zА-Яа-яЁё\s\D]+$" required />
                    <span className="popup__error" />
                </label>
            <input className="popup__button popup__button_type_save" type="submit" value={`${isLoading ? `Сохранение...` : `Сохранить`}`}
                name="submit" />
        </PopupWithForm>
    )
}

export default EditProfilePopup;
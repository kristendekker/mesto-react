import React from "react";
import PopupWithForm from "./PopupWithForm";


const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar, isLoading }) => {
    const avatarInputRef = React.useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        onUpdateAvatar({
            avatar: avatarInputRef.current.value,
        });
    }

    return (
        <PopupWithForm title={'Обновить аватар'} name={'avatar'} isOpen={isOpen} onClose={onClose}
            onSubmit={handleSubmit}>
            <div className="popup_type_avatar">
                <label className="popup__control">
                    <input ref={avatarInputRef}
                        className={"popup__input popup__input_type_avatar"}
                        type="url"
                        name="avatar"
                        placeholder="Ссылка на картинку"
                        required />
                    <span className={"popup__error"} />
                </label>
            </div>
            <input
                className={"popup__button popup__button_type_save"}
                type="submit"
                value={`${isLoading ? `Сохранение...` : `Сохранить`}`}
                name="submit" />
        </PopupWithForm>
    )
}

export default EditAvatarPopup;
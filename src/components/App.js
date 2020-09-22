import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);

    const handleEditAvatarClick = () => {
        setEditAvatarPopupOpen(true);
    }

    const handleEditProfileClick = () => {
        setEditProfilePopupOpen(true);
    }

    const handleAddPlaceClick = () => {
        setAddPlacePopupOpen(true);
    }

    const handleCardClick = (card) => {
        setSelectedCard(card);
    }

    const closeAllPopups = () => {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setSelectedCard(false);
    }
    return (
        <div className="page">
            <Header />
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick} />
            <Footer />

            <PopupWithForm title={'Редактировать профиль'} name={'edit'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <label className="popup__control">
                    <input className="popup__input popup__input_type_name" type="text" name="name" placeholder="Имя" minLength="2" maxLength="20" pattern="^[A-Za-zА-Яа-яЁё\s\D]+$" required />
                    <span className="popup__error" />
                </label>
                <label className="popup__control">
                    <input className="popup__input popup__input_type_job" type="text" name="about" placeholder="Занятие" minLength="2" maxLength="200" pattern="^[A-Za-zА-Яа-яЁё\s\D]+$" required />
                    <span className="popup__error" />
                </label>
                <input className="popup__button popup__button_type_save" type="submit" value="Сохранить" name="submit" />
            </PopupWithForm>

            <PopupWithForm title={'Новое место'} name={'add'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <label className="popup__control">
                    <input className="popup__input popup__input_type_name" type="text" name="name" placeholder="Название" minLength="1" maxLength="30" pattern="^[A-Za-zА-Яа-яЁё\s\D]+$" required />
                    <span className="popup__error" />
                </label>
                <label className="popup__control">
                    <input className="popup__input popup__input_type_job" type="url" name="link" placeholder="Ссылка на картинку" required />
                    <span className="popup__error" />
                </label>
                <input className="popup__button popup__button_type_save" type="submit" value="Сохранить" name="submit" />
            </PopupWithForm>

            <PopupWithForm title={'Вы уверены?'} name={'form-confirm'}>
                <input className="popup__button" type="submit" value="Да" name="submit" />
            </PopupWithForm>

            <PopupWithForm title={'Обновить аватар'} name={'form-avatar'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <label className="popup__control">
                    <input className="popup__input popup__input_type_avatar" type="url" name="avatar" placeholder="Ссылка на картинку" required />
                    <span className="popup__error" />
                </label>
                <input className="popup__button popup__button_type_save" type="submit" value="Сохранить" name="submit" />
            </PopupWithForm>
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
    );
}


export default App;

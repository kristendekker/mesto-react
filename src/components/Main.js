import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
    const [userName, setUserName] = React.useState(false);
    const [userDescription, setUserDescription] = React.useState(false);
    const [userAvatar, setUserAvatar] = React.useState(false);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
            .then(([userInfo, cards]) => {
                setUserName(userInfo.name);
                setUserDescription(userInfo.about);
                setUserAvatar(userInfo.avatar);

                setCards(cards);
            })
            .catch((err) => {
                console.log(`${err}`);
            });
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <button className="profile__avatar-button" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} />
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__button-edit" type="button" onClick={onEditProfile} />
                    <p className="profile__profession">{userDescription}</p>
                </div>
                <button className="profile__button-add" type="button" onClick={onAddPlace} />
            </section>
            <section className="elements">
                <ul className="elements__list">
                    {cards.map((card) => <Card key={card._id} onCardClick={onCardClick} card={card} />)}
                </ul>
            </section>
        </main>
    );
}

export default Main;
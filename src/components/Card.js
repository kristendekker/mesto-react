import React from "react";

function Card({ card, onCardClick }) {
    const handleClick = () => {
        onCardClick(card);
    }

    return (
        <li className="card">
            <button className="card__remove-button" type="button" />
            <img className="card__image" src={card.link} alt={card.name} onClick={handleClick} />
            <div className="card__description">
                <p className="card__name">{card.name}</p>
                <div className="card__like-cover">
                    <button className="card__like" type="button" />
                    <span className="card__like-counter">{card.likes.length}</span>
                </div>
            </div>
        </li>
    );
}

export default Card;
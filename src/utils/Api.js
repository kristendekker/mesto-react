class Api {
    constructor({ baseUrl, headers }) {
        //тело конструктора
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    // обработка ответа с сервера

    getUserInfo() {
        return fetch(`${this.baseUrl}users/me`, {
            headers: this.headers,
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    getCards() {
        return fetch(`${this.baseUrl}cards`, {
            headers: this.headers,
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    setUserInfo(item) {
        console.log(item);
        return fetch(`${this.baseUrl}users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: item.name,
                about: item.about
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    createCard(newCard) {
        return fetch(`${this.baseUrl}cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: newCard.name,
                link: newCard.link,
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    deleteCard(id) {
        return fetch(`${this.baseUrl}cards/${id}`, {
            method: 'DELETE',
            headers: this.headers,
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    likeCard(id) {
        return fetch(`${this.baseUrl}cards/likes/${id}`, {
            method: 'PUT',
            headers: this.headers,
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    dislikeCard(id) {
        return fetch(`${this.baseUrl}cards/likes/${id}`, {
            method: 'DELETE',
            headers: this.headers,
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    setAvatar(avatar) {
        return fetch(`${this.baseUrl}users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(avatar),
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-14/',
    headers: {
        authorization: 'ccd33dbf-109f-4270-9c16-faebaa7150cb',
        'Content-Type': 'application/json',
    }
});

export default api;
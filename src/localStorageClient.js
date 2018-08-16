export const getFromStorage = (key) => {
    return new Promise((accept) => {
        setTimeout(() => {
            accept(JSON.parse(window.localStorage.getItem(key)));
        }, 100);
    })
};

export const setInStorage = (data, key) => {
    return new Promise((accept) => {
        setTimeout(() => {
            accept(window.localStorage.setItem(key, JSON.stringify(data)))
        }, 100)
    })
};
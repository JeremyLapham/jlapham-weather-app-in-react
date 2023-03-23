export function saveToLocalStorageByCity(city) {
    let favorites = getLocalStorage();
        favorites.push(city);
    
    localStorage.setItem('Favorites', JSON.stringify(favorites));
}

export function getLocalStorage() {
    let localStorageData = localStorage.getItem('Favorites');

    if (localStorageData == null) {
        return [];
    }

    return JSON.parse(localStorageData);
}

export function removeFromLocalStorage(city) {
    let favorites = getLocalStorage();
    let cityIndex = favorites.indexOf(city);
    favorites.splice(cityIndex, 1);
    localStorage.setItem('Favorites', JSON.stringify(favorites));
}
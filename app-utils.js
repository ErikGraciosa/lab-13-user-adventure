

export function getFromLocalStorage(key) {
    const savedData = localStorage.getItem(key);
    const savedDataParsed = JSON.parse(savedData);
    return savedDataParsed;
}

// this function will not return anything
export function setInLocalStorage(key, value) {
    const dataAsString = JSON.stringify(value);    
    localStorage.setItem(key, dataAsString);    
}
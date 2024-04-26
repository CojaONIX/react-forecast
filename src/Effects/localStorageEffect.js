

export const localStorageEffects = () => ({setSelf, onSet}) => {
    const saveValues = localStorage.getItem('userData');

    if(saveValues !== null) {
        setSelf(JSON.parse(saveValues));
    }

    onSet(newValue => {
        localStorage.setItem('userData', JSON.stringify(newValue));
    })
};
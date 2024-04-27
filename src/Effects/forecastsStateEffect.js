

export const forecastsStateEffects = () => ({setSelf, onSet}) => {
    const saveValues = localStorage.getItem('forecastsData');

    if(saveValues !== null) {
        setSelf(JSON.parse(saveValues));
    }

    onSet(newValue => {
        localStorage.setItem('forecastsData', JSON.stringify(newValue));
    })
};
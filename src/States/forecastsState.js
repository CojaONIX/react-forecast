import {atom} from "recoil";
import {forecastsStateEffects} from "../Effects/forecastsStateEffect";


export const forecastsState = atom({
    key: 'forecastsState',
    default: [
        {city: 'Aleksinac', country: 'Srbija', temperature: 22},
        {city: 'Beograd', country: 'Srbija', temperature: 22},
        {city: 'London', country: 'England', temperature: 22}
    ],
    effects_UNSTABLE: [forecastsStateEffects()]
});
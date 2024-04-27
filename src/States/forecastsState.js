import {atom} from "recoil";
import {forecastsStateEffects} from "../Effects/forecastsStateEffect";


export const forecastsState = atom({
    key: 'forecastsState',
    default: [],
    effects_UNSTABLE: [forecastsStateEffects()]
});
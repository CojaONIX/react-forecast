import {atom} from "recoil";
import {localStorageEffects} from "../Effects/localStorageEffect";


export const userState = atom({
    key: 'userState',
    default: {},
    effects_UNSTABLE: [localStorageEffects()]
});
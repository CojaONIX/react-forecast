import {atom} from "recoil";
import {userStateEffect} from "../Effects/userStateEffect";


export const userState = atom({
    key: 'userState',
    default: {},
    effects_UNSTABLE: [userStateEffect()]
});
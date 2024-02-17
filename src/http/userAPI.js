import { $host } from './index';

import {
    registrationPoint,
    loginPoint,
    activatePoint,
    forgotPoint,
    restorePasswordPoint
} from './authorizationEndpoints';


export const registration = async (newUserInfo) => {
    const { data } = await $host.post(registrationPoint, newUserInfo);
    return data;
}

export const loginAPI = async (user) => {
    const { data } = await $host.post(loginPoint, user);
    if (data?.jwtToken) {
        localStorage.setItem('token', data.jwtToken);
    }
    return data;
}

export const activate = async (token) => {
    const { data } = await $host.get(activatePoint + token);
    return data;
}

export const forgotPassword = async (email) => {
    const { data } = await $host.post(forgotPoint, email);
    return data;
}

export const getRestorePassword = async (tokenRestore) => {
    const { data } = await $host.get(tokenRestore);
    return data;
}

export const restorePasswordGet = async (tokenRestorePassword) => {
    const { data } = await $host.get(restorePasswordPoint + tokenRestorePassword);
    return data;
}

export const restorePasswordPost = async (tokenRestorePassword, passwords) => {
    const { data } = await $host.post(restorePasswordPoint + tokenRestorePassword, passwords);
    return data;
}
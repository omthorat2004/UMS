import { userType } from ".";

export type loginFormType = {
    email:string;
    password:string;
}
export type error = {
    error:string;
}
export type loginFetchType = {
    user:userType,
    token:string
}
export type signFormType = {
    email:string;
    name:string;
    password:string;
    photoUrl:string;
}

export type userVerifyType = string|error

export type signReturnType = loginFetchType|error

export type loginReturnType = loginFetchType|error
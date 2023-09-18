/**
 * @fileoverview This file houses functions that can be used for
 * validation of form fields.
 *
 * Note that these functions should return a string error message
 * when they fail, and `undefined` when they pass.
 */

export const textValidator = value => {
    const stringValue = String(value).trim();
    if (!stringValue.match(/^[A-Za-z ]+$/)) {
        return {
            defaultMessage: 'Wrong Format.'
        }
    }
    else {
        return undefined;
    }
}


export const phoneNumberValidator = value => {
    const stringValue = String(value).trim();
    if (!stringValue.match(/^[9872]\d{9}$/)) {
        return {
            defaultMessage: 'Wrong Phone Number Format.'
        }
    }
    else {
        return undefined;
    }
}

export const emailValidator = value => {
    const stringValue = String(value).trim();
    const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!mailRegex.test(stringValue)) {
        return {
            defaultMessage: 'Wrong Email Format.'
        }
    }
    else {
        return undefined;
    }
}

export const commentValidator = value => {
    const stringValue = String(value).trim();
    if (!stringValue.match(/^[a-zA-Z0-9 ]{4,}$/)) {
        return {
            // defaultMessage: 'cannot add special characters'
            defaultMessage: 'Please enter valid comment.'
        }
    }
    else {
        return undefined;
    }
}
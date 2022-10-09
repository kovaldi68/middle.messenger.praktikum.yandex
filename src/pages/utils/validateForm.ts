export enum VALIDATE_TYPE {
    Login = 'login',
    Password = 'password',
    ConfirmPassword = 'confirmpassword',
    FirstName = 'firstname',
    SecondName = 'secondname',
    PhoneNumber = 'phonenumber',
    Email = 'email',
    Message = 'message',
    NickName = 'nickname'
}

type ValidateRules = {
    type: string;
    value: string;
};

const LOGIN_REG_EXP = /^[a-zA-Z][a-zA-Z0-9-_\.]{2,20}$/;
const PASSWORD_REG_EXP = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/;
const NAME_REG_EXP = /^[A-Za-zА-Яа-яЁё-]{2,20}$/;
const START_CAPITAL_REG_EXP = /^[А-ЯЁA-Z]{1}/;
const EMAIL_REG_EXP = /^[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,6}$/;
const PHONE_NUMBER_REG_EXP = /^[\d\+][\d]{9,14}\d$/;

export function validateForm(rules: ValidateRules[] ) {
    let errorMessage = ''

    for (let i = 0; i < rules.length; i++) {
        const { type, value } = rules[i];

        if (type === VALIDATE_TYPE.Login || type === VALIDATE_TYPE.NickName) {
            if (value.length === 0) {
                errorMessage = 'This field is required';
                break;
            } else if (value.length < 3 || value.length > 20) {
                errorMessage = 'Login should contain from 3 to 20 characters';
                break;
            } else if (!LOGIN_REG_EXP.test(value)) {
                errorMessage = 'The login should start with Latin letters, can contain numbers, but not consist of them, without spaces, without special characters (hyphens and underscores are allowed';
                break;
            }
        }

        if (type === VALIDATE_TYPE.Password || type === VALIDATE_TYPE.ConfirmPassword) {
            if (value.length === 0) {
                errorMessage = 'This field is required';
                break;
            } else if (value.length < 8 || value.length > 40) {
                errorMessage = 'The password should contain from 8 to 40 characters';
                break;
            } else if (!PASSWORD_REG_EXP.test(value)) {
                errorMessage = 'At least one capital letter and a number are required';
                break;
            }
        }

        if (type === VALIDATE_TYPE.FirstName || type === VALIDATE_TYPE.SecondName) {
            if (value.length === 0) {
                errorMessage = 'This field is required';
                break;
            } else if (!NAME_REG_EXP.test(value)) {
                errorMessage = 'Name should contain from 2 to 20 characters without numbers and special symbols, except "-"';
                break;
            } else if (!START_CAPITAL_REG_EXP.test(value)) {
                errorMessage = 'Name should start with capital letter';
                break;
            }
        }

        if (type === VALIDATE_TYPE.Email) {
            if (value.length === 0) {
                errorMessage = 'This field is required';
                break;
            } else if (!EMAIL_REG_EXP.test(value)) {
                errorMessage = 'Email can contain letters and numbers, special symbols like underscore, dash and dot. Example: exma-ple@exp.com';
                break;
            }
        }

        if (type === VALIDATE_TYPE.PhoneNumber) {
            if (value.length === 0) {
                errorMessage = 'This field is required';
                break;
            } else if (!PHONE_NUMBER_REG_EXP.test(value)) {
                errorMessage = 'Phone number can start with digit or "+". Should contain from 10 to 15 characters.';
                break;
            }
        }

        if (type === VALIDATE_TYPE.Message) {
            if (value.length === 0) {
                errorMessage = 'The message can not be empty =)';
                break;
            }
        }
    }

    return errorMessage;
}
import Block from 'core/Block';

import './signup.scss';
import 'components/Form/form.scss';
import { validateForm } from '../../utils/validateForm';

type RefsType = {
    [name: string]: string;
};

const REFS: RefsType = {
    email: 'emailRef',
    login: 'loginRef',
    firstname: 'firstnameRef',
    secondname: 'secondnameRef',
    phonenumber: 'phonenumberRef',
    password: 'passwordRef',
    confirmpassword: 'confirmpasswordRef'
};

export class SignupPage extends Block {
    constructor() {
        super();

        this.setProps({
            error: '',
            emailValue: '',
            loginValue: '',
            firstNameValue: '',
            secondNameValue: '',
            phoneNumberValue: '',
            passwordValue: '',
            confirmPasswordValue: '',
            onInput: (e: InputEvent) => {
                this.checkInput(e);
            },
            onFocus: (e: FocusEvent) => {
                this.checkInput(e);
            },
            onSubmit: () => {
                const loginInput = this.element?.querySelector(
                    'input[name="login"]'
                ) as HTMLInputElement;
                const passwordInput = this.element?.querySelector(
                    'input[name="password"]'
                ) as HTMLInputElement;
                const confirmPasswordInput = this.element?.querySelector(
                    'input[name="confirmpassword"]'
                ) as HTMLInputElement;
                const phoneNumber = this.element?.querySelector(
                    'input[name="phonenumber"]'
                ) as HTMLInputElement;
                const emailInput = this.element?.querySelector(
                    'input[name="email"]'
                ) as HTMLInputElement;
                const firstNameInput = this.element?.querySelector(
                    'input[name="firstname"]'
                ) as HTMLInputElement;
                const secondNameInput = this.element?.querySelector(
                    'input[name="secondname"]'
                ) as HTMLInputElement;

                const errorMessage = validateForm([
                    { type: emailInput.name, value: emailInput.value },
                    { type: loginInput.name, value: loginInput.value },
                    { type: firstNameInput.name, value: firstNameInput.value },
                    { type: secondNameInput.name, value: secondNameInput.value },
                    { type: phoneNumber.name, value: phoneNumber.value },
                    { type: passwordInput.name, value: passwordInput.value },
                    { type: confirmPasswordInput.name, value: confirmPasswordInput.value }
                ]);

                if (errorMessage) {
                    this.setProps({
                        error: errorMessage,
                        emailValue: emailInput.value,
                        loginValue: loginInput.value,
                        firstNameValue: firstNameInput.value,
                        secondNameValue: secondNameInput.value,
                        phoneNumberValue: phoneNumber.value,
                        passwordValue: passwordInput.value,
                        confirmPasswordValue: confirmPasswordInput.value
                    });
                } else {
                    this.setProps({
                        error: '',
                        emailValue: emailInput.value,
                        loginValue: loginInput.value,
                        firstNameValue: firstNameInput.value,
                        secondNameValue: secondNameInput.value,
                        phoneNumberValue: phoneNumber.value,
                        passwordValue: passwordInput.value,
                        confirmPasswordValue: confirmPasswordInput.value
                    });

                    console.log('Data:', {
                        email: this.props.emailValue,
                        login: this.props.loginValue,
                        firstName: this.props.firstNameValue,
                        secondName: this.props.secondNameValue,
                        phoneNumber: this.props.phoneNumberValue,
                        password: this.props.passwordValue,
                        confirmPassword: this.props.confirmPasswordValue
                    });
                }
            }
        });
    }

    checkInput(e: FocusEvent | InputEvent) {
        const inputEl = e.target as HTMLInputElement;
        const errorMessage = validateForm([{ type: inputEl.name, value: inputEl.value }]);
        const inputName = inputEl.name;
        const refName = REFS[inputName];
        console.log(refName);
        this.refs[refName].refs.errorRef.setProps({ errorMessage: errorMessage });
    }

    render() {
        // language=hbs
        return `
        <main class="page-main">
            <section class="page-signup signup">
                <form class="signup__form form form--signup">
                    <h2 class="form__title">Sign Up</h2>
                    {{{InputBox className="form" value="${this.props.emailValue}" id="signup-email" name="email" type="text" labelText="Email" placeholder="Email" errorMessage=error ref="emailRef" onInput=onInput onFocus=onFocus}}}
                    {{{InputBox className="form" value="${this.props.loginValue}" id="signup-login" name="login" type="text" labelText="Login" placeholder="Login" errorMessage=error ref="loginRef" onInput=onInput onFocus=onFocus}}}
                    {{{InputBox className="form" value="${this.props.firstNameValue}" id="signup-firstname" name="firstname" type="text" labelText="First name" placeholder="First name" errorMessage=error ref="firstnameRef" onInput=onInput onFocus=onFocus}}}
                    {{{InputBox className="form" value="${this.props.secondNameValue}" id="signup-secondname" name="secondname" type="text" labelText="Second name" placeholder="Second name" errorMessage=error ref="secondnameRef" onInput=onInput onFocus=onFocus}}}
                    {{{InputBox className="form" value="${this.props.phoneNumberValue}" id="signup-phonenumber" name="phonenumber" type="text" labelText="Phone number" placeholder="Phone number" errorMessage=error ref="phonenumberRef" onInput=onInput onFocus=onFocus}}}
                    {{{InputBox className="form" value="${this.props.passwordValue}" id="signup-password" name="password" type="password" labelText="Password" placeholder="Password" errorMessage=error ref="passwordRef" onInput=onInput onFocus=onFocus}}}
                    {{{InputBox className="form" value="${this.props.confirmPasswordValue}" id="signup-confirm-password" name="confirmpassword" type="password" labelText="Password" placeholder="Password(one more time)" errorMessage=error ref="confirmpasswordRef" onInput=onInput onFocus=onFocus}}}
                    {{{Button className="form" modify="primary" type="button" buttonText="Log In" onClick=onSubmit}}}
                    {{{Link className="form__link" linkText="Already have an account?"}}}
                </form>
            </section>
        </main>
    `;
    }
}

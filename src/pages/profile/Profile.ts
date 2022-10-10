import Block from 'core/Block';

import './profile.scss';
import { validateForm } from '../../utils/validateForm';

type RefsType = {
    [name: string]: string;
};

const REFS: RefsType = {
    email: 'emailRef',
    login: 'loginRef',
    nickname: 'nickNameRef',
    firstname: 'firstnameRef',
    secondname: 'secondnameRef',
    phonenumber: 'phonenumberRef',
    password: 'passwordRef',
    confirmpassword: 'confirmpasswordRef'
};

export class Profile extends Block {
    constructor() {
        super();

        this.setProps({
            error: '',
            emailValue: '',
            loginValue: '',
            nickNameValue: '',
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
            onPassSave: () => {
                const passwordInput = this.element?.querySelector(
                    'input[name="password"]'
                ) as HTMLInputElement;
                const confirmPasswordInput = this.element?.querySelector(
                    'input[name="confirmpassword"]'
                ) as HTMLInputElement;

                const errorMessage = validateForm([
                    { type: passwordInput.name, value: passwordInput.value },
                    { type: confirmPasswordInput.name, value: confirmPasswordInput.value }
                ]);

                if (errorMessage) {
                    this.setProps({
                        error: errorMessage,
                        passwordValue: passwordInput.value,
                        confirmPasswordValue: confirmPasswordInput.value
                    });
                } else {
                    this.setProps({
                        error: '',
                        passwordValue: passwordInput.value,
                        confirmPasswordValue: confirmPasswordInput.value
                    });

                    console.log('Data:', {
                        password: this.props.passwordValue,
                        confirmPassword: this.props.confirmPasswordValue
                    });
                }
            },
            onInfoSave: () => {
                const loginInput = this.element?.querySelector(
                    'input[name="login"]'
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
                const nickNameInput = this.element?.querySelector(
                    'input[name="nickname"]'
                ) as HTMLInputElement;

                const errorMessage = validateForm([
                    { type: emailInput.name, value: emailInput.value },
                    { type: loginInput.name, value: loginInput.value },
                    { type: firstNameInput.name, value: firstNameInput.value },
                    { type: secondNameInput.name, value: secondNameInput.value },
                    { type: phoneNumber.name, value: phoneNumber.value },
                    { type: nickNameInput.name, value: nickNameInput.value }
                ]);

                if (errorMessage) {
                    this.setProps({
                        error: errorMessage,
                        emailValue: emailInput.value,
                        loginValue: loginInput.value,
                        firstNameValue: firstNameInput.value,
                        secondNameValue: secondNameInput.value,
                        phoneNumberValue: phoneNumber.value,
                        nickNameValue: nickNameInput.value
                    });
                } else {
                    this.setProps({
                        error: '',
                        emailValue: emailInput.value,
                        loginValue: loginInput.value,
                        firstNameValue: firstNameInput.value,
                        secondNameValue: secondNameInput.value,
                        phoneNumberValue: phoneNumber.value,
                        nickNameValue: nickNameInput.value
                    });

                    console.log('Data:', {
                        email: this.props.emailValue,
                        login: this.props.loginValue,
                        firstName: this.props.firstNameValue,
                        secondName: this.props.secondNameValue,
                        phoneNumber: this.props.phoneNumberValue,
                        password: this.props.passwordValue,
                        confirmPassword: this.props.confirmPasswordValue,
                        nickName: this.props.nickNameValue
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
      {{{mainTitle}}}
      <section class="page-main__profile profile profile--edit">
        {{{Link className="profile__link" hrefLink="/"}}}
        <div class="profile__wrapper">
            <h2 class="profile__user-full-name">Dmitry Kovalenko</h2>
            <button class="profile__select-photo" type="button"></button>
            <ul class="profile__user-info-list">
              {{{ProfileInfoItem property="First name" name="firstname" value="${this.props.firstNameValue}" type="text" ref="firstnameRef" errorMessage=error onInput=onInput onFocus=onFocus}}}
              {{{ProfileInfoItem property="Second name" name="secondname" value="${this.props.secondNameValue}" type="text" ref="secondnameRef" errorMessage=error onInput=onInput onFocus=onFocus}}}
              {{{ProfileInfoItem property="Email" name="email" value="${this.props.emailValue}" type="text" ref="emailRef" errorMessage=error onInput=onInput onFocus=onFocus}}}
              {{{ProfileInfoItem property="Login" name="login" value="${this.props.loginValue}" type="text" ref="loginRef" errorMessage=error onInput=onInput onFocus=onFocus}}}
              {{{ProfileInfoItem property="Nickname in chat" name="nickname" value="${this.props.nickNameValue}" type="text" ref="nicknameRef" errorMessage=error onInput=onInput onFocus=onFocus}}}
              {{{ProfileInfoItem property="Phone number" name="phonenumber" value="${this.props.phoneNumberValue}" type="text" ref="phonenumberRef" errorMessage=error onInput=onInput onFocus=onFocus}}}
            </ul>
            <ul class="profile__user-password-list">
              {{{ProfileInfoItem property="Password" name="password" value="${this.props.passwordValue}" type="password" ref="passwordRef" errorMessage=error onInput=onInput onFocus=onFocus}}}
              {{{ProfileInfoItem property="Confirm password" name="confirmpassword" value="${this.props.confirmPasswordValue}" type="password" ref="confirmpasswordRef" errorMessage=error onInput=onInput onFocus=onFocus}}}
            </ul>
            <ul class="profile__user-actives">
              <li class="profile__user-active">
                  {{{Link className="profile__user-active-link profile__user-active-link--info" href="/" linkText="Change info"}}}
              </li>
              <li class="profile__user-active">
                  {{{Link className="profile__user-active-link profile__user-active-link--pass" href="/" linkText="Change password"}}}
              </li>
              <li class="profile__user-active">
                  {{{Link className="profile__user-active-link profile__user-active-link--logout" href="/" linkText="Log out"}}}
              </li>
            </ul>
            {{{Button className="profile__button--info profile" modify="primary" type="button" buttonText="Save info" onCLick=onInfoSave}}}
            {{{Button className="profile__button--password profile" modify="primary" type="button" buttonText="Save password" onClick=onPassSave}}}
          </div>
      </section>
    </main>
    `;
    }
}

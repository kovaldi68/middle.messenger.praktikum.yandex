import Block from "core/Block";

import "./login.scss";
import "components/Form/form.scss";
import { validateForm } from "pages/utils/validateForm";

export class LoginPage extends Block {
  constructor() {
    super();

    this.setProps({
      error: "",
      loginValue: "",
      passwordValue: "",
      onInput: (e: InputEvent) => {
        this.checkInput(e);
      },
      onFocus: (e: FocusEvent) => {
        this.checkInput(e);
      },
      onLogin: () => {
        const loginInput = this.element?.querySelector(
          'input[name="login"]'
        ) as HTMLInputElement;
        const passwordInput = this.element?.querySelector(
          'input[name="password"]'
        ) as HTMLInputElement;

        const errorMessage = validateForm([
          { type: loginInput.name, value: loginInput.value },
          { type: passwordInput.name, value: passwordInput.value }
        ]);

        if (errorMessage) {
          this.setProps({
            error: errorMessage,
            loginValue: loginInput.value,
            passwordValue: passwordInput.value
          });
        } else {
          this.setProps({
            error: "",
            loginValue: loginInput.value,
            passwordValue: passwordInput.value
          });

          console.log("Data:", {
            Login: this.props.loginValue,
            Password: this.props.passwordValue
          });
        }
      }
    });
  }

  checkInput(e: FocusEvent | InputEvent) {
    const inputEl = e.target as HTMLInputElement;
    const errorMessage = validateForm([{ type: inputEl.name, value: inputEl.value }]);

    if (inputEl.name === "login") {
      this.refs.loginRef.refs.errorRef.setProps({ errorMessage: errorMessage });
    }

    if (inputEl.name === "password") {
      this.refs.passwordRef.refs.errorRef.setProps({ errorMessage: errorMessage });
    }
  }

  render() {
    // language=hbs
    return `
      <main class="page-main">
        <section class="page-main__login login">
            <form class="login__form form form--login">
                <h2 class="form__title">Log In</h2>
                {{{InputBox
                  className="form"
                  id="login"
                  name="login"
                  value="${this.props.loginValue}"
                  type="text"
                  labelText="Login"
                  placeholder="Login"
                  errorMessage=error
                  onInput=onInput
                  onFocus=onFocus
                  onBlur=onBlur
                  ref="loginRef"
                }}}
                {{{InputBox
                  className="form"
                  id="password"
                  name="password"
                  value="${this.props.passwordValue}"
                  type="password"
                  labelText="Password"
                  placeholder="Password"
                  errorMessage=error
                  onInput=onInput
                  onFocus=onFocus
                  onBlur=onBlur
                  ref="passwordRef"
                }}}
                {{{Button className="form" modify="primary" type="button" buttonText="Log In" onClick=onLogin}}}
                {{{Link className="form__link" linkText="Do not have an account yet?"}}}
            </form>
        </section>
      </main>
    `;
  }
}

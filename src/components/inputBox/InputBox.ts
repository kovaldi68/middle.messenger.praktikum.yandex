import Block from 'core/Block';
import { validateForm } from '../../utils/validateForm';

import './inputBox.scss';

interface InputBoxProps {
    className: string;
    id: string;
    name: string;
    labelText: string;
    type: 'text' | 'number' | 'password';
    errorMessage: string;
    placeholder: string;
    value: string;
    onInput?: () => void;
    onFocus?: () => void;
}

export class InputBox extends Block {
    static componentName = 'InputBox';

    constructor(props: InputBoxProps) {
        super({
            ...props,
            onBlur: (e: FocusEvent) => {
                const inputEl = e.target as HTMLInputElement;

                const errorMessage = validateForm([{ type: inputEl.name, value: inputEl.value }]);

                if (errorMessage) {
                    this.refs.errorRef.setProps({ errorMessage: errorMessage });
                }
            }
        });
    }

    protected render(): string {
        // language=hbs
        return `
        <div class="{{ className}}__input-box input-box {{ className}}__input-box--{{ id }}">
            <label class="input-box__label" for="{{ id }}-input">{{ labelText }}</label>
            <div class="input-box__input-wrapper input-box__input-wrapper--{{ id }}">
                {{{Input
                  id="${this.props.id}"
                  name="${this.props.name}"
                  type=type
                  value="${this.props.value}"
                  placeholder=placeholder
                  onInput=onInput
                  onFocus=onFocus
                  onBlur=onBlur
                }}}
            </div>
            {{{InputErrorMessage className="input-box" errorMessage=errorMessage ref="errorRef"}}}
        </div>
    `;
    }
}

import Block from 'core/Block';
import { validateForm } from '../../utils/validateForm';

interface ProfileProps {
    property: string;
    value: string;
    type: string;
    name: string;
    errorMessage: string;
    onInput?: () => void;
    onFocus?: () => void;
}

export class ProfileInfoItem extends Block {
    static componentName = 'ProfileInfoItem';

    constructor({ property, value, type, name, errorMessage, onInput, onFocus }: ProfileProps) {
        super({
            events: { input: onInput, focus: onFocus },
            property,
            value,
            type,
            name,
            errorMessage,
            onBlur: (e: FocusEvent) => {
                const inputEl = e.target as HTMLInputElement;

                console.log('onBlur');

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
        <li class="profile__user-info-item">
            {{{InputErrorMessage className="profile" errorMessage=errorMessage ref="errorRef"}}}
            <label class="profile__user-info-property" for="{{ name }}">{{ property }}</label>
            <span class="profile__user-info-value">{{ value }}</span>
            {{{ProfileInput id="${this.props.name}-profile-input" name="${this.props.name}" type="${this.props.type}" value="${this.props.value}" onInput=onInput onFocus=onFocus onBlur=onBlur}}}
        </li>
    `;
    }
}

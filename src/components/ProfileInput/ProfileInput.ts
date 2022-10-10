import Block from 'core/Block';

interface ProfileProps {
    id: string;
    value: string;
    type: string;
    name: string;
    errorMessage: string;
    onInput?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

export class ProfileInput extends Block {
    static componentName = 'ProfileInput';

    constructor({ onInput, onFocus, onBlur, ...props }: ProfileProps) {
        super({ events: { input: onInput, focus: onFocus, blur: onBlur }, ...props });
    }

    protected render(): string {
        // language=hbs
        return `
      <input class="profile__user-info-input" id="{{ id }}" name="{{ name }}" type="{{ type }}" value="${this.props.value}"/>
    `;
    }
}

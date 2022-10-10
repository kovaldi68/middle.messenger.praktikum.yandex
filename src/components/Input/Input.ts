import Block from 'core/Block';

import './input.scss';

interface InputProps {
    id: string;
    type: 'text' | 'number' | 'password';
    placeholder: string;
    value: string;
    name: string;
    onChange?: () => void;
    onInput?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

export class Input extends Block {
    static componentName = 'Input';

    constructor({ onInput, onFocus, onBlur, ...props }: InputProps) {
        super({ events: { input: onInput, focus: onFocus, blur: onBlur }, ...props });
    }

    protected render(): string {
        // language=hbs
        return `
      <input class="input-box__input" value="${this.props.value}" id="{{ id }}-input" name="{{ name }}" type="{{ type }}" placeholder="{{ placeholder }}"/>
    `;
    }
}

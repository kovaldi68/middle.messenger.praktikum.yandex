import Block from 'core/Block';

import './button.scss';

interface ButtonProps {
    buttonText: string;
    modify: string;
    className: string;
    type: 'submit' | 'button' | 'reset';
    onClick?: () => void;
    disabled: boolean;
}

export class Button extends Block {
    static componentName = 'Button';

    constructor({ buttonText, modify, className, type, disabled, onClick }: ButtonProps) {
        super({ buttonText, modify, className, type, disabled, events: { click: onClick } });
    }

    protected render(): string {
        // language=hbs
        return `
        <button class="{{ className }}__button button button--{{ modify }}" type="{{ type }}" {{#if ${this.props.disabled}}}disabled{{/if}}> {{ buttonText }} </button>
    `;
    }
}

import Block from 'core/Block';

import './inputErrorMessage.scss';

interface InputErrorProps {
    errorMessage?: string;
    className: string;
}

export class InputErrorMessage extends Block {
    static componentName = 'InputErrorMessage';

    constructor({ errorMessage, className }: InputErrorProps) {
        super({ errorMessage, className });
    }

    protected render(): string {
        // language=hbs
        return `
      <span class="${this.props.className}__input-error-message">{{#if errorMessage}}{{errorMessage}}{{/if}}</span>
    `;
    }
}

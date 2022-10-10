import Block from 'core/Block';

export class MainTitle extends Block {
    static componentName = 'MainTitle';

    protected render(): string {
        // language=hbs
        return `
        <h1 class="page-main__title title visually-hidden">Shi no ka</h1>
    `;
    }
}

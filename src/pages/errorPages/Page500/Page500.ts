import Block from 'core/Block';

import '../errorPage.scss';

export class Page500 extends Block {
    render() {
        // language=hbs
        return `
        <main class="page-main">
            {{{MainTitle}}}
            <section class="page-main__error-page error-page">
                <p class="error-page__title">500</p>
                <p class="error-page__text">Everything has fallen, but we are fixing</p>
                {{{Link className="error-page__link" linkText="Back to chatlist" hrefLink="../chat/chat.hbs"}}}
            </section>
        </main>
    `;
    }
}

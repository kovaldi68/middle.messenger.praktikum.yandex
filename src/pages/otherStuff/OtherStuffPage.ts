import Block from 'core/Block';

export class OtherStuffPage extends Block {
    static componentName = 'OtherStuffPage';

    render() {
        // language=hbs
        return `
        <div>
            {{{ModalAddPhoto}}}
            {{{ModalAddUser}}}
            {{{ContextMenu}}}
            {{{ContextOptions}}}
            {{{UserContextOptions}}}
        </div>
    `;
    }
}

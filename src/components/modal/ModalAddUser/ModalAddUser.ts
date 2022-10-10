import Block from 'core/Block';

import '../modal.scss';

export class ModalAddUser extends Block {
    static componentName = 'ModalAddUser';

    protected render(): string {
        // language=hbs
        return `
        <div class="modal">
            <div class="modal__wrapper">
                <h2 class="modal__title">Add user</h2>
                {{{InputBox className="modal" id="add-user" type="text" placeholder="Enter user nickname" errorMessage="User doesn't exist" labelText="Login"}}}
                {{{Button className="modal" type="Button" modify="primary" buttonText="Add user"}}}
                {{{Button className="modal" type="Button" modify="close"}}}
            </div>
        </div>
    `;
    }
}

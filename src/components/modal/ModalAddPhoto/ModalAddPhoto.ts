import Block from 'core/Block';

import '../modal.scss';

export class ModalAddPhoto extends Block {
    static componentName = 'ModalAddPhoto';

    protected render(): string {
        // language=hbs
        return `
        <div class="modal">
            <div class="modal__wrapper">
                <h2 class="modal__title">Upload the file</h2>
                <label class="modal__file-label" for="upload-photo">Choose file on your computer</label>
                <input class="modal__file-input" id="upload-photo" type="file"/>
                {{{Button className="modal" type="Button" modify="primary" buttonText="Change"}}}
                {{{Button className="modal" type="Button" modify="close"}}}
            </div>
        </div>
    `;
    }
}

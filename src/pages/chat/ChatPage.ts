import Block from 'core/Block';

import './chat.scss';

export class ChatPage extends Block {
  render() {
    // language=hbs
    return `
        <main class="page-main__chat chat">
            {{{ChatSideBar}}}
            {{{MainChat}}}
        </main>
    `;
  }
}
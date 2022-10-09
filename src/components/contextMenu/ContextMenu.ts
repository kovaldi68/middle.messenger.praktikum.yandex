import Block from "core/Block";

import "./contextMenu.scss";

interface ContextMenuProps {
  className: string;
}

export class ContextMenu extends Block {
  static componentName = "ContextMenu";

  constructor({ className }: ContextMenuProps) {
    super({ className });
  }

  protected render(): string {
    // language=hbs
    return `
        <ul class="{{ className }}__context-menu context-menu">
            <li class="context-menu__item">
                <a class="context-menu__link">
                    {{{ContextMenuIcon src="../../img/pin-chat-icon.svg" alt="pin-item-icon" width="15px" height="15px"}}}
                    <p class="context-menu__text">Pin the chat</p>
                </a>
            </li>
            <li class="context-menu__item">
                <a class="context-menu__link">
                    {{{ContextMenuIcon src="../../img/turn-off-notific-icon.svg" alt="notific-item-icon" width="15px" height="15px"}}}
                    <p class="context-menu__text">Turn off notifications</p>
                </a>
            </li>
            <li class="context-menu__item">
                <a class="context-menu__link">
                    {{{ContextMenuIcon src="../../img/unread-mail-icon.svg" alt="unread-mail-item-icon" width="15px" height="15px"}}}
                    <p class="context-menu__text">Mark as unread</p>
                </a>
            </li>
            <li class="context-menu__item">
                <a class="context-menu__link">
                    {{{ContextMenuIcon src="../../img/clean-history-icon.svg" alt="clean-history-item-icon" width="15px" height="15px"}}}
                    <p class="context-menu__text">Clean history</p>
                </a>
            </li>
            <li class="context-menu__item">
                <a class="context-menu__link">
                    {{{ContextMenuIcon src="../../img/archive-chat-icon.svg" alt="menu-item-icon" width="15px" height="15px"}}}
                    <p class="context-menu__text">Put in archive</p>
                </a>
            </li>
            <li class="context-menu__item">
                <a class="context-menu__link">
                    {{{ContextMenuIcon src="../../img/delete-chat-icon.svg" alt="delete-item-icon" width="15px" height="15px"}}}
                    <p class="context-menu__text">Delete chat</p>
                </a>
            </li>
        </ul>
    `;
  }
}

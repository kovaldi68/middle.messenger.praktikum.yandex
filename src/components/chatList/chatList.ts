import Block from "core/Block";

import "./chatList.scss";

export class ChatList extends Block {
  static componentName = "ChatList";

  protected render(): string {
    // language=hbs
    return `
        <ul class="chat-sidebar__chat-list chat-list">
            <li class="chat-list__item">
                <a class="chat-list__link">
                    <div class="chat-list__avatar-wrapper">
                        <img class="chat-list__avatar-image" src="../../img/avatar-img.jpeg" alt="user-avatar"/>
                    </div>
                    <span class="chat-list__user-name">Андрей</span>
                    <span class="chat-list__message-time">10:49</span>
                    <div class="chat-list__message-text-wrapper">
                        <span class="chat-list__sender">Вы:</span>
                        <span class="chat-list__message-text">Друзья, у меня для вас особенный выпуск новостей!...</span>
                    </div>
                </a>
            </li>
            <li class="chat-list__item">
                <a class="chat-list__link">
                    <div class="chat-list__avatar-wrapper">
                        <img class="chat-list__avatar-image" src="../../img/avatar-img.jpeg" alt="user-avatar"/>
                    </div>
                    <span class="chat-list__user-name">Андрей</span>
                    <span class="chat-list__message-time">10:49</span>
                    <div class="chat-list__message-text-wrapper">
                        <span class="chat-list__sender chat-list__sender--not-user"></span>
                        <span class="chat-list__message-text">Стикер</span>
                    </div>
                    <p class="chat-list__message-count">223</p>
                </a>
            </li>
            <li class="chat-list__item">
                <a class="chat-list__link">
                    <div class="chat-list__avatar-wrapper">
                        <img class="chat-list__avatar-image" src="../../img/avatar-img.jpeg" alt="user-avatar"/>
                    </div>
                    <span class="chat-list__user-name">Андрей</span>
                    <span class="chat-list__message-time">10:49</span>
                    <div class="chat-list__message-text-wrapper">
                        <span class="chat-list__sender chat-list__sender--not-user"></span>
                        <span class="chat-list__message-text">Изображение</span>
                    </div>
                    <p class="chat-list__message-count">4</p>
                </a>
            </li>
            <li class="chat-list__item">
                <a class="chat-list__link">
                    <div class="chat-list__avatar-wrapper">
                        <img class="chat-list__avatar-image" src="../../img/avatar-img.jpeg" alt="user-avatar"/>
                    </div>
                    <span class="chat-list__user-name">Андрей</span>
                    <span class="chat-list__message-time">10:49</span>
                    <div class="chat-list__message-text-wrapper">
                        <span class="chat-list__sender">Вы:</span>
                        <span class="chat-list__message-text">Rhenj</span>
                    </div>
                </a>
            </li>
        </ul>
    `;
  }
}

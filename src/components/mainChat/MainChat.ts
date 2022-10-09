import Block from 'core/Block';

import './mainChat.scss';
import './messageContent.scss';

export class MainChat extends Block {
  static componentName = "MainChat";

  protected render(): string {
    // language=hbs
    return `
        <div class="chat__main-chat main-chat main-chat--active">
            <div class="main-chat__empty">
                <span class="main-chat__select-text">Who would you like to talk to ?</span>
            </div>
            <div class="main-chat__active">
                <div class="main-chat__top-bar">
                    <div class="main-chat__respondent">
                        <div class="main-chat__respondent-avatar">
                            <img class="main-chat__respondent-image" src="../../img/avatar-img.jpeg" alt="respondent-image" width="34px" height="34px"/>
                        </div>
                        <span class="main-chat__respondent-name">Влад</span>
                    </div>
                    <button class="main-chat__button main-chat__button--options button button--round">
                        <svg width="3" height="16" viewBox="0 0 3 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="1.5" cy="2" r="1.5" fill="#8793FF"/>
                            <circle cx="1.5" cy="8" r="1.5" fill="#8793FF"/>
                            <circle cx="1.5" cy="14" r="1.5" fill="#8793FF"/>
                        </svg>
                    </button>
                </div>
                <div class="main-chat__all-message-section">
                    <div class="main-chat__message-date-content">
                        <p class="main-chat__date">19 июня</p>
                        <div class="main-chat__message-content message-content message-content--respondent">
                            <p class="message-content__text">Привет! Смотри, тут всплыл интересный кусок лунной космической
                                истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов
                                на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все
                                тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали
                                только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло
                                не так и на ракету они так
                                никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на
                                аукционе за 45000 евро.
                            </p>
                        </div>
                        <div class="main-chat__message-content message-content message-content--respondent message-content--image">
                            <div class="message-content__image-wrapper">
                                <img class="message-content__image" src="../../img/avatar-img.jpeg" alt="content-image" width="320px" height=326px"/>
                            </div>
                        </div>
                        <div class="main-chat__message-content message-content message-content--own">
                            <p class="message-content__text">
                                Круто!
                            </p>
                        </div>
                    </div>
                    <div class="main-chat__message-date-content">
                        <p class="main-chat__date">21 июня</p>
                        <div class="main-chat__message-content message-content message-content--respondent">
                            <p class="message-content__text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum."
                            </p>
                        </div>
                        <div class="main-chat__message-content message-content message-content--own">
                            <p class="message-content__text">
                                Ты в порядке?
                            </p>
                        </div>
                    </div>
                </div>
                <div class="main-chat__bottom-bar">
                    <form class="main-chat__send-message-form">
                        <button class="main-chat__button main-chat__button--send-file button button--round" type="button">
                            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.18662 13.5L14.7628 5.92389L15.7056 6.8667L8.12943 14.4428L7.18662 13.5Z" fill="#999999"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70067 16.0141L17.2768 8.43793L18.2196 9.38074L10.6435 16.9569L9.70067 16.0141Z" fill="#999999"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0433 21.3567L22.6195 13.7806L23.5623 14.7234L15.9861 22.2995L15.0433 21.3567Z" fill="#999999"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8708L25.1335 16.2946L26.0763 17.2374L18.5002 24.8136L17.5574 23.8708Z" fill="#999999"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8709C14.9423 26.486 10.7118 26.4954 8.10831 23.8919C5.50482 21.2884 5.51424 17.0579 8.12936 14.4428L7.18655 13.5C4.0484 16.6381 4.0371 21.7148 7.16129 24.839C10.2855 27.9632 15.3621 27.9519 18.5003 24.8137L17.5574 23.8709Z" fill="#999999"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6195 13.7806L23.5623 14.7234C26.003 12.2826 26.0118 8.3341 23.5819 5.90417C21.152 3.47424 17.2035 3.48304 14.7627 5.92381L15.7055 6.86662C17.6233 4.94887 20.7257 4.94196 22.6349 6.85119C24.5441 8.76042 24.5372 11.8628 22.6195 13.7806Z" fill="#999999"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70092 16.0144C7.95751 17.7578 7.95123 20.5782 9.68689 22.3138C11.4226 24.0495 14.2429 24.0432 15.9863 22.2998L15.0435 21.357C13.8231 22.5774 11.8489 22.5818 10.6339 21.3668C9.41894 20.1518 9.42334 18.1776 10.6437 16.9572L9.70092 16.0144Z" fill="#999999"/>
                            </svg>
                        </button>
                        <button class="main-chat__button main-chat__button--emodji button button--round" type="button">
                            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0ZM16 2.39963C8.48872 2.39963 2.39963 8.48872 2.39963 16C2.39963 23.5113 8.48872 29.6004 16 29.6004C23.5113 29.6004 29.6004 23.5113 29.6004 16C29.6004 8.48872 23.5113 2.39963 16 2.39963ZM10.3397 20.4526C11.6981 22.1767 13.7634 23.2014 16 23.2014C18.2336 23.2014 20.2964 22.1795 21.655 20.4593C22.0657 19.9393 22.8202 19.8507 23.3402 20.2614C23.8602 20.6721 23.9489 21.4266 23.5381 21.9466C21.7292 24.237 18.9757 25.601 16 25.601C13.0202 25.601 10.2635 24.2333 8.45479 21.9377C8.0447 21.4172 8.13419 20.6628 8.65468 20.2527C9.17518 19.8426 9.92957 19.9321 10.3397 20.4526ZM11.2015 10.8018C12.3052 10.8018 13.2 11.6966 13.2 12.8004C13.2 13.9042 12.3052 14.7989 11.2015 14.7989C10.0977 14.7989 9.20291 13.9042 9.20291 12.8004C9.20291 11.6966 10.0977 10.8018 11.2015 10.8018ZM20.8 10.8018C21.9037 10.8018 22.7985 11.6966 22.7985 12.8004C22.7985 13.9042 21.9037 14.7989 20.8 14.7989C19.6962 14.7989 18.8014 13.9042 18.8014 12.8004C18.8014 11.6966 19.6962 10.8018 20.8 10.8018Z" fill="#8793FF"/>
                            </svg>
                        </button>
                        <label class="main-chat__message-label" for="message"></label>
                        <input class="main-chat__message-input" id="message" name="message" type="text" placeholder="Message"/>
                        <button class="main-chat__button main-chat__button--send-message button button--round" type="submit">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#8793FF"/>
                                <rect x="9.14288" y="15.0857" width="12.5714" height="1.82857" fill="white"/>
                                <path d="M17.1429 10.2856L21.7143 15.9999L17.1429 21.7142" stroke="white" stroke-width="1.6"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;
  }
}
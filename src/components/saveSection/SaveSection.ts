import Block from 'core/Block';

import './saveSection.scss';

export class SaveSection extends Block {
  static componentName = "SaveSection";

  protected render(): string {
    // language=hbs
    return `
        <div class="chat-sidebar__save-section save-section save-section--archive">
            <div class="save-section__content save-section__content--archive">
                <div class="save-section__icon-wrapper">
                    <img class="save-section__icon" src="../../img/archive-chat-icon.svg" alt="archive-icon" width="47px" height="47px"/>
                </div>
                <span class="save-section__name">Архив</span>
                <span class="save-section__message-text">Chat_1, Chat_2, Chat_3, Chat_4</span>
                {{{Button className="save-section__button--favs save-section" type="Button" modify="round"}}}
            </div>
            <div class="save-section__content save-section__content--favs">
                <div class="save-section__icon-wrapper">
                    <img class="save-section__icon" src="../../img/favs-icon.svg" alt="favs-avatar" width="47px" height="47px"/>
                </div>
                <span class="save-section__name">Избранное</span>
                <span class="save-section__message-text">Миллионы россиян ежедневно проводят десятки часов свое...</span>
                {{{Button className="save-section__button--archive save-section" type="Button" modify="round"}}}
            </div>
        </div>
    `;
  }
}
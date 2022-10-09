import Block from "core/Block";

import "./chatSidebar.scss";

export class ChatSideBar extends Block {
  static componentName = "ChatSideBar";

  protected render(): string {
    // language=hbs
    return `
        <div class="chat__chat-side-bar chat-sidebar">
            <div class="chat-sidebar__profile-section">
                <div class="chat-sidebar__user-avatar-wrapper">
                    <img class="chat-sidebar__user-avatar-image" src="../img/avatar-img.jpeg" alt="user-avatar" width="40px" height="40px"/>
                </div>
                {{{Link className="chat-sidebar__user-profile-link" hrefLink="../profile/profile.html" linkText="Your profile"}}}
            </div>
            <form class="chat-sidebar__search-form">
                <div class="chat-sidebar__search-wrapper">
                    <label class="chat-sidebar__search-label visually-hidden" for="search-input">Search</label>
                    <input class="chat-sidebar__search-input" type="text" id="search-input" name="search-input" placeholder="Поиск"/>
                </div>
            </form>
            {{{ChatList}}}
            {{{SaveSection}}}
        </div>
    `;
  }
}

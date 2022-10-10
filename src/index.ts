require('babel-core/register');
import { renderDOM, registerComponent } from './core';

import './styles/style.scss';

import { Button } from 'components/Button';
import { ChatSideBar } from 'components/ChatSideBar';
import { MainChat } from 'components/MainChat';
import { ChatList } from 'components/ChatList';
import { SaveSection } from 'components/SaveSection';
import { Link } from 'components/Link';
import { InputBox } from 'components/InputBox';
import { ProfileInfoItem } from 'components/ProfileInfoItem';
import { MainTitle } from 'components/MainTitle';
import { ContextMenu } from 'components/ContextMenu';
import { ContextMenuIcon } from 'components/ContextMenuIcon';
import { ContextOptions } from 'components/ContextOptions';
import { Input } from 'components/Input';
import { InputErrorMessage } from 'components/InputErrorMessage';
import { ProfileInput } from 'components/ProfileInput';
import { ModalAddPhoto } from 'components/Modal/ModalAddPhoto';
import { ModalAddUser } from 'components/Modal/ModalAddUser';

import { IndexPage } from 'pages/index/IndexPage';
import { Page404 } from 'pages/errorPages/Page404/Page404';
import { Page500 } from 'pages/errorPages/Page500/Page500';
import { LoginPage } from 'pages/login/LoginPage';
import { ChatPage } from 'pages/chat/ChatPage';
import { SignupPage } from 'pages/signup/SignupPage';
import { Profile } from 'pages/profile/Profile';
import { OtherStuffPage } from 'pages/otherStuff/OtherStuffPage';

//components
registerComponent(Button);
registerComponent(ChatList);
registerComponent(ChatSideBar);
registerComponent(ContextMenu);
registerComponent(ContextMenuIcon);
registerComponent(ContextOptions);
registerComponent(ProfileInfoItem);
registerComponent(InputBox);
registerComponent(Link);
registerComponent(MainChat);
registerComponent(MainTitle);
registerComponent(ProfileInfoItem);
registerComponent(SaveSection);
registerComponent(ModalAddPhoto);
registerComponent(ModalAddUser);
registerComponent(Input);
registerComponent(InputErrorMessage);
registerComponent(ProfileInput);

//pages
registerComponent(IndexPage);
registerComponent(ChatPage);
registerComponent(Page404);
registerComponent(Page500);
registerComponent(LoginPage);
registerComponent(SignupPage);
registerComponent(Profile);
registerComponent(OtherStuffPage);

document.addEventListener('DOMContentLoaded', () => {
    switch (window.location.pathname) {
        case '/login':
            renderDOM(new LoginPage());
            break;
        case '/signup':
            renderDOM(new SignupPage());
            break;
        case '/otherStuff':
            renderDOM(new OtherStuffPage());
            const closeButtons = Array.from(document.querySelectorAll('.button--close'));

            closeButtons.forEach((button: Element) => {
                button.addEventListener('click', () => {
                    // @ts-ignore
                    button.closest('.modal').style.display = 'none';
                });
            });
            break;
        case '/chat':
            renderDOM(new ChatPage());
            break;
        case '/profile':
            renderDOM(new Profile());
            break;
        case '/500':
            renderDOM(new Page500());
            break;
        case '/404':
            renderDOM(new Page404());
            break;
        default:
            renderDOM(new IndexPage());
    }
});

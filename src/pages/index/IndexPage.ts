import Block from 'core/Block';

export class IndexPage extends Block {
  render() {
    // language=hbs
    return `
        <ul>
            <li>
                <a href="/chat">Chat page</a>
            </li>
            <li>
                <a href="/profile">Profile page</a>
            </li>
            <li>
                <a href="/signup">Sign Up page</a>
            </li>
            <li>
                <a href="/login">Login page</a>
            </li>
            <li>
                <a href="/500">500 page</a>
            </li>
            <li>
                <a href="/404">404 page</a>
            </li>
            <li>
                <a href="/otherStuff">Context menus</a>
            </li>
        </ul>
    `;
  }
}
import Block from 'core/Block';

interface LinkProps {
  linkText: string;
  className: string;
  href: string;
}

export class Link extends Block {
  static componentName = "Link";

  constructor({ className, href, linkText }: LinkProps) {
    super({ className, href, linkText});
  }

  protected render(): string {
    // language=hbs
    return `
        <a class="{{ className }} link" href="{{ hrefLink }}">{{ linkText }}</a>
    `;
  }
}
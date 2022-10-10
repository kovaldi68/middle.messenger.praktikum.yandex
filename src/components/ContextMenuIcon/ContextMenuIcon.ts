import Block from 'core/Block';

interface ContextMenuIconProps {
    src: string;
    alt: string;
    width: string;
    height: string;
}

export class ContextMenuIcon extends Block {
    static componentName = 'ContextMenuIcon';

    constructor({ src, alt, width, height }: ContextMenuIconProps) {
        super({ src, alt, width, height });
    }

    protected render(): string {
        // language=hbs
        return `
        <div class="context-menu__image-wrapper">
            <img class="context-menu__image" src="{{ src }}" alt="{{ alt }}" width="{{ width }}" height="{{ height }}"/>
        </div>
    `;
    }
}

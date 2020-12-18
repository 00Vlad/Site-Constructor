import { row, col, css } from "../utils";

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error("The method 'toHTML' must be implemented");
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag = "h1", styles } = this.options; // деструктуризация
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag, rowStyles, styles } = this.options; // деструктуризация
    return row(
      col(`<${tag} style="${css(styles)}">${this.value}</${tag}>`),
      css(rowStyles)
    );
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const html = this.value.map(col).join("");
    return row(html, css(this.options.styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { styles, imageStyles } = this.options; // деструктуризация
    return row(
      `<img src="${this.value}" style="${css(imageStyles)}"/>`,
      css(styles)
    );
  }
}

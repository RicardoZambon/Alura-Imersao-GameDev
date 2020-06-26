class ButtonManager {
    constructor(text, x, y, cssClass, action) {
        this.text = text;
        this.x = x;
        this.y = y;

        this.button = createButton(this.text);
        this.button.addClass(cssClass);
        this.button.mousePressed(action);
    }

    draw() {
        this.button.position(this.x, this.y);
        this.button.center('horizontal');
    }

    remove() {
        this.button.remove();
    }
}
/**
 * DOM utility
 */
let $ = require('./dom').default;

/**
 *  Creates a toolbar
 *  @class Toolbar
 *
 *  @property {Object}  tree   — toolbar nodes
 *  @property {Object}  CSS    — styles dictionary
 *  @property {HTMLElement} editor — main editor wrapper
 *  @property {SVGElement} canvas — main canvas SVG
 *  @property {HTMLElement} target — on which element toolbar was open
 */
export default class Toolbar {

    /**
     * @constructor
     * Toolbar module
     *
     * @param {Object} fontSizes        - font sizes for target elements
     * @param {String} fontSizes.small  - the smalles text size
     * @param {String} fontSizes.medium - the medium text size
     * @param {String} fontSizes.big    - the biggest text size
     */
    constructor(fontSizes) {

        /**
         * Component for controlling canvas.
         * @type {Object}
         */
        this.instances = {
            canvas: null
        };

        /**
         * On which element toolbar was opened
         * @type {Element|null}
         */
        this.target = null;

        /**
         * Properties for target element at the SVG
         * @type {Object}
         */
        this.properties = {
            fontSize: {
                small: fontSizes && fontSizes.small ? fontSizes.small : '25px',
                medium: fontSizes && fontSizes.medium ? fontSizes.medium : '28px',
                big: fontSizes && fontSizes.big ? fontSizes.big : '31px'
            }
        };

        /**
         * DOM Elements
         * @type {Object}
         */
        this.tree = {
            toolbar: undefined,
            buttons: {
                fontSize: undefined,
                left: undefined,
                center: undefined,
                right: undefined,
                color: undefined
            },
            colorForm: undefined,
        };

        /**
         * CSS classnames
         * @type {Object}
         */
        this.CSS = {
            hidden: 'cover-editor--hidden',
            toolbar: {
                colorMode: 'cover-editor__toolbar--color-mode',
                normal: 'cover-editor__toolbar'
            },
            target: {
                active: 'cover-editor__text--active',
                fontSize: [
                    'cover-editor__text--small',
                    'cover-editor__text--medium',
                    'cover-editor__text--big'
                ],
            },
            button : 'cover-editor__button',
            buttons: {
                active    : 'cover-editor__button--active',
                left      : 'cover-editor__button--left',
                center    : 'cover-editor__button--center',
                right     : 'cover-editor__button--right',
                fontSize  : 'cover-editor__button--font-size',
                fontSizes : {
                    small: 'cover-editor__button--small',
                    medium: 'cover-editor__button--medium',
                    big: 'cover-editor__button--big'
                },
                color : 'cover-editor__button--color'
            },
            colorForm : 'cover-editor__color-form'
        };

        /**
         * Color constants
         */
        this.colors = {
            defaultText : '#000000'
        };

        /**
         * Margin between the canvas element and the toolbar
         */
        this.margin = 10;

    }

    /**
     *  Prepares toolbar elements
     *
     * @param  {Element} editor         - main wrapper
     * @param  {Object} canvas          - canvas instance
     * @param  {Element} canvasInstance - canvas object
     */
    create(editor, canvas, canvasInstance) {

        /**
         * Main Editor wrapper
         * @type {Element}
         */
        this.editor = editor;
        this.canvas = canvas;
        this.instances.canvas = canvasInstance;

        this.make();

    }


    /**
     * Creates toolbar
     */
    make() {

        this.tree.toolbar = $.make('div', [this.CSS.toolbar.normal, this.CSS.hidden]);

        /**
         * Add buttons
         */
        for (var type in this.tree.buttons) {

            let button = $.make('span', [this.CSS.button, this.CSS.buttons[type]]);

            this.tree.toolbar.appendChild(button);
            this.tree.buttons[type] = button;

            /**
             * Save action in the button's dataset
             */
            button.dataset.action = type;

            button.addEventListener('click', event => {

                this.buttonClicked(event);

            });

        }

        /**
         * Add color form
         */
        this.tree.colorForm = $.make('input', [ this.CSS.colorForm ]);
        this.tree.colorForm.addEventListener('keyup', event => {

            this.changeColorModeByKey(event);

        });
        this.tree.toolbar.insertBefore(this.tree.colorForm, this.tree.buttons.color);

        /**
         * Append toolbar to the Editor
         */
        this.editor.appendChild(this.tree.toolbar);

    }

    /**
     * Toolbar button click handler
     * @param  {MouseEvent} event  - click on the button
     */
    buttonClicked(event) {

        let buttonClicked = event.target,
            action = buttonClicked.dataset.action;

        switch ( action ) {

            case 'fontSize':
                this.changeFontSize();
                break;

            case 'left':
            case 'center':
            case 'right':
                this.changeAlignment(action);
                break;

            case 'color':
                this.changeColorMode();
                break;

        }

    }

    /**
     * Change font size of target
     * @param {Integer} fontSize - number of font size
     */
    changeFontSize() {

        let current = this.target.dataset.fontSize,
            sizes = ['small', 'medium', 'big'],
            next;

        next = sizes[(sizes.indexOf(current) + 1) % sizes.length];

        this.target.dataset.fontSize = next;
        this.tree.buttons.fontSize.classList.remove(this.CSS.buttons.fontSizes[current]);
        this.tree.buttons.fontSize.classList.add(this.CSS.buttons.fontSizes[next]);
        this.instances.canvas.setTextFontSize(this.target, this.properties.fontSize[next]);
        this.moveToTarget();

    }

    /**
     * Open toolbar near element
     * @param {String} alignment - alignment of target: 'left', 'center' or 'right'
     */
    changeAlignment( alignment ) {

        this.target.dataset.alignment = alignment;

        for (let type in this.tree.buttons) {

            if (type !== 'fontSize' && type !== 'color') {

                this.tree.buttons[type].classList.remove(this.CSS.buttons.active);

            }

        };

        this.tree.buttons[alignment].classList.add(this.CSS.buttons.active);
        this.instances.canvas.setElementAlignment(this.target, alignment, undefined);
        this.moveToTarget();

    }

    /**
     * Change color of target and toolbar color button
     * @param {String} color - color of target
     */
    changeColor( color ) {

        if (!color) {

            return;

        }

        this.instances.canvas.setTextColor(this.target, color);
        this.target.dataset.color = color;
        this.tree.buttons.color.style.background = color;

    }

    /**
     * Set color after enter button was clicked on the keyboard
     */
    changeColorModeByKey(event) {

        if (event.keyCode != 13) {

            return;

        }

        this.changeColorMode();

    }

    /**
     * Toggle color mode of toolbar
     */
    changeColorMode() {

        if (this.tree.toolbar.classList.contains(this.CSS.toolbar.colorMode)) {

            this.changeColor(this.tree.colorForm.value);
            this.tree.colorForm.value = '';
            this.tree.toolbar.classList.remove(this.CSS.toolbar.colorMode);

        } else {

            this.tree.toolbar.classList.add(this.CSS.toolbar.colorMode);
            this.tree.colorForm.focus();

        }

        this.moveToTarget();

    }

    /**
     * Move toolbar to target
     */
    moveToTarget() {

        let toolbar = this.tree.toolbar,
            element = this.target.getBoundingClientRect(),
            canvasWrapper = this.canvas.parentNode.getBoundingClientRect();

        switch (this.target.dataset.alignment) {

            case 'left':
                toolbar.style.left = element.left - canvasWrapper.left + 'px';
                break;

            case 'center':
                toolbar.style.left = element.left - canvasWrapper.left - (toolbar.clientWidth - this.target.clientWidth) / 2 + 'px';
                break;

            case 'right':
                toolbar.style.left = element.left - canvasWrapper.left + this.target.clientWidth - toolbar.clientWidth + 'px';
                break;

        }

        toolbar.style.top = element.top - this.margin - toolbar.clientHeight + 'px';

    }

    /**
     * Read states of buttons from target
     */
    getTargetParams() {

        if (this.target.dataset.fontSize == undefined) {

            this.target.dataset.fontSize = 'big';
            this.changeFontSize();

        } else {

            this.tree.buttons.fontSize.classList.add(this.CSS.buttons.fontSizes[this.target.dataset.fontSize]);

        }

        if (this.target.dataset.alignment == undefined) {

            this.target.dataset.alignment = 'left';

        }
        this.changeAlignment(this.target.dataset.alignment);

        if (this.target.dataset.color == undefined) {

            this.target.dataset.color = this.colors.defaultText;

        }
        this.changeColor(this.target.dataset.color);

    }

    /**
     * Open toolbar near element
     *
     * @param {Element} target - element to which toolbar will be bound
     */
    openNear(target) {

        this.removeTargetParams();
        this.target = target;
        this.tree.toolbar.classList.remove(this.CSS.hidden);
        this.moveToTarget();
        this.getTargetParams();

    }

    /**
     * Clears buttons states in toolbar
     */
    removeTargetParams() {

        this.tree.toolbar.classList.remove(this.CSS.toolbar.colorMode);

        this.tree.buttons.left.classList.remove(this.CSS.buttons.active);
        this.tree.buttons.center.classList.remove(this.CSS.buttons.active);
        this.tree.buttons.right.classList.remove(this.CSS.buttons.active);

        for (let key in this.CSS.buttons.fontSizes) {

            this.tree.buttons.fontSize.classList.remove(this.CSS.buttons.fontSizes[key]);

        }

    }

    /**
     * Hide toolbar
     */
    hide() {

        this.target = null;
        this.tree.toolbar.classList.add(this.CSS.hidden);

    }

}

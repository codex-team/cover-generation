/**
 * DOM utility
 */
let $ = require('./dom').default;

/**
 * Canvas module
 */
export default class Canvas {

    /**
     * Initialization of canvas module
     * @param {Object} properties               - object with properties for canvas creating
     * @param {String|Object} properties.shape  - type of format, can be 'horisontal', 'square' or 'vertical'
     * @param {Number} properties.shape.width   - width of canvas
     * @param {Number} properties.shape.height  - height of canvas
     */
    constructor( properties ) {

        /**
         * DOM of this class
         */
        this.tree = {
            svg : null
        };

        /**
         * CSS of this class
         */
        this.CSS = {
            elements: {
                text: 'cover-editor__canvas--text'
            }
        };

        /**
         * Const text value
         */
        this.newText = 'New Text';

        /**
         * Formats of the canvas, using with its sizes
         */
        this.formats = {
            vertical: 'vertical',
            horisontal: 'horisontal',
            square: 'square'
        };

        /**
         * Sizes of the canvas
         */
        this.sizes = {
            vertical: {width: 510, height: 560},
            horisontal: {width: 650, height: 370},
            square: {width: 510, height: 510}
        };

        /**
         * Positions of elements at the canvas
         */
        this.positions = {
            mainText: {x: undefined, y: 271},
            image: {x: undefined, y: 132},
            headline: {x: undefined, y: 115}
        };

        /**
         * Types of elements at the canvas
         */
        this.elements = {
            mainText: 'mainText',
            image: 'image',
            headline: 'headline'
        };

        /**
         * Padding between the elements and canvas end
         */
        this.padding = 30;

    }

    /**
     * Check if element is text
     *
     * @param {Element} - object
     */
    isText(element) {

        if ([this.elements.headline, this.elements.mainText].indexOf(element.dataset.type) != -1 && element.children.length) {

            return true;

        } else {

            return false;

        }

    }

    /**
     * Creates an SVG DOMElement
     *
     * @return {Element} - created SVG
     */
    create() {

        this.tree.rectangle = $.svg('rect', {fill: '#FFFFFF'});
        this.setSize(this.tree.rectangle, this.sizes.horisontal);

        this.tree.svg = $.svg('svg');
        this.setCanvasFormat(this.formats.horisontal);
        this.tree.svg.appendChild(this.tree.rectangle);

        return this.tree.svg;

    }

    /**
     * Changing the sizes of canvas by using format
     * @param {String} format - type of format, can be 'horisontal', 'square' or 'vertical'
     */
    setCanvasFormat( format ) {

        this.setSize(this.tree.svg, this.sizes[format]);
        this.setSize(this.tree.rectangle, this.sizes[format]);

    }

    /**
     * Changes the sizes of svg element
     *
     * @param {Element} element    - element to change size
     * @param {Object|String} size - sizes of canvas, if string, then 'auto'
     * @param {Number} size.width  - width of canvas
     * @param {Number} size.height - height of canvas
     */
    setSize( element, size ) {

        if (size === 'auto' && this.isText(element)) {

            let text = element.children[0];

            element.setAttribute('width', this.tree.svg.clientWidth);
            element.setAttribute('height', this.tree.svg.clientHeight);
            size = {width: text.offsetWidth + 10, height: text.offsetHeight + 10};

        }

        if (size.height) {

            element.setAttribute('height', size.height);

        }
        if (size.width) {

            element.setAttribute('width', size.width);

        }

    }

    /**
     * Changes the color of svg element
     *
     * @param {Element} element - element to change size
     * @param {String} color    - color of text to set
     */
    setColor(element, color) {

        if (this.isText(element)) {

            element.children[0].style.color = color;

        }

    }

    /**
     * Changes the font size of svg element
     *
     * @param {Element} element    - element to change size
     * @param {Number} size        - size of text to set
     */
    setFontSize( element, size ) {

        if (this.isText(element)) {

            element.children[0].style.fontSize = size;
            this.setSize(element, 'auto');
            this.setPosition(element, {x: element.dataset.alignment, y: undefined});

        }

    }

    /**
     * Changes a position of element
     *
     * @param {Element}                - element to change position
     * @param {Object|String} coords   - where to place text on canvas
     * @param {Number} coords.x        - x coord
     * @param {Number} coords.y        - y coord
     */
    setPosition( element, coords ) {

        if (typeof coords === 'string') {

            coords = this.positions[coords];

        }

        if (!coords) {

            return;

        }

        let canvasSizes = {width: this.tree.svg.clientWidth, height: this.tree.svg.clientWidth},
            elementSizes = {width: element.clientWidth + 5, height: element.clientWidth + 5};

        if (this.isText(element) && ['left', 'center', 'rigth'].indexOf(coords.x)) {

            element.children[0].style.textAlign = coords.x;

        }

        if (coords.x === 'left') {

            coords.x = this.padding;

        } else if (coords.x === 'center') {

            coords.x = (canvasSizes.width - elementSizes.width) / 2;

        } else if (coords.x === 'right') {

            coords.x = canvasSizes.width - elementSizes.width - this.padding;

        }

        if (coords.y) {

            element.setAttribute('y', coords.y);

        }
        if (coords.x) {

            element.setAttribute('x', coords.x);

        }

    }

    /**
     * Creates an text element
     *
     * @param {Object|String} coords   - where to place text on canvas
     * @param {Number} coords.x        - x coord
     * @param {Number} coords.y        - y coord
     * @return {Element}               - created text
     */
    createText( coords ) {

        let text = $.make('div'),
            container = $.svg('foreignObject'),
            position = this.positions[coords];

        text.classList.add(this.CSS.elements.text);
        text.innerHTML = this.newText;
        text.style.display = 'inline-flex';
        text.setAttribute('contenteditable', true);
        text.addEventListener('keyup', event => {

            this.setSize(event.target.parentNode, 'auto');
            this.setPosition(event.target.parentNode, {x: event.target.parentNode.dataset.alignment, y: undefined});

        });

        if ([this.elements.headline, this.elements.mainText].indexOf(coords) != -1) {

            container.dataset.type = coords;

        }
        container.appendChild(text);
        this.tree.svg.appendChild(container);

        position.x = 'left';
        this.setSize(container, 'auto');
        this.setPosition(container, coords);

        return container;

    }

    /**
     * Creates an image element
     *
     * @param {Object|String} coords   - where to place image on canvas
     * @param {Number} coords.x        - x coord
     * @param {Number} coords.y        - y coord
     * @return {Element}               - created image
     */
    createImage( coords ) {

        let image = $.svg('image');

        this.setPosition(image, coords);
        this.setSize(image, {width: '87', height: '87'});
        this.tree.svg.appendChild(image);

        return image;

    }

    /**
     * Creates elements from parameter
     *
     * @param {String} - type of elements: 'mainText', 'headline', 'image'
     */
    createElement( element ) {

        if (element === this.elements.headline || element === this.elements.mainText) {

            return this.createText(element);

        } else if (element === this.elements.image) {

            return this.createImage(element);

        }

    }

    /**
     * Export canvas as SVG file
     */
    export() {

        let serializer = new window.XMLSerializer(),
            source = serializer.serializeToString(this.tree.svg);


        /**
         * Match 'source' with regex: "xmlns="http//www.w3.org/2000/svg" between one and unlimited times and replace it
         */
        if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {

            source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');

        }

        /**
         * Match 'source' with regex: "xmlns="http//www.w3.org/1999/svg" between one and unlimited times and replace it
         */
        if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {

            source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');

        }

        source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

        let link = $.make('a', null, {'style': 'display:none;', 'href': 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source), 'download': 'cover.svg'});

        document.body.appendChild(link);

        link.click();
        document.body.removeChild(link);

    }

}

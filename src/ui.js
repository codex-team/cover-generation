/**
 * User interface module
 */
module.exports = function () {

    'use strict';

    let $ = require('./dom').default;

    /**
     * Style classnames
     *
     * @type {Object}
     */
    const CSS = {
        editor                 : 'cover-editor',
        controls               : 'cover-editor__controls',

        resizeButton           : 'cover-editor__resize-canvas',
        resizeButtonActive     : 'cover-editor__resize-canvas--active',

        resizeButtonSquare     : 'cover-editor__resize-canvas--square',
        resizeButtonVertical   : 'cover-editor__resize-canvas--vertical',
        resizeButtonHorisontal : 'cover-editor__resize-canvas--horisontal',

        controlButton          : 'cover-editor__control-button',
        headlineControl        : 'cover-editor__control-button--headline',
        mainTextControl        : 'cover-editor__control-button--main-text',
        imageControl           : 'cover-editor__control-button--image',
        controlButtonSave      : 'cover-editor__control-button--save',

        canvasWrapper          : 'cover-editor__canvas-wrapper',
        canvas                 : 'cover-editor__canvas',
        canvasActive           : 'cover-editor__canvas-wrapper--active',
    };

    /**
     * Static instances
     *
     * @type {Object}
     */
    let instances = {
        redrawer             : null,
        canvas               : null,
        toolbar              : null
    };

    /**
     * Static nodes cache
     *
     * @type {Object}
     */
    let nodes = {
        mainTextElement      : null,
        headlineElement      : null,
        pictureElement       : null,
        currentText          : null,
        canvasWrapper        : null,
        canvas               : null,
        mainRectangle        : null,
        controls : {
            resizeSqure      : null,
            resizeVertical   : null,
            resizeHorisontal : null,
            saveButton       : null,
            pictureButton    : null,
            mainTextButton   : null,
            headlineButton   : null,
        },
        currentCanvasEditing : null
    };

    /**
     * Make canvas active
     *
     * @param {event} - click
     */
    function canvasClicked(event) {

        if (event.target.classList.contains(CSS.canvasWrapper) ||
            event.target.tagName == 'rect') {

            instances.toolbar.hide();
            nodes.canvasWrapper.classList.add(CSS.canvasActive);

        } else {

            nodes.canvasWrapper.classList.remove(CSS.canvasActive);

        }

    }

    /**
     * Save button click listener
     */
    function saveButtonClicked() {

        instances.redrawer.shot(nodes.canvas);
        instances.redrawer.download();

    }

    /**
     * Resize button click listener
     *
     * @param {MouseEvent} event — click
     */
    function resizeButtonClicked(event) {

        let button = event.target,
            size = button.dataset.size;

        ['resizeSqure', 'resizeVertical', 'resizeHorisontal'].forEach( header => {

            nodes.controls[header].classList.remove(CSS.resizeButtonActive);

        });

        event.target.classList.add(CSS.resizeButtonActive);
        instances.toolbar.hide();
        instances.canvas.setCanvasFormat(size);

    }

    /**
     * Control buttons click listener
     *
     * @param  {MouseEvent} event  - click
     */
    function controlButtonsClicked(event) {

        let button = event.target,
            object = button.dataset.object;

        createElement(object);

    }

    /**
     * Create element and add to canvas
     *
     * @param {String} elementType - type of element
     */
    function createElement(elementType) {

        /**
         * Check if elementType has already created
         */
        if (nodes[elementType]) {

            return;

        }

        nodes[elementType] = instances.canvas.createElement(elementType);
        nodes[elementType].addEventListener('click', elementClickedHandler);
        showToolbar(nodes[elementType]);

    }

    /**
     * Show toolbar
     *
     * @param {Element} element - element at the canvas
     */
    function showToolbar(element) {

        instances.toolbar.openNear(element);

    }

    /**
     * Handle click on canvas elements to show toolbar near clicked one
     */
    function elementClickedHandler() {

        showToolbar(this);

    }

    /**
     * Bind necessary event to manupulate controls
     */
    function bindEvents() {

        document.body.addEventListener('click', canvasClicked);

        nodes.controls.saveButton.addEventListener('click', saveButtonClicked);

        nodes.controls.resizeSqure.addEventListener('click', resizeButtonClicked);
        nodes.controls.resizeVertical.addEventListener('click', resizeButtonClicked);
        nodes.controls.resizeHorisontal.addEventListener('click', resizeButtonClicked);

        nodes.controls.pictureButton.addEventListener('click', controlButtonsClicked);
        nodes.controls.mainTextButton.addEventListener('click', controlButtonsClicked);
        nodes.controls.headlineButton.addEventListener('click', controlButtonsClicked);

    }

    /**
     * Create cover-editor
     * @param {object} settings - array of paramertres
     * @param {Element} settings.container - element to create cover-editor
     */
    function create(container, redrawerInstance, canvasInstance, toolbarInstance) {

        var editor   = $.make('div', CSS.editor),
            controls = $.make('div', CSS.controls);

        instances.redrawer              = redrawerInstance;
        instances.canvas                = canvasInstance;
        instances.toolbar               = toolbarInstance;

        nodes.canvasWrapper             = $.make('div', CSS.canvasWrapper);
        nodes.canvas                    = instances.canvas.create(nodes.canvasWrapper);
        nodes.controls.resizeSqure      = $.make('span', [CSS.resizeButton, CSS.resizeButtonSquare]);
        nodes.controls.resizeVertical   = $.make('span', [CSS.resizeButton, CSS.resizeButtonVertical]);
        nodes.controls.resizeHorisontal = $.make('span', [CSS.resizeButton, CSS.resizeButtonHorisontal]);
        nodes.controls.saveButton       = $.make('span', [CSS.controlButton, CSS.controlButtonSave]);
        nodes.controls.pictureButton    = $.make('span', [CSS.controlButton, CSS.imageControl], { textContent: 'Image' });
        nodes.controls.mainTextButton   = $.make('span', [CSS.controlButton, CSS.mainTextControl], { textContent: 'Main Text' });
        nodes.controls.headlineButton   = $.make('span', [CSS.controlButton, CSS.headlineControl], { textContent: 'Headline' });

        /**
         * Save size in button's data-size
         */
        nodes.controls.resizeSqure.dataset.size = 'square';
        nodes.controls.resizeVertical.dataset.size = 'vertical';
        nodes.controls.resizeHorisontal.dataset.size = 'horisontal';
        nodes.controls.resizeHorisontal.classList.add(CSS.resizeButtonActive);

        /**
         * Save create element type in button's data-object
         */
        nodes.controls.mainTextButton.dataset.object = 'mainText';
        nodes.controls.headlineButton.dataset.object = 'headline';
        nodes.controls.pictureButton.dataset.object = 'picture';

        for (let buttonName in nodes.controls) {

            controls.appendChild(nodes.controls[buttonName]);

        }

        editor.appendChild(controls);
        nodes.canvasWrapper.appendChild(nodes.canvas);
        editor.appendChild(nodes.canvasWrapper);

        container.appendChild(editor);

        instances.toolbar.create(editor, nodes.canvas, instances.canvas);

        bindEvents();

        return nodes;

    }


    return {
        create
    };

}();

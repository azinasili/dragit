/**
 * Combine two objects based on properties.
 *
 * @param  {Object} source   - Object with original properties
 * @param  {Object} override - Object to override source properties
 * @return {Object}          - Combined object
 */
function _extendDefaults(source, override) {
  for (let property in override) {
    if (override.hasOwnProperty(property)) {
      source[property] = override[property];
    }
  }

  return source;
}

/**
 * Create a new Dragit instance.
 *
 * @class  Dragit
 * @param  {HTMLElement} trigger  - Element to initialise Dragit
 * @param  {Object} options       - Options to customize Dragit instance
 * @return {Object}               - Public init(), and desyroy() methods
 */
function Dragit(trigger, options) {

  /**
   * Default options used in Dragit.
   */
  const defaults = {
    addCursor: true,
    dragX: true,
    dragY: true,
    addOverflow: true,
    height: null,
    width: null,
  };

  /**
   * Dragit cache
   */
  let isMouseDown = false;
  let container = trigger;
  let lastClientX;
  let lastClientY;
  let newScrollX;
  let newScrollY;

  /**
   * Combined defaults and user options.
   */
  let settings;

  /**
   * If options object passed to Dragit
   * Combine options with defaults.
   */
  if (options && typeof options == 'object') {
    settings = _extendDefaults(defaults, options);
  } else {
    settings = defaults;
  }

  /**
   * Initialize Dragit.
   *
   * @method
   */
  function init() {
    if (settings.addCursor) {
      container.style.cursor = '-webkit-grab';
      container.style.cursor = 'grab';
    }

    if (settings.addOverflow) {
      if (settings.dragX) container.style.overflowX = 'auto';
      if (settings.dragY) container.style.overflowY = 'auto';
    }

    if (settings.height) container.style.height = `${settings.height}px`;
    if (settings.width) container.style.width = `${settings.width}px`;

    container.addEventListener('mousedown', _mouseDown, false);
    window.addEventListener('mousemove', _mouseMove, false);
    window.addEventListener('mouseup', _mouseUp, false);
    window.addEventListener('mouseleave', _mouseUp, false);
  }
  init();

  /**
   * Remove all added events.
   *
   * @method
   */
  function destroy() {
    container.style.cursor = '';
    container.style.height = '';
    container.style.overflowX = '';
    container.style.overflowY = '';
    container.style.width = '';

    container.removeEventListener('mousedown', _mouseDown, false);
    window.removeEventListener('mousemove', _mouseDown, false);
    window.removeEventListener('mouseup', _mouseUp, false);
    window.removeEventListener('mouseleave', _mouseUp, false);
  }

  /**
   * Get nessecary info when pointer is down.
   *
   * @func
   */
  function _mouseDown(event) {
    event.preventDefault();

    isMouseDown = true;
    lastClientX = event.clientX;
    lastClientY = event.clientY;

    if (settings.addCursor) {
      container.style.cursor = '-webkit-grabbing';
      container.style.cursor = 'grabbing';
    }
  }

  /**
   * Reset pointer flag.
   *
   * @func
   */
  function _mouseUp(event) {
    isMouseDown = false;

    if (settings.addCursor) {
      container.style.cursor = '-webkit-grab';
      container.style.cursor = 'grab';
    }
  }

  /**
   * Change scroll position when pointer moves.
   *
   * @func
   */
  function _mouseMove(event) {
    if (isMouseDown) {
      newScrollX = (-lastClientX + (lastClientX = event.clientX));
      newScrollY = (-lastClientY + (lastClientY = event.clientY));

      if (settings.dragX) container.scrollLeft -= newScrollX;
      if (settings.dragY) container.scrollTop -= newScrollY;
    }
  }

  /**
   * Expose Dragit public methods.
   */
  return {
    init,
    destroy
  }
}

/**
 * Export Dragit component.
 */
export default Dragit;

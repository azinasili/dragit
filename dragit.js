/**
 * Create a new Dragit instance.
 *
 * @class  Dragit
 * @param  {HTMLElement} selector - Element to initialise Dragit
 * @param  {Object} options       - Options to customize A11yTab instance
 * @return {Object}               - Public init(), and desyroy() methods
 */
function Dragit(el) {
  let isMouseDown = false;
  let dragged = [].slice.call(document.querySelectorAll(el));
  let lastClientX;
  let lastClientY;
  let newScrollX;
  let newScrollY;

  /**
   * Initialize Dragit.
   *
   * @method
   */
  function init() {
    dragged.forEach((item) => {
      item.addEventListener('mousedown', _mouseDown, false);
      window.addEventListener('mousemove', _mouseMove, false);
      window.addEventListener('mouseup', _mouseUp, false);
      window.addEventListener('mouseleave', _mouseUp, false);
    });
  }
  init();

  /**
   * Remove all added events.
   *
   * @method
   */
  function destroy() {
    dragged.forEach((item) => {
      item.removeEventListener('mousedown', _mouseDown, false);
      window.removeEventListener('mousemove', _mouseDown, false);
      window.removeEventListener('mouseup', _mouseUp, false);
      window.removeEventListener('mouseleave', _mouseUp, false);
    });
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
  }

  /**
   * Reset pointer flag.
   *
   * @func
   */
  function _mouseUp(event) {
    isMouseDown = false;
  }

  /**
   * Change scroll position when pointer moves.
   *
   * @func
   */
  function _mouseMove(event) {
    if (isMouseDown) {
      dragged.forEach((item) => {
        newScrollX = (-lastClientX + (lastClientX = event.clientX));
        newScrollY = (-lastClientY + (lastClientY = event.clientY));
        item.scrollLeft -= newScrollX;
        item.scrollTop -= newScrollY;
      });
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

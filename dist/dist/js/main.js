/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_navigation__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_content__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sitemap__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_search__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_form__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_img__ = __webpack_require__(15);
// Define globally exposed module objects
/* eslint-disable */

// Define local components







Object(__WEBPACK_IMPORTED_MODULE_0__components_navigation__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_1__components_content__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_2__components_sitemap__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_3__components_search__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_4__components_form__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_5__components_img__["a" /* default */])();
/* eslint-enable */

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* eslint-disable */

/* eslint-enable */

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var Dropdown = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('nav .dropdown');

  /**
   * Close dropdown, by default Bootstrap leaves it open. Also hide any child
   * menus with aria-hidden.
   */
  var closeMenu = function closeMenu() {
    // Close dropdown, by default Bootstrap leaves it open
    Dropdown.removeClass('open').find('.navbar-touch-caret').attr('aria-expanded', false).find('.fa-caret-up').toggleClass('fa-caret-up fa-caret-down');

    Dropdown.find('.dropdown-menu').attr('aria-hidden', true);
  };

  /**
   * Trigger a menu item to be "opened" or expanded
   */
  var openMenu = function openMenu($elem) {
    closeMenu();

    $elem.addClass('open');
    $elem.find('.navbar-touch-caret').attr('aria-expanded', true).find('.fa-caret-down').toggleClass('fa-caret-down fa-caret-up');

    $elem.find('.dropdown-menu').attr('aria-hidden', false);
  };

  /**
   * If screen width is Desktop return true. 752px according to Bootstrap @media queries,
   * but can be overridden by adding data-grid-float-breakpoint-width="1234" to your <body>
   * tag to override this.
   *
   * @returns {Boolean}
   */
  var isDesktop = function isDesktop() {
    var maxWidth = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').data('grid-float-breakpoint-width') || 752;
    return __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).width() > maxWidth || false;
  };

  /**
   * Handle the "hover" events to open and close the dropdown menus, and some keyboard
   * behaviours, such as "Esc" to close the menu, and spacebar and down key to open it.
   *
   * These keypress handlers differ from the others lower down in that these apply only
   * to navigation elements that have a dropdown menu associated.
   */
  Dropdown.hover(function handleOpenMenu() {
    if (isDesktop()) {
      openMenu(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
    }
  }, function () {
    if (isDesktop()) {
      closeMenu();
    }
  }).keydown(function (event) {
    switch (event.keyCode) {
      case 13:
        // Enter key
        closeMenu();
        break;
      case 32:
      case 40:
        // Space bar and "down" key
        // Stop the default behaviour (e.g. scrolling down)
        event.preventDefault();
        openMenu(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
        break;
      case 27:
        // ESC
        closeMenu();
        break;
      default:
        break;
    }
  });

  /**
   * Handler for key press events on navigation items - this allows the left and right
   * arrow keys to navigate through the lists.
   *
   * These handlers are for all navigation items, not just those with a dropdown associated.
   * NOTE: Be careful if adding new handlers here - be aware that they the previous handler
   * may also be fired, creating race conditions.
   */
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('nav .nav-item').keydown(function (event) {
    var $next = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).next().find('a');
    var $prev = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).prev().find('a');
    switch (event.keyCode) {
      case 39:
        // forward [>]
        if ($next.length) {
          $next.focus();
          closeMenu();
        }
        break;
      case 37:
        // backward [<]
        if ($prev.length) {
          $prev.focus();
          closeMenu();
        }
        break;
      default:
        break;
    }
  });

  /**
   * Handler for opening and closing the dropdown menus when you click on the caret toggle
   */
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.main-nav .navbar-nav').on('click', '.navbar-touch-caret', function (event) {
    event.stopPropagation();
    event.preventDefault();

    var $parent = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).parent('.dropdown');

    if ($parent.hasClass('open')) {
      closeMenu();
    } else {
      openMenu($parent);
    }
  });
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* eslint-disable */

/* eslint-enable */

/* harmony default export */ __webpack_exports__["a"] = (function () {
    // Maori language class to add lang type
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.maori').attr('lang', 'mi');

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.nonvisual-indicator').addClass('sr-only').removeClass('nonvisual-indicator');
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* eslint-disable */

/* eslint-enable */

/* harmony default export */ __webpack_exports__["a"] = (function () {
  /**
   * Return a cache identifier for storing sitemap data in local storage
   */
  function getCacheId(pageId) {
    return 'sitemap-cache-' + pageId;
  }

  /**
   * Sets some data to the sitemap for the given page
   */
  function setSitemapData(pageId, data) {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#children-' + pageId).html(data);
  }

  /**
   * Given a page ID and some sitemap data, load it into the DOM. Will load from
   * the local cache if available.
   */
  function loadSitemap(pageId) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var sitemapData = data;
    // Attempt to load from cache
    if (data === null && typeof Storage !== 'undefined' && sessionStorage.getItem(getCacheId(pageId)) !== null) {
      sitemapData = sessionStorage.getItem(getCacheId(pageId));
    }
    setSitemapData(pageId, sitemapData);
  }

  /**
   * Constructs a loading animation and sets it to the sitemap data
   */
  function setLoadingMessage($self, pageId) {
    var loadingMessage = $self.data('loading-message');
    setSitemapData(pageId, '<div class="sitemap-loading">\n        <i class="fa fa-spinner fa-pulse" aria-hidden="true"></i>\n        <span class="sr-only">' + loadingMessage + '</span>\n      </div>');
  }

  /**
   * Check for a cached copy of the sitemap data for the requested page, and return
   * whether or not to perform an AJAX request
   */
  function getPerformAjaxRequest($self, pageId) {
    if (typeof Storage !== 'undefined') {
      if (sessionStorage.getItem(getCacheId(pageId)) !== null) {
        loadSitemap(pageId);
        return false;
      }
    }
    setLoadingMessage($self, pageId);
    return true;
  }

  /**
   * Toggle the state of the sitemap section button, either expanded or collapsed
   */
  function toggleButton($button) {
    $button.toggleClass('collapsed').attr('aria-expanded', function (i, val) {
      return val !== 'true';
    });

    var $screenReader = $button.find('.sr-only');

    var screenReaderText = $screenReader.text();
    var screenReaderDataText = $screenReader.attr('data-collapse-text');

    $button.find('.toggleIco').toggleClass('fa-minus fa-plus');

    // Toggle text and data-collapse-text
    $screenReader.text(screenReaderDataText);
    $screenReader.attr('data-collapse-text', screenReaderText);
  }

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.sitemap-page').on('click', 'a.sitemap__collapse-action', function (e) {
    e.preventDefault();

    // @todo: Remove passing of reference to $(this) as per AirBnB style guide
    var $self = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
    var pageId = $self.data('page-id');

    toggleButton($self);
    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.ajax({
      cache: true,
      url: window.location.pathname + '/page/' + pageId,
      beforeSend: function beforeSend() {
        return getPerformAjaxRequest($self, pageId);
      },
      success: function success(data) {
        // Cache so we don't need to perform this AJAX request again
        if (typeof Storage !== 'undefined') {
          sessionStorage.setItem(getCacheId(pageId), data);
        }
        loadSitemap(pageId, data);
      }
    });
  });

  /**
   * Remove the aria-selected attributes that the paypal/bootstrap-accessibility
   * plugin adds to all sitemap toggle anchors.
   */
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ready(function () {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.sitemap__collapse-action').removeAttr('aria-selected');
  });
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* eslint-disable */

/* eslint-enable */

/* harmony default export */ __webpack_exports__["a"] = (function () {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('article[data-highlight]').each(function () {
    var text = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('highlight');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).highlight(text, { element: 'mark', className: 'highlight' });
  });
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* eslint-disable */

/* eslint-enable */

/* harmony default export */ __webpack_exports__["a"] = (function () {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('input.number').on('keyup', function () {
    var value = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).val();
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).val(value.replace(/[a-zA-Z]/g, ''));
  });

  /**
   * Apply a Bootstrap 3 form structure context to the jQuery validator plugin in userforms
   */
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.userform, .comments-holder-container form').each(function () {
    if (typeof __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).validate === 'function') {
      var validatorSettings = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).validate().settings;

      validatorSettings.highlight = function (element) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).closest('.form-group').addClass('has-error');
      };

      validatorSettings.unhighlight = function (element) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).closest('.form-group').removeClass('has-error');
      };

      validatorSettings.errorElement = 'span';
      validatorSettings.errorClass = 'help-block';

      validatorSettings.errorPlacement = function (error, element) {
        if (element.parent('.input-group').length || element.prop('type') === 'checkbox' || element.prop('type') === 'radio') {
          error.insertAfter(element.parent());
        } else {
          error.insertAfter(element);
        }
      };
    }
  });

  // Comments Module - Accesibility for Replies
  var $commentReplyLink = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.comment-reply-link');

  $commentReplyLink.click(function () {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).attr('aria-expanded', function (i, val) {
      return val !== 'true';
    });
  });
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* eslint-disable */

/* eslint-enable */

/* harmony default export */ __webpack_exports__["a"] = (function () {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#main img').addClass('img-responsive-whoohoo');

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#main div .captionImage.right').removeClass('right').addClass('pull-right');

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#main div .captionImage.left').removeClass('left').addClass('pull-left');

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#main div .captionImage.center').removeClass('center').addClass('center-block');

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#main img.center').removeClass('center').addClass('center-block');
});

/***/ })
/******/ ]);
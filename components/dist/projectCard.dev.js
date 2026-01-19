"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ProjectCard =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(ProjectCard, _HTMLElement);

  function ProjectCard() {
    _classCallCheck(this, ProjectCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProjectCard).apply(this, arguments));
  }

  _createClass(ProjectCard, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var image = this.getAttribute("image");
      var title = this.getAttribute("title");
      var description = this.getAttribute("description");
      var href = this.getAttribute("href");
      var titleId = "".concat(this.id, "-title");
      var descId = "".concat(this.id, "-description");
      this.setAttribute("role", "article");
      this.setAttribute("aria-labelledby", titleId);
      this.setAttribute("aria-describedby", descId);
      this.innerHTML = "\n      <img\n        src=\"".concat(image, "\"\n        alt=\"\"\n        aria-hidden=\"true\"\n        class=\"project-image\"\n      />\n\n      <div class=\"description\">\n        <h3 id=\"").concat(titleId, "\">").concat(title, "</h3>\n        <p id=\"").concat(descId, "\">").concat(description, "</p>\n      </div>\n\n      <div class=\"links\">\n        <a\n          href=\"").concat(href, "\"\n          target=\"_blank\"\n          rel=\"noopener\"\n          aria-label=\"View ").concat(title, " project on GitHub (opens in a new tab)\"\n        >\n          <img\n            src=\"https://cdn.simpleicons.org/github/ffffff\"\n            alt=\"\"\n            aria-hidden=\"true\"\n            class=\"icon\"\n          />\n          <span>View on GitHub</span>\n        </a>\n      </div>\n    ");
    }
  }]);

  return ProjectCard;
}(_wrapNativeSuper(HTMLElement));

customElements.define("project-card", ProjectCard);
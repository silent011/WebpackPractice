module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/render.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/post.md":
/***/ (function(module, exports) {

module.exports = {"title":"My first post","author":"Myself","__content":"<h1 id=\"this-is-my-markdown-text\">This is my markdown text</h1>\n<p>This is my paragraph in md. Some more txt</p>\n"}

/***/ }),

/***/ "./src/components/About.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        "section",
        { className: "about" },
        _react2.default.createElement(
            "h1",
            null,
            "About"
        ),
        _react2.default.createElement(
            "p",
            null,
            "Hi, This is my webpack training website"
        )
    );
};

/***/ }),

/***/ "./src/components/Gallery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        "section",
        { className: "gallery" },
        _react2.default.createElement(
            "h1",
            null,
            "Gallry "
        ),
        _react2.default.createElement(
            "p",
            null,
            "Hi, This is the gallery page"
        )
    );
};

/***/ }),

/***/ "./src/components/Profile.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__("babel-runtime/core-js/object/entries");

var _entries2 = _interopRequireDefault(_entries);

var _create = __webpack_require__("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _post = __webpack_require__("./data/post.md");

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Profile = function (_Component) {
    (0, _inherits3.default)(Profile, _Component);

    function Profile(props) {
        (0, _classCallCheck3.default)(this, Profile);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Profile.__proto__ || (0, _getPrototypeOf2.default)(Profile)).call(this, props));

        _this.state = {
            counter: 0
        };

        _this.inc = _this.inc.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Profile, [{
        key: 'inc',
        value: function inc() {
            this.changeState({ counter: this.state.counter + 1 });
        }
    }, {
        key: 'changeState',
        value: function changeState() {
            var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.setState(function (prevState) {
                var newState = (0, _create2.default)(prevState);

                (0, _entries2.default)(obj).forEach(function (_ref) {
                    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                        key = _ref2[0],
                        val = _ref2[1];

                    newState[key] = val;
                });

                return newState;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'section',
                    { className: 'profile' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Heading 1'
                    ),
                    _react2.default.createElement('img', { src: __webpack_require__("./src/images/350288-tool.jpg"), alt: '' })
                ),
                _react2.default.createElement(
                    'section',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Heading 2'
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'post' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        _post2.default.title
                    ),
                    _react2.default.createElement(
                        'h4',
                        null,
                        _post2.default.author
                    ),
                    _react2.default.createElement('div', { dangerouslySetInnerHTML: {
                            __html: _post2.default.__content
                        } })
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'counter' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Counter: ',
                        this.state.counter
                    ),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.inc },
                        'Increment'
                    )
                )
            );
        }
    }]);
    return Profile;
}(_react.Component);

exports.default = Profile;

/***/ }),

/***/ "./src/components/Routes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__("react-router-dom");

var _Profile = __webpack_require__("./src/components/Profile.js");

var _Profile2 = _interopRequireDefault(_Profile);

var _Gallery = __webpack_require__("./src/components/Gallery.js");

var _Gallery2 = _interopRequireDefault(_Gallery);

var _About = __webpack_require__("./src/components/About.js");

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'nav',
            null,
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/' },
                'Home'
            ),
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/about' },
                'About'
            ),
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/gallery' },
                'Gallery'
            )
        ),
        _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Profile2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _About2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/gallery', component: _Gallery2.default })
        )
    );
};

/***/ }),

/***/ "./src/images/350288-tool.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/350288-tool-dfff6889.jpg";

/***/ }),

/***/ "./src/server/render.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__("react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _reactRouter = __webpack_require__("react-router");

var _Routes = __webpack_require__("./src/components/Routes.js");

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return function (req, res) {
        res.send('<html>\n             <head>\n                 <title>My title</title>\n                 <link href="main.css" rel="stylesheet"/>\n             </head>\n             <body>\n                 <div id="react-root">' + _server2.default.renderToString(_react2.default.createElement(
            _reactRouter.StaticRouter,
            { location: req.url, context: {} },
            _react2.default.createElement(_Routes2.default, null)
        )) + '</div>\n             </body>\n             <script src="vendor-bundle.js"></script>\n             <script src="main-bundle.js"></script>\n         </html>');
    };
};
// import AppRoot from '../components/AppRoot'

/***/ }),

/***/ "babel-runtime/core-js/object/create":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/create");

/***/ }),

/***/ "babel-runtime/core-js/object/entries":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/entries");

/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router":
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
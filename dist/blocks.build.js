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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__extensions_ubiquitous_blocks__ = __webpack_require__(/*! ./extensions/ubiquitous-blocks */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n// Extensions\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbi8vIEV4dGVuc2lvbnNcbmltcG9ydCAnLi9leHRlbnNpb25zL3ViaXF1aXRvdXMtYmxvY2tzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************************************!*\
  !*** ./src/extensions/ubiquitous-blocks.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controls_post_types__ = __webpack_require__(/*! ./controls/post-types */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controls_block_position__ = __webpack_require__(/*! ./controls/block-position */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controls_block_order__ = __webpack_require__(/*! ./controls/block-order */ 6);\n/**\n * Internal dependencies\n */\n\n\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar registerPlugin = wp.plugins.registerPlugin;\nvar PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;\n\n// Checks if the post type is for blocks.\n\nfunction isBlockPostType() {\n\tvar getPostType = wp.data.select('core/editor').getCurrentPostType(); // Gets the current post type.\n\n\treturn getPostType === 'wp_block' ? true : false;\n}\n\n// Register the panel.\nregisterPlugin('ubiquitous-document-setting-panel', {\n\trender: function render() {\n\t\treturn isBlockPostType() && wp.element.createElement(\n\t\t\tPluginDocumentSettingPanel,\n\t\t\t{\n\t\t\t\tname: 'ubiquitous-document-settings-panel',\n\t\t\t\ttitle: __('Ubiquitous Blocks', 'ubiquitous-blocks'),\n\t\t\t\tinitialOpen: true,\n\t\t\t\tclassName: 'ubiquitous-document-settings-panel'\n\t\t\t},\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__controls_post_types__[\"a\" /* default */], null),\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__controls_block_position__[\"a\" /* default */], null),\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__controls_block_order__[\"a\" /* default */], null)\n\t\t);\n\t},\n\ticon: 'editor-table' // Can if you want place SVG code here.\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9leHRlbnNpb25zL3ViaXF1aXRvdXMtYmxvY2tzLmpzPzUxYjMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFBvc3RUeXBlcyBmcm9tICcuL2NvbnRyb2xzL3Bvc3QtdHlwZXMnO1xuaW1wb3J0IEJsb2NrUG9zaXRpb24gZnJvbSAnLi9jb250cm9scy9ibG9jay1wb3NpdGlvbic7XG5pbXBvcnQgQmxvY2tPcmRlciBmcm9tICcuL2NvbnRyb2xzL2Jsb2NrLW9yZGVyJztcblxuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJQbHVnaW4gPSB3cC5wbHVnaW5zLnJlZ2lzdGVyUGx1Z2luO1xudmFyIFBsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsID0gd3AuZWRpdFBvc3QuUGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWw7XG5cbi8vIENoZWNrcyBpZiB0aGUgcG9zdCB0eXBlIGlzIGZvciBibG9ja3MuXG5cbmZ1bmN0aW9uIGlzQmxvY2tQb3N0VHlwZSgpIHtcblx0dmFyIGdldFBvc3RUeXBlID0gd3AuZGF0YS5zZWxlY3QoJ2NvcmUvZWRpdG9yJykuZ2V0Q3VycmVudFBvc3RUeXBlKCk7IC8vIEdldHMgdGhlIGN1cnJlbnQgcG9zdCB0eXBlLlxuXG5cdHJldHVybiBnZXRQb3N0VHlwZSA9PT0gJ3dwX2Jsb2NrJyA/IHRydWUgOiBmYWxzZTtcbn1cblxuLy8gUmVnaXN0ZXIgdGhlIHBhbmVsLlxucmVnaXN0ZXJQbHVnaW4oJ3ViaXF1aXRvdXMtZG9jdW1lbnQtc2V0dGluZy1wYW5lbCcsIHtcblx0cmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0cmV0dXJuIGlzQmxvY2tQb3N0VHlwZSgpICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFBsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsLFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAndWJpcXVpdG91cy1kb2N1bWVudC1zZXR0aW5ncy1wYW5lbCcsXG5cdFx0XHRcdHRpdGxlOiBfXygnVWJpcXVpdG91cyBCbG9ja3MnLCAndWJpcXVpdG91cy1ibG9ja3MnKSxcblx0XHRcdFx0aW5pdGlhbE9wZW46IHRydWUsXG5cdFx0XHRcdGNsYXNzTmFtZTogJ3ViaXF1aXRvdXMtZG9jdW1lbnQtc2V0dGluZ3MtcGFuZWwnXG5cdFx0XHR9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBvc3RUeXBlcywgbnVsbCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQmxvY2tQb3NpdGlvbiwgbnVsbCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQmxvY2tPcmRlciwgbnVsbClcblx0XHQpO1xuXHR9LFxuXHRpY29uOiAnZWRpdG9yLXRhYmxlJyAvLyBDYW4gaWYgeW91IHdhbnQgcGxhY2UgU1ZHIGNvZGUgaGVyZS5cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2V4dGVuc2lvbnMvdWJpcXVpdG91cy1ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************************!*\
  !*** ./src/extensions/block-positions.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\n\n\nvar blockPositions = [{\n\tlabel: __('Select Position', 'ubiquitous-blocks'),\n\tvalue: '',\n\tdisabled: true\n}, {\n\tlabel: __('Before all content', 'ubiquitous-blocks'),\n\tvalue: 'top'\n}, {\n\tlabel: __('After all content', 'ubiquitous-blocks'),\n\tvalue: 'bottom'\n}];\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (blockPositions);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9leHRlbnNpb25zL2Jsb2NrLXBvc2l0aW9ucy5qcz8zNWE0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG52YXIgX18gPSB3cC5pMThuLl9fO1xuXG5cbnZhciBibG9ja1Bvc2l0aW9ucyA9IFt7XG5cdGxhYmVsOiBfXygnU2VsZWN0IFBvc2l0aW9uJywgJ3ViaXF1aXRvdXMtYmxvY2tzJyksXG5cdHZhbHVlOiAnJyxcblx0ZGlzYWJsZWQ6IHRydWVcbn0sIHtcblx0bGFiZWw6IF9fKCdCZWZvcmUgYWxsIGNvbnRlbnQnLCAndWJpcXVpdG91cy1ibG9ja3MnKSxcblx0dmFsdWU6ICd0b3AnXG59LCB7XG5cdGxhYmVsOiBfXygnQWZ0ZXIgYWxsIGNvbnRlbnQnLCAndWJpcXVpdG91cy1ibG9ja3MnKSxcblx0dmFsdWU6ICdib3R0b20nXG59XTtcblxuZXhwb3J0IGRlZmF1bHQgYmxvY2tQb3NpdGlvbnM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZXh0ZW5zaW9ucy9ibG9jay1wb3NpdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***********************************************!*\
  !*** ./src/extensions/controls/post-types.js ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__available_post_types__ = __webpack_require__(/*! ../available-post-types */ 4);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * Internal dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar _wp$data = wp.data,\n    withSelect = _wp$data.withSelect,\n    withDispatch = _wp$data.withDispatch;\nvar SelectControl = wp.components.SelectControl;\n\n// Post Types\n\nvar PostTypes = withDispatch(function (dispatch, props) {\n\treturn {\n\t\tupdateBlockPostTypes: function updateBlockPostTypes(value) {\n\t\t\tdispatch('core/editor').editPost({\n\t\t\t\tmeta: _defineProperty({}, '_ubiquitous_post_types', JSON.stringify(value))\n\t\t\t});\n\t\t}\n\t};\n})(withSelect(function (select, props) {\n\treturn _defineProperty({}, '_ubiquitous_post_types', select('core/editor').getEditedPostAttribute('meta')['_ubiquitous_post_types'] ? JSON.parse(select('core/editor').getEditedPostAttribute('meta')['_ubiquitous_post_types']) : {});\n})(function (props) {\n\treturn wp.element.createElement(SelectControl, {\n\t\tmultiple: true,\n\t\tlabel: __('Post Types', 'ubiquitous-blocks'),\n\t\tvalue: props['_ubiquitous_post_types'],\n\t\toptions: __WEBPACK_IMPORTED_MODULE_0__available_post_types__[\"a\" /* default */],\n\t\tonChange: function onChange(value) {\n\t\t\treturn props.updateBlockPostTypes(value);\n\t\t},\n\t\thelp: __('Select the post types this reusable block will be shown on.', 'ubiquitous-blocks')\n\t});\n}));\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (PostTypes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9leHRlbnNpb25zL2NvbnRyb2xzL3Bvc3QtdHlwZXMuanM/MzU3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgYXZhaWxhYmxlUG9zdFR5cGVzIGZyb20gJy4uL2F2YWlsYWJsZS1wb3N0LXR5cGVzJztcblxuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgX3dwJGRhdGEgPSB3cC5kYXRhLFxuICAgIHdpdGhTZWxlY3QgPSBfd3AkZGF0YS53aXRoU2VsZWN0LFxuICAgIHdpdGhEaXNwYXRjaCA9IF93cCRkYXRhLndpdGhEaXNwYXRjaDtcbnZhciBTZWxlY3RDb250cm9sID0gd3AuY29tcG9uZW50cy5TZWxlY3RDb250cm9sO1xuXG4vLyBQb3N0IFR5cGVzXG5cbnZhciBQb3N0VHlwZXMgPSB3aXRoRGlzcGF0Y2goZnVuY3Rpb24gKGRpc3BhdGNoLCBwcm9wcykge1xuXHRyZXR1cm4ge1xuXHRcdHVwZGF0ZUJsb2NrUG9zdFR5cGVzOiBmdW5jdGlvbiB1cGRhdGVCbG9ja1Bvc3RUeXBlcyh2YWx1ZSkge1xuXHRcdFx0ZGlzcGF0Y2goJ2NvcmUvZWRpdG9yJykuZWRpdFBvc3Qoe1xuXHRcdFx0XHRtZXRhOiBfZGVmaW5lUHJvcGVydHkoe30sICdfdWJpcXVpdG91c19wb3N0X3R5cGVzJywgSlNPTi5zdHJpbmdpZnkodmFsdWUpKVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xufSkod2l0aFNlbGVjdChmdW5jdGlvbiAoc2VsZWN0LCBwcm9wcykge1xuXHRyZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCAnX3ViaXF1aXRvdXNfcG9zdF90eXBlcycsIHNlbGVjdCgnY29yZS9lZGl0b3InKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCdtZXRhJylbJ191YmlxdWl0b3VzX3Bvc3RfdHlwZXMnXSA/IEpTT04ucGFyc2Uoc2VsZWN0KCdjb3JlL2VkaXRvcicpLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoJ21ldGEnKVsnX3ViaXF1aXRvdXNfcG9zdF90eXBlcyddKSA6IHt9KTtcbn0pKGZ1bmN0aW9uIChwcm9wcykge1xuXHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbnRyb2wsIHtcblx0XHRtdWx0aXBsZTogdHJ1ZSxcblx0XHRsYWJlbDogX18oJ1Bvc3QgVHlwZXMnLCAndWJpcXVpdG91cy1ibG9ja3MnKSxcblx0XHR2YWx1ZTogcHJvcHNbJ191YmlxdWl0b3VzX3Bvc3RfdHlwZXMnXSxcblx0XHRvcHRpb25zOiBhdmFpbGFibGVQb3N0VHlwZXMsXG5cdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gcHJvcHMudXBkYXRlQmxvY2tQb3N0VHlwZXModmFsdWUpO1xuXHRcdH0sXG5cdFx0aGVscDogX18oJ1NlbGVjdCB0aGUgcG9zdCB0eXBlcyB0aGlzIHJldXNhYmxlIGJsb2NrIHdpbGwgYmUgc2hvd24gb24uJywgJ3ViaXF1aXRvdXMtYmxvY2tzJylcblx0fSk7XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RUeXBlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9leHRlbnNpb25zL2NvbnRyb2xzL3Bvc3QtdHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!************************************************!*\
  !*** ./src/extensions/available-post-types.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\n//const { apiFetch } = wp.apiFetch;\n\nvar availablePostTypes = [{\n\tlabel: __('Posts', 'ubiquitous-blocks'),\n\tvalue: 'post'\n}, {\n\tlabel: __('Pages', 'ubiquitous-blocks'),\n\tvalue: 'page'\n}];\n\n/*const availablePostTypes = [];\n\nconst allPostTypes = apiFetch( { path: '/ubiquitous/v1/post-types' } ).then ( results => {\n\t$.each( results, function( key, val ) {\n\t\tavailablePostTypes.push({ label: val.label, value: val.value });\n\t});\n\treturn availablePostTypes;\n});*/\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (availablePostTypes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9leHRlbnNpb25zL2F2YWlsYWJsZS1wb3N0LXR5cGVzLmpzP2E4M2UiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbnZhciBfXyA9IHdwLmkxOG4uX187XG4vL2NvbnN0IHsgYXBpRmV0Y2ggfSA9IHdwLmFwaUZldGNoO1xuXG52YXIgYXZhaWxhYmxlUG9zdFR5cGVzID0gW3tcblx0bGFiZWw6IF9fKCdQb3N0cycsICd1YmlxdWl0b3VzLWJsb2NrcycpLFxuXHR2YWx1ZTogJ3Bvc3QnXG59LCB7XG5cdGxhYmVsOiBfXygnUGFnZXMnLCAndWJpcXVpdG91cy1ibG9ja3MnKSxcblx0dmFsdWU6ICdwYWdlJ1xufV07XG5cbi8qY29uc3QgYXZhaWxhYmxlUG9zdFR5cGVzID0gW107XG5cbmNvbnN0IGFsbFBvc3RUeXBlcyA9IGFwaUZldGNoKCB7IHBhdGg6ICcvdWJpcXVpdG91cy92MS9wb3N0LXR5cGVzJyB9ICkudGhlbiAoIHJlc3VsdHMgPT4ge1xuXHQkLmVhY2goIHJlc3VsdHMsIGZ1bmN0aW9uKCBrZXksIHZhbCApIHtcblx0XHRhdmFpbGFibGVQb3N0VHlwZXMucHVzaCh7IGxhYmVsOiB2YWwubGFiZWwsIHZhbHVlOiB2YWwudmFsdWUgfSk7XG5cdH0pO1xuXHRyZXR1cm4gYXZhaWxhYmxlUG9zdFR5cGVzO1xufSk7Ki9cblxuZXhwb3J0IGRlZmF1bHQgYXZhaWxhYmxlUG9zdFR5cGVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2V4dGVuc2lvbnMvYXZhaWxhYmxlLXBvc3QtdHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!***************************************************!*\
  !*** ./src/extensions/controls/block-position.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_positions__ = __webpack_require__(/*! ../block-positions */ 2);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * Internal dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar _wp$data = wp.data,\n    withSelect = _wp$data.withSelect,\n    withDispatch = _wp$data.withDispatch;\nvar SelectControl = wp.components.SelectControl;\n\n// Block Position\n\nvar BlockPosition = withDispatch(function (dispatch, props) {\n\treturn {\n\t\tupdateBlockPosition: function updateBlockPosition(value) {\n\t\t\tdispatch('core/editor').editPost({\n\t\t\t\tmeta: _defineProperty({}, '_ubiquitous_position', value)\n\t\t\t});\n\t\t}\n\t};\n})(withSelect(function (select, props) {\n\treturn _defineProperty({}, '_ubiquitous_position', select('core/editor').getEditedPostAttribute('meta')['_ubiquitous_position']);\n})(function (props) {\n\treturn wp.element.createElement(SelectControl, {\n\t\tlabel: __('Position', 'ubiquitous-blocks'),\n\t\tvalue: props['_ubiquitous_position'],\n\t\toptions: __WEBPACK_IMPORTED_MODULE_0__block_positions__[\"a\" /* default */],\n\t\tonChange: function onChange(value) {\n\t\t\treturn props.updateBlockPosition(value);\n\t\t},\n\t\thelp: __('Select where you want the reusable block to display of every post type you selected.', 'ubiquitous-blocks')\n\t});\n}));\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (BlockPosition);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9leHRlbnNpb25zL2NvbnRyb2xzL2Jsb2NrLXBvc2l0aW9uLmpzP2FlYTYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IGJsb2NrUG9zaXRpb25zIGZyb20gJy4uL2Jsb2NrLXBvc2l0aW9ucyc7XG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIF93cCRkYXRhID0gd3AuZGF0YSxcbiAgICB3aXRoU2VsZWN0ID0gX3dwJGRhdGEud2l0aFNlbGVjdCxcbiAgICB3aXRoRGlzcGF0Y2ggPSBfd3AkZGF0YS53aXRoRGlzcGF0Y2g7XG52YXIgU2VsZWN0Q29udHJvbCA9IHdwLmNvbXBvbmVudHMuU2VsZWN0Q29udHJvbDtcblxuLy8gQmxvY2sgUG9zaXRpb25cblxudmFyIEJsb2NrUG9zaXRpb24gPSB3aXRoRGlzcGF0Y2goZnVuY3Rpb24gKGRpc3BhdGNoLCBwcm9wcykge1xuXHRyZXR1cm4ge1xuXHRcdHVwZGF0ZUJsb2NrUG9zaXRpb246IGZ1bmN0aW9uIHVwZGF0ZUJsb2NrUG9zaXRpb24odmFsdWUpIHtcblx0XHRcdGRpc3BhdGNoKCdjb3JlL2VkaXRvcicpLmVkaXRQb3N0KHtcblx0XHRcdFx0bWV0YTogX2RlZmluZVByb3BlcnR5KHt9LCAnX3ViaXF1aXRvdXNfcG9zaXRpb24nLCB2YWx1ZSlcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcbn0pKHdpdGhTZWxlY3QoZnVuY3Rpb24gKHNlbGVjdCwgcHJvcHMpIHtcblx0cmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgJ191YmlxdWl0b3VzX3Bvc2l0aW9uJywgc2VsZWN0KCdjb3JlL2VkaXRvcicpLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoJ21ldGEnKVsnX3ViaXF1aXRvdXNfcG9zaXRpb24nXSk7XG59KShmdW5jdGlvbiAocHJvcHMpIHtcblx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTZWxlY3RDb250cm9sLCB7XG5cdFx0bGFiZWw6IF9fKCdQb3NpdGlvbicsICd1YmlxdWl0b3VzLWJsb2NrcycpLFxuXHRcdHZhbHVlOiBwcm9wc1snX3ViaXF1aXRvdXNfcG9zaXRpb24nXSxcblx0XHRvcHRpb25zOiBibG9ja1Bvc2l0aW9ucyxcblx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcblx0XHRcdHJldHVybiBwcm9wcy51cGRhdGVCbG9ja1Bvc2l0aW9uKHZhbHVlKTtcblx0XHR9LFxuXHRcdGhlbHA6IF9fKCdTZWxlY3Qgd2hlcmUgeW91IHdhbnQgdGhlIHJldXNhYmxlIGJsb2NrIHRvIGRpc3BsYXkgb2YgZXZlcnkgcG9zdCB0eXBlIHlvdSBzZWxlY3RlZC4nLCAndWJpcXVpdG91cy1ibG9ja3MnKVxuXHR9KTtcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tQb3NpdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9leHRlbnNpb25zL2NvbnRyb2xzL2Jsb2NrLXBvc2l0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!************************************************!*\
  !*** ./src/extensions/controls/block-order.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar _wp$data = wp.data,\n    withSelect = _wp$data.withSelect,\n    withDispatch = _wp$data.withDispatch;\nvar TextControl = wp.components.TextControl;\n\n// Block Order\n\nvar BlockOrder = withDispatch(function (dispatch, props) {\n\treturn {\n\t\tupdateBlockOrder: function updateBlockOrder(value) {\n\t\t\tdispatch('core/editor').editPost({\n\t\t\t\tmeta: _defineProperty({}, '_ubiquitous_order_number', value)\n\t\t\t});\n\t\t}\n\t};\n})(withSelect(function (select, props) {\n\treturn _defineProperty({}, '_ubiquitous_order_number', select('core/editor').getEditedPostAttribute('meta')['_ubiquitous_order_number']);\n})(function (props) {\n\treturn wp.element.createElement(TextControl, {\n\t\tlabel: __('Order Number', 'ubiquitous-blocks'),\n\t\tid: 'ubiquitous-order-number',\n\t\thelp: __('Enter the number you wish this reusable block to show in order of.', 'ubiquitouse-blocks'),\n\t\ttype: 'number',\n\t\tvalue: props['_ubiquitous_order_number'],\n\t\tonChange: function onChange(value) {\n\t\t\treturn props.updateBlockOrder(value);\n\t\t},\n\t\tplaceholder: 0,\n\t\tmin: 0,\n\t\tstep: 1,\n\t\tmax: 1000\n\t});\n}));\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (BlockOrder);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9leHRlbnNpb25zL2NvbnRyb2xzL2Jsb2NrLW9yZGVyLmpzP2ZhY2EiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgX3dwJGRhdGEgPSB3cC5kYXRhLFxuICAgIHdpdGhTZWxlY3QgPSBfd3AkZGF0YS53aXRoU2VsZWN0LFxuICAgIHdpdGhEaXNwYXRjaCA9IF93cCRkYXRhLndpdGhEaXNwYXRjaDtcbnZhciBUZXh0Q29udHJvbCA9IHdwLmNvbXBvbmVudHMuVGV4dENvbnRyb2w7XG5cbi8vIEJsb2NrIE9yZGVyXG5cbnZhciBCbG9ja09yZGVyID0gd2l0aERpc3BhdGNoKGZ1bmN0aW9uIChkaXNwYXRjaCwgcHJvcHMpIHtcblx0cmV0dXJuIHtcblx0XHR1cGRhdGVCbG9ja09yZGVyOiBmdW5jdGlvbiB1cGRhdGVCbG9ja09yZGVyKHZhbHVlKSB7XG5cdFx0XHRkaXNwYXRjaCgnY29yZS9lZGl0b3InKS5lZGl0UG9zdCh7XG5cdFx0XHRcdG1ldGE6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgJ191YmlxdWl0b3VzX29yZGVyX251bWJlcicsIHZhbHVlKVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xufSkod2l0aFNlbGVjdChmdW5jdGlvbiAoc2VsZWN0LCBwcm9wcykge1xuXHRyZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCAnX3ViaXF1aXRvdXNfb3JkZXJfbnVtYmVyJywgc2VsZWN0KCdjb3JlL2VkaXRvcicpLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoJ21ldGEnKVsnX3ViaXF1aXRvdXNfb3JkZXJfbnVtYmVyJ10pO1xufSkoZnVuY3Rpb24gKHByb3BzKSB7XG5cdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcblx0XHRsYWJlbDogX18oJ09yZGVyIE51bWJlcicsICd1YmlxdWl0b3VzLWJsb2NrcycpLFxuXHRcdGlkOiAndWJpcXVpdG91cy1vcmRlci1udW1iZXInLFxuXHRcdGhlbHA6IF9fKCdFbnRlciB0aGUgbnVtYmVyIHlvdSB3aXNoIHRoaXMgcmV1c2FibGUgYmxvY2sgdG8gc2hvdyBpbiBvcmRlciBvZi4nLCAndWJpcXVpdG91c2UtYmxvY2tzJyksXG5cdFx0dHlwZTogJ251bWJlcicsXG5cdFx0dmFsdWU6IHByb3BzWydfdWJpcXVpdG91c19vcmRlcl9udW1iZXInXSxcblx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcblx0XHRcdHJldHVybiBwcm9wcy51cGRhdGVCbG9ja09yZGVyKHZhbHVlKTtcblx0XHR9LFxuXHRcdHBsYWNlaG9sZGVyOiAwLFxuXHRcdG1pbjogMCxcblx0XHRzdGVwOiAxLFxuXHRcdG1heDogMTAwMFxuXHR9KTtcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tPcmRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9leHRlbnNpb25zL2NvbnRyb2xzL2Jsb2NrLW9yZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);
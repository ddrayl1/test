/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\n// 1\r\n  //                npm run build\r\nlet tema =document.querySelector('.q')//           npm run build\r\nlet body =document.querySelector('.qw')//          npm run build\r\nlet btn =document.querySelector('.qwe')\r\nlet a = document.querySelector('.a')\r\n\r\nlet post = []\r\n\r\n\r\nbtn.addEventListener('click', post1)\r\n\r\n\r\nfunction post1(){  \r\nlet check1 = tema.value.replace(/^\\s+/, \"\")\r\nlet check2 = body.value.replace(/^\\s+/, \"\")\r\nconsole.log(check1.length)\r\n\r\nif(check1 == \"\" || check2 == \"\" ){\r\n    alert(\"заполните данные\")\r\n}\r\nelse{\r\n    let obj = {\r\n        tem:'',\r\n        dat: '',\r\n        bod:'',\r\n        nan:'',\r\n        but:''\r\n    }\r\n    let Data = new Date()\r\n    let mont = Data.getMonth()\r\n    let day = Data.getDate()\r\n    let Year = Data.getFullYear()\r\n    let Hour = Data.getHours()\r\n    let Minu = Data.getMinutes()\r\n    let Seco = Data.getSeconds()\r\n    mont = mont + 1\r\n    mont = String(mont)\r\n    day = String(day)\r\n    Year = String(Year)\r\n    Hour = String(Hour)\r\n    Minu = String(Minu)\r\n    Seco = String(Seco)\r\n\r\n    obj.tem = tema.value\r\n    obj.bod = body.value\r\n    \r\n    if(Seco.length < 2){\r\n        obj.dat = Year +\"/\"+ mont +\"/\"+ day +\" \"+ Hour +\":\"+ Minu +\":\"+ \"0\" + Seco        \r\n    } \r\n    else if(Minu.length < 2){\r\n        obj.dat = Year +\"/\"+ mont +\"/\"+ day +\" \"+ Hour +\":\"+ \"0\" + Minu +\":\"+ Seco        \r\n    } \r\n    else if(Hour.lenght < 2){\r\n        obj.dat = Year +\"/\"+ mont +\"/\"+ day +\" \"+ \"0\" + Hour +\":\"+ Minu +\":\"+ Seco                \r\n    }\r\n    else if (Seco.length < 2 && Minu.length < 2 ){\r\n        obj.dat = Year +\"/\"+ mont +\"/\"+ day +\" \"+ Hour +\":\"+ \"0\" + Minu +\":\"+ \"0\" + Seco\r\n    }\r\n    else if (Hour.length < 2 && Minu.length < 2 ){\r\n        obj.dat = Year +\"/\"+ mont +\"/\"+ day +\" \"+ \"0\" + Hour +\":\"+ \"0\" + Minu +\":\"+ Seco\r\n    }\r\n    else if (Hour.length < 2 && Seco.length < 2 ){\r\n        obj.dat = Year +\"/\"+ mont +\"/\"+ day +\" \"+ \"0\" + Hour +\":\"+Minu +\":\"+ \"0\" +  Seco\r\n    }\r\n    else{\r\n        obj.dat = Year +\"/\"+ mont +\"/\"+ day +\" \"+ Hour +\":\"+ Minu +\":\"+ Seco        \r\n    }\r\n    obj.nan = (0,nanoid__WEBPACK_IMPORTED_MODULE_0__.nanoid)()\r\n    post.push(obj)\r\n    console.log(post)\r\n    pereb()    \r\n}\r\n}\r\n\r\nfunction pereb(){\r\n    for(let posts of post){\r\n        let div = document.createElement('div')\r\n        div.className = 'divv'\r\n        a.appendChild(div)\r\n   let tem = document.createElement('H3')\r\n   let dat = document.createElement('p')\r\n   let bod = document.createElement('p')\r\n   let nan = document.createElement('p')\r\n   let but = document.createElement('button')\r\n    tem.textContent = posts.tem\r\n    bod.textContent = posts.bod\r\n    dat.textContent = posts.dat\r\n    nan.textContent = posts.nan\r\n    nan.className = 'HIDDEN'\r\n    but.textContent = \"DELETE\"\r\n    but.className = 'delete'\r\n    but.id = nan.textContent\r\n    div.appendChild(tem)\r\n    div.appendChild(dat)\r\n    div.appendChild(bod)\r\n    div.appendChild(nan)\r\n    div.appendChild(but)        //npm run buildnpm run buildnpm run build     npm run build\r\n    post = []\r\nlet btnr = document.querySelectorAll('.delete')    \r\nfor(let elem of btnr){\r\nelem.addEventListener('click',del)\r\n    \r\n}\r\n\r\n\r\n}\r\n}\r\n\r\n\r\nfunction del() {\r\n    this.parentElement.remove()\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   customAlphabet: () => (/* binding */ customAlphabet),\n/* harmony export */   customRandom: () => (/* binding */ customRandom),\n/* harmony export */   nanoid: () => (/* binding */ nanoid),\n/* harmony export */   random: () => (/* binding */ random),\n/* harmony export */   urlAlphabet: () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)\n/* harmony export */ });\n/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ \"./node_modules/nanoid/url-alphabet/index.js\");\n\n\nlet random = bytes => crypto.getRandomValues(new Uint8Array(bytes))\nlet customRandom = (alphabet, defaultSize, getRandom) => {\n  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1\n  let step = -~((1.6 * mask * defaultSize) / alphabet.length)\n  return (size = defaultSize) => {\n    let id = ''\n    while (true) {\n      let bytes = getRandom(step)\n      let j = step\n      while (j--) {\n        id += alphabet[bytes[j] & mask] || ''\n        if (id.length === size) return id\n      }\n    }\n  }\n}\nlet customAlphabet = (alphabet, size = 21) =>\n  customRandom(alphabet, size, random)\nlet nanoid = (size = 21) => {\n  let id = ''\n  let bytes = crypto.getRandomValues(new Uint8Array(size))\n  while (size--) {\n    id += _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet[bytes[size] & 63]\n  }\n  return id\n}\n\n\n//# sourceURL=webpack:///./node_modules/nanoid/index.browser.js?");

/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   urlAlphabet: () => (/* binding */ urlAlphabet)\n/* harmony export */ });\nconst urlAlphabet =\n  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'\n\n\n//# sourceURL=webpack:///./node_modules/nanoid/url-alphabet/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
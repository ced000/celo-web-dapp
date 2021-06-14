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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const products = [\r\n    {\r\n      name: \"Giant BBQ\",\r\n      image: \"https://i.imgur.com/yPreV19.png\",\r\n      description: `Grilled chicken, beef, fish, sausages, bacon, \r\n        vegetables served with chips.`,\r\n      location: \"Kimironko Market\",\r\n      owner: \"0x32Be343B94f860124dC4fEe278FDCBD38C102D88\",\r\n      price: 3,\r\n      sold: 27,\r\n      index: 0,\r\n    },\r\n    {\r\n      name: \"BBQ Chicken\",\r\n      image: \"https://i.imgur.com/NMEzoYb.png\",\r\n      description: `French fries and grilled chicken served with gacumbari \r\n        and avocados with cheese.`,\r\n      location: \"Afrika Fresh KG 541 St\",\r\n      owner: \"0x3275B7F400cCdeBeDaf0D8A9a7C8C1aBE2d747Ea\",\r\n      price: 4,\r\n      sold: 12,\r\n      index: 1,\r\n    },\r\n    {\r\n      name: \"Beef burrito\",\r\n      image: \"https://i.imgur.com/RNlv3S6.png\",\r\n      description: `Homemade tortilla with your choice of filling, cheese, \r\n        guacamole salsa with Mexican refried beans and rice.`,\r\n      location: \"Asili - KN 4 St\",\r\n      owner: \"0x2EF48F32eB0AEB90778A2170a0558A941b72BFFb\",\r\n      price: 2,\r\n      sold: 35,\r\n      index: 2,\r\n    },\r\n    {\r\n      name: \"Barbecue Pizza\",\r\n      image: \"https://i.imgur.com/fpiDeFd.png\",\r\n      description: `Barbecue Chicken Pizza: Chicken, gouda, pineapple, onions \r\n        and house-made BBQ sauce.`,\r\n      location: \"Kigali Hut KG 7 Ave\",\r\n      owner: \"0x2EF48F32eB0AEB90778A2170a0558A941b72BFFb\",\r\n      price: 1,\r\n      sold: 2,\r\n      index: 3,\r\n    }\r\n]\r\n\r\nconst getBalance = function () {\r\n    document.querySelector(\"#balance\").textContent = 21;\r\n};\r\n\r\nfunction renderProducts() {\r\n    document.getElementById(\"marketplace\").innerHTML = \"\";\r\n    products.forEach((_product) => {\r\n        const newDiv = document.createElement('div');\r\n        newDiv.className = 'col-md-4';\r\n        newDiv.innerHTML = productTemplate(_product);\r\n        document.getElementById(\"markeplace\").appendChild(newDiv);\r\n    })\r\n}\r\n\r\nfunction productTemplate(_product) {\r\n    return `\r\n    <div class= \"card mb-4\">\r\n        <img class= \"card-img-top\" src= \"${_product.image}\" alt=\"...\"/>\r\n        <div class=\"position-absolute top-0 end-0 bg-warning mt-4 px-2 py-1 rounded-start\">\r\n            ${_product.sold} Sold\r\n        </div>\r\n        <div class=\"card-body text-left p-4 position-relative\">\r\n            <div class=\"translate-middle-y position-absolute top-0\">\r\n                ${identiconTemplate(_product.owner)}\r\n            </div>\r\n            <h2 class=\"card-title fs-4 fw-bold mt-2\">${_product.name}</h2>\r\n            <p class=\"card-text mb-4\" style=\"min-height: 82px\">${_product.description}</p>\r\n            <p class=\"card-text mt-4\">\r\n                <i class=\"bi bi-geo-alt-fill\"></i>\r\n                <span>${_product.location}</span>\r\n            </p>\r\n            <div class=\"d-grip gap-2\">\r\n                <a class=\"btn btn-lg btn-outline-dark buyBtn fs-6 p-3\" id=${_product.index}>\r\n                    Buy for ${_product.price} cUSD\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    `\r\n}\r\n\r\nfunction identiconTemplate(_address) {\r\n    const icon = blockies.create({\r\n        seed: _address,\r\n        size: 8,\r\n        scale: 16,\r\n    }).toDataURL()\r\n\r\n    return `\r\n    <div class=\"rounded-circle overflow-hidden d-inline-block border border-white border-2 shadow-sm m-0\">\r\n        <a href=\"https://alfajores-blockscout.celo-testnet.org/address/${_address}/transactions\" target=\"_blank\">\r\n            <img src=\"${icon}\" width=\"48\" alt=\"${_address}\"/>\r\n        </a>\r\n    </div>\r\n    `\r\n}\r\n\r\nfunction notification(_text) {\r\n    document.querySelector(\".alert\").style.display = \"block\";\r\n    document.querySelector(\"#notification\").textContent = _text;\r\n}\r\n\r\nfunction notificationOff() {\r\n    document.querySelector(\".alert\").style.display = \"none\";\r\n}\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n    notification(\"⏳ Loading...\");\r\n    getBalance();\r\n    renderProducts();\r\n    notificationOff();\r\n})\r\n\r\ndocument.querySelector(\"#newProductBtn\").addEventListener(\"click\", () => {\r\n    const _product = {\r\n        owner: \"0x2EF48F32eB0AEB90778A2170a0558A941b72BFFb\",\r\n        name: document.getElementById(\"newProductName\").value,\r\n        image: document.getElementById(\"newImgUrl\").value,\r\n        description: document.getElementById(\"newProductDescription\").value,\r\n        location: document.getElementById(\"newLocation\").value,\r\n        price: document.getElementById(\"newPrice\").value,\r\n        sold: 0,\r\n        index: products.length,\r\n    }\r\n    products.push(_product)\r\n    notification(`🎉 You successfully added \"${_product.name}\".`)\r\n    renderProducts()\r\n})\r\n\r\ndocument.querySelector(\"#marketplace\").addEventListener(\"click\", (e) => {\r\n    if(e.target.className.includes(\"buyBtn\")) {\r\n        const index = e.target.id;\r\n        products[index].sold++;\r\n        notification(`🎉 You successfully bought \"${products[index].name}\".`);\r\n        renderProducts();\r\n    }\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJvZHVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiR2lhbnQgQkJRXCIsXHJcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaS5pbWd1ci5jb20veVByZVYxOS5wbmdcIixcclxuICAgICAgZGVzY3JpcHRpb246IGBHcmlsbGVkIGNoaWNrZW4sIGJlZWYsIGZpc2gsIHNhdXNhZ2VzLCBiYWNvbiwgXHJcbiAgICAgICAgdmVnZXRhYmxlcyBzZXJ2ZWQgd2l0aCBjaGlwcy5gLFxyXG4gICAgICBsb2NhdGlvbjogXCJLaW1pcm9ua28gTWFya2V0XCIsXHJcbiAgICAgIG93bmVyOiBcIjB4MzJCZTM0M0I5NGY4NjAxMjRkQzRmRWUyNzhGRENCRDM4QzEwMkQ4OFwiLFxyXG4gICAgICBwcmljZTogMyxcclxuICAgICAgc29sZDogMjcsXHJcbiAgICAgIGluZGV4OiAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJCQlEgQ2hpY2tlblwiLFxyXG4gICAgICBpbWFnZTogXCJodHRwczovL2kuaW1ndXIuY29tL05NRXpvWWIucG5nXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBgRnJlbmNoIGZyaWVzIGFuZCBncmlsbGVkIGNoaWNrZW4gc2VydmVkIHdpdGggZ2FjdW1iYXJpIFxyXG4gICAgICAgIGFuZCBhdm9jYWRvcyB3aXRoIGNoZWVzZS5gLFxyXG4gICAgICBsb2NhdGlvbjogXCJBZnJpa2EgRnJlc2ggS0cgNTQxIFN0XCIsXHJcbiAgICAgIG93bmVyOiBcIjB4MzI3NUI3RjQwMGNDZGVCZURhZjBEOEE5YTdDOEMxYUJFMmQ3NDdFYVwiLFxyXG4gICAgICBwcmljZTogNCxcclxuICAgICAgc29sZDogMTIsXHJcbiAgICAgIGluZGV4OiAxLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJCZWVmIGJ1cnJpdG9cIixcclxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9STmx2M1M2LnBuZ1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogYEhvbWVtYWRlIHRvcnRpbGxhIHdpdGggeW91ciBjaG9pY2Ugb2YgZmlsbGluZywgY2hlZXNlLCBcclxuICAgICAgICBndWFjYW1vbGUgc2Fsc2Egd2l0aCBNZXhpY2FuIHJlZnJpZWQgYmVhbnMgYW5kIHJpY2UuYCxcclxuICAgICAgbG9jYXRpb246IFwiQXNpbGkgLSBLTiA0IFN0XCIsXHJcbiAgICAgIG93bmVyOiBcIjB4MkVGNDhGMzJlQjBBRUI5MDc3OEEyMTcwYTA1NThBOTQxYjcyQkZGYlwiLFxyXG4gICAgICBwcmljZTogMixcclxuICAgICAgc29sZDogMzUsXHJcbiAgICAgIGluZGV4OiAyLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJCYXJiZWN1ZSBQaXp6YVwiLFxyXG4gICAgICBpbWFnZTogXCJodHRwczovL2kuaW1ndXIuY29tL2ZwaURlRmQucG5nXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBgQmFyYmVjdWUgQ2hpY2tlbiBQaXp6YTogQ2hpY2tlbiwgZ291ZGEsIHBpbmVhcHBsZSwgb25pb25zIFxyXG4gICAgICAgIGFuZCBob3VzZS1tYWRlIEJCUSBzYXVjZS5gLFxyXG4gICAgICBsb2NhdGlvbjogXCJLaWdhbGkgSHV0IEtHIDcgQXZlXCIsXHJcbiAgICAgIG93bmVyOiBcIjB4MkVGNDhGMzJlQjBBRUI5MDc3OEEyMTcwYTA1NThBOTQxYjcyQkZGYlwiLFxyXG4gICAgICBwcmljZTogMSxcclxuICAgICAgc29sZDogMixcclxuICAgICAgaW5kZXg6IDMsXHJcbiAgICB9XHJcbl1cclxuXHJcbmNvbnN0IGdldEJhbGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhbGFuY2VcIikudGV4dENvbnRlbnQgPSAyMTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByb2R1Y3RzKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJrZXRwbGFjZVwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgcHJvZHVjdHMuZm9yRWFjaCgoX3Byb2R1Y3QpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBuZXdEaXYuY2xhc3NOYW1lID0gJ2NvbC1tZC00JztcclxuICAgICAgICBuZXdEaXYuaW5uZXJIVE1MID0gcHJvZHVjdFRlbXBsYXRlKF9wcm9kdWN0KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmtlcGxhY2VcIikuYXBwZW5kQ2hpbGQobmV3RGl2KTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2R1Y3RUZW1wbGF0ZShfcHJvZHVjdCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9IFwiY2FyZCBtYi00XCI+XHJcbiAgICAgICAgPGltZyBjbGFzcz0gXCJjYXJkLWltZy10b3BcIiBzcmM9IFwiJHtfcHJvZHVjdC5pbWFnZX1cIiBhbHQ9XCIuLi5cIi8+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIHRvcC0wIGVuZC0wIGJnLXdhcm5pbmcgbXQtNCBweC0yIHB5LTEgcm91bmRlZC1zdGFydFwiPlxyXG4gICAgICAgICAgICAke19wcm9kdWN0LnNvbGR9IFNvbGRcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHRleHQtbGVmdCBwLTQgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRyYW5zbGF0ZS1taWRkbGUteSBwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMFwiPlxyXG4gICAgICAgICAgICAgICAgJHtpZGVudGljb25UZW1wbGF0ZShfcHJvZHVjdC5vd25lcil9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJjYXJkLXRpdGxlIGZzLTQgZnctYm9sZCBtdC0yXCI+JHtfcHJvZHVjdC5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IG1iLTRcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6IDgycHhcIj4ke19wcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1nZW8tYWx0LWZpbGxcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4ke19wcm9kdWN0LmxvY2F0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1ncmlwIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tbGcgYnRuLW91dGxpbmUtZGFyayBidXlCdG4gZnMtNiBwLTNcIiBpZD0ke19wcm9kdWN0LmluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICBCdXkgZm9yICR7X3Byb2R1Y3QucHJpY2V9IGNVU0RcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxufVxyXG5cclxuZnVuY3Rpb24gaWRlbnRpY29uVGVtcGxhdGUoX2FkZHJlc3MpIHtcclxuICAgIGNvbnN0IGljb24gPSBibG9ja2llcy5jcmVhdGUoe1xyXG4gICAgICAgIHNlZWQ6IF9hZGRyZXNzLFxyXG4gICAgICAgIHNpemU6IDgsXHJcbiAgICAgICAgc2NhbGU6IDE2LFxyXG4gICAgfSkudG9EYXRhVVJMKClcclxuXHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlIG92ZXJmbG93LWhpZGRlbiBkLWlubGluZS1ibG9jayBib3JkZXIgYm9yZGVyLXdoaXRlIGJvcmRlci0yIHNoYWRvdy1zbSBtLTBcIj5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hbGZham9yZXMtYmxvY2tzY291dC5jZWxvLXRlc3RuZXQub3JnL2FkZHJlc3MvJHtfYWRkcmVzc30vdHJhbnNhY3Rpb25zXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpY29ufVwiIHdpZHRoPVwiNDhcIiBhbHQ9XCIke19hZGRyZXNzfVwiLz5cclxuICAgICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxufVxyXG5cclxuZnVuY3Rpb24gbm90aWZpY2F0aW9uKF90ZXh0KSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsZXJ0XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGlmaWNhdGlvblwiKS50ZXh0Q29udGVudCA9IF90ZXh0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3RpZmljYXRpb25PZmYoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsZXJ0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICAgIG5vdGlmaWNhdGlvbihcIuKPsyBMb2FkaW5nLi4uXCIpO1xyXG4gICAgZ2V0QmFsYW5jZSgpO1xyXG4gICAgcmVuZGVyUHJvZHVjdHMoKTtcclxuICAgIG5vdGlmaWNhdGlvbk9mZigpO1xyXG59KVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdQcm9kdWN0QnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBfcHJvZHVjdCA9IHtcclxuICAgICAgICBvd25lcjogXCIweDJFRjQ4RjMyZUIwQUVCOTA3NzhBMjE3MGEwNTU4QTk0MWI3MkJGRmJcIixcclxuICAgICAgICBuYW1lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2R1Y3ROYW1lXCIpLnZhbHVlLFxyXG4gICAgICAgIGltYWdlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0ltZ1VybFwiKS52YWx1ZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9kdWN0RGVzY3JpcHRpb25cIikudmFsdWUsXHJcbiAgICAgICAgbG9jYXRpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3TG9jYXRpb25cIikudmFsdWUsXHJcbiAgICAgICAgcHJpY2U6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJpY2VcIikudmFsdWUsXHJcbiAgICAgICAgc29sZDogMCxcclxuICAgICAgICBpbmRleDogcHJvZHVjdHMubGVuZ3RoLFxyXG4gICAgfVxyXG4gICAgcHJvZHVjdHMucHVzaChfcHJvZHVjdClcclxuICAgIG5vdGlmaWNhdGlvbihg8J+OiSBZb3Ugc3VjY2Vzc2Z1bGx5IGFkZGVkIFwiJHtfcHJvZHVjdC5uYW1lfVwiLmApXHJcbiAgICByZW5kZXJQcm9kdWN0cygpXHJcbn0pXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hcmtldHBsYWNlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaWYoZS50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKFwiYnV5QnRuXCIpKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5pZDtcclxuICAgICAgICBwcm9kdWN0c1tpbmRleF0uc29sZCsrO1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbihg8J+OiSBZb3Ugc3VjY2Vzc2Z1bGx5IGJvdWdodCBcIiR7cHJvZHVjdHNbaW5kZXhdLm5hbWV9XCIuYCk7XHJcbiAgICAgICAgcmVuZGVyUHJvZHVjdHMoKTtcclxuICAgIH1cclxufSkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

/******/ });
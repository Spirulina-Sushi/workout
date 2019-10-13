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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/go.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/go.css":
/*!***************************!*\
  !*** ./assets/css/go.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/go.js":
/*!*************************!*\
  !*** ./assets/js/go.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../css/go.css */ "./assets/css/go.css");

var exerciseArray = ['Squat', 'Kicks Thing', 'Bicycle', 'Crunch', 'Jump', 'Lunge'];
workOrRest = "work";
var setCount = exerciseArray.length;
var set = 0;
var restSeconds = 10;
var workSeconds = 50;
var time = workSeconds;
var totalSeconds = (restSeconds + workSeconds) * setCount;
var timer;
var timerRunning = false;
updateScreen();
document.getElementById("currentExercise").innerHTML = exerciseArray[0];
var setOf = set + " of " + setCount;
document.getElementById("set").innerHTML = setOf;

function startTimer() {
  if (set == 0) {
    set++;
  }

  ;
  timerRunning = true;
  timer = setInterval(runTimer, 1000);
}

function runTimer() {
  totalSeconds--;
  time--;
  updateScreen();

  if (ended(time) == "Yes") {
    restWorkSwitch();
  }
}

function tick() {}

function restWorkSwitch() {
  if (ended(totalSeconds) == "Yes") {
    stopTimer();
  }

  if (workOrRest == "work") {
    workOrRest = "rest";
    time = restSeconds;
    document.getElementById("workOrRest").classList.add("rest");
    document.getElementById("workOrRest").classList.remove("work");
    document.getElementById("currentExercise").innerHTML = exerciseArray[set];

    if (set > setCount) {
      stopTimer();
      document.getElementById("set").innerHTML = "You did it!!";
    }
  } else {
    workOrRest = "work";
    time = workSeconds;
    set++;
    document.getElementById("workOrRest").classList.add("work");
    document.getElementById("workOrRest").classList.remove("rest");
    setOf = set + " of " + setCount;
    document.getElementById("set").innerHTML = setOf;
  }
}

function updateScreen() {
  document.getElementById("totalSeconds").innerHTML = numberDisplay(totalSeconds);
  document.getElementById("time").innerHTML = numberDisplay(time);
  document.getElementById("workOrRest").innerHTML = workOrRest;
  setOf = set + " of " + setCount;
  document.getElementById("set").innerHTML = setOf;
}

function ended(time) {
  if (time == 0) {
    return "Yes";
  }
}

function numberDisplay(number) {
  minutes = Math.floor(number / 60);
  seconds = number - minutes * 60;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return minutes + ":" + seconds;
}

function stopTimer() {
  timerRunning = false;
  clearInterval(timer);
}

function startStop() {
  if (timerRunning == false) {
    startTimer();
    document.getElementById("startStop").innerHTML = "Stop";
  } else {
    stopTimer();
    document.getElementById("startStop").innerHTML = "Start";
  }
}

function skip() {
  time = 1;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9nby5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dvLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJleGVyY2lzZUFycmF5Iiwid29ya09yUmVzdCIsInNldENvdW50IiwibGVuZ3RoIiwic2V0IiwicmVzdFNlY29uZHMiLCJ3b3JrU2Vjb25kcyIsInRpbWUiLCJ0b3RhbFNlY29uZHMiLCJ0aW1lciIsInRpbWVyUnVubmluZyIsInVwZGF0ZVNjcmVlbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJzZXRPZiIsInN0YXJ0VGltZXIiLCJzZXRJbnRlcnZhbCIsInJ1blRpbWVyIiwiZW5kZWQiLCJyZXN0V29ya1N3aXRjaCIsInRpY2siLCJzdG9wVGltZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJudW1iZXJEaXNwbGF5IiwibnVtYmVyIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJjbGVhckludGVydmFsIiwic3RhcnRTdG9wIiwic2tpcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFD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YSxDQUFDdkIsS0FBRCxDQUFiO0FBQ0g7O0FBRUQsU0FBU3dCLFNBQVQsR0FBb0I7QUFDaEIsTUFBS3ZCLFlBQVksSUFBSSxLQUFyQixFQUE0QjtBQUN4Qk0sY0FBVTtBQUNWSixZQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNDLFNBQXJDLEdBQWlELE1BQWpEO0FBQ0gsR0FIRCxNQUdPO0FBQ0hRLGFBQVM7QUFDVFYsWUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDQyxTQUFyQyxHQUFpRCxPQUFqRDtBQUNIO0FBQ0o7O0FBRUQsU0FBU29CLElBQVQsR0FBZTtBQUNYM0IsTUFBSSxHQUFHLENBQVA7QUFDSCxDIiwiZmlsZSI6InRpbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2dvLmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwicmVxdWlyZSgnLi4vY3NzL2dvLmNzcycpO1xyXG5cclxudmFyIGV4ZXJjaXNlQXJyYXkgPSBbXHJcbiAgICAnU3F1YXQnLFxyXG4gICAgJ0tpY2tzIFRoaW5nJyxcclxuICAgICdCaWN5Y2xlJyxcclxuICAgICdDcnVuY2gnLFxyXG4gICAgJ0p1bXAnLFxyXG4gICAgJ0x1bmdlJ1xyXG5dO1xyXG5cclxud29ya09yUmVzdCA9IFwid29ya1wiO1xyXG52YXIgc2V0Q291bnQgPSBleGVyY2lzZUFycmF5Lmxlbmd0aDtcclxudmFyIHNldCA9IDA7XHJcbnZhciByZXN0U2Vjb25kcyA9IDEwO1xyXG52YXIgd29ya1NlY29uZHMgPSA1MDtcclxudmFyIHRpbWUgPSB3b3JrU2Vjb25kcztcclxudmFyIHRvdGFsU2Vjb25kcyA9ICggcmVzdFNlY29uZHMgKyB3b3JrU2Vjb25kcyApICogc2V0Q291bnQ7XHJcbnZhciB0aW1lcjtcclxudmFyIHRpbWVyUnVubmluZyA9IGZhbHNlO1xyXG5cclxudXBkYXRlU2NyZWVuKCk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudEV4ZXJjaXNlXCIpLmlubmVySFRNTCA9IGV4ZXJjaXNlQXJyYXlbMF07XHJcbnZhciBzZXRPZiA9IHNldCArIFwiIG9mIFwiICsgc2V0Q291bnQ7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0XCIpLmlubmVySFRNTCA9IHNldE9mO1xyXG5cclxuZnVuY3Rpb24gc3RhcnRUaW1lcigpe1xyXG4gICAgaWYgKCBzZXQgPT0gMCApeyBzZXQrKyB9O1xyXG4gICAgdGltZXJSdW5uaW5nID0gdHJ1ZTtcclxuICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwocnVuVGltZXIsIDEwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBydW5UaW1lcigpIHtcclxuICAgIHRvdGFsU2Vjb25kcy0tO1xyXG4gICAgdGltZS0tO1xyXG4gICAgdXBkYXRlU2NyZWVuKCk7XHJcbiAgICBpZiAoIGVuZGVkKHRpbWUpID09IFwiWWVzXCIgKXsgcmVzdFdvcmtTd2l0Y2goKTsgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0aWNrKCl7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZXN0V29ya1N3aXRjaCgpe1xyXG4gICAgaWYgKCBlbmRlZCh0b3RhbFNlY29uZHMpID09IFwiWWVzXCIgKXsgc3RvcFRpbWVyKCk7IH1cclxuXHJcbiAgICBpZiggd29ya09yUmVzdCA9PSBcIndvcmtcIiApe1xyXG4gICAgICAgIHdvcmtPclJlc3QgPSBcInJlc3RcIjtcclxuICAgICAgICB0aW1lID0gcmVzdFNlY29uZHM7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrT3JSZXN0XCIpLmNsYXNzTGlzdC5hZGQoXCJyZXN0XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya09yUmVzdFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwid29ya1wiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRFeGVyY2lzZVwiKS5pbm5lckhUTUwgPSBleGVyY2lzZUFycmF5W3NldF07XHJcbiAgICAgICAgaWYgKCBzZXQgPiBzZXRDb3VudCApe1xyXG4gICAgICAgICAgICBzdG9wVGltZXIoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXRcIikuaW5uZXJIVE1MID0gXCJZb3UgZGlkIGl0ISFcIjtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdvcmtPclJlc3QgPSBcIndvcmtcIjtcclxuICAgICAgICB0aW1lID0gd29ya1NlY29uZHM7XHJcbiAgICAgICAgc2V0Kys7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrT3JSZXN0XCIpLmNsYXNzTGlzdC5hZGQoXCJ3b3JrXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya09yUmVzdFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicmVzdFwiKTtcclxuXHJcbiAgICAgICAgc2V0T2YgPSBzZXQgKyBcIiBvZiBcIiArIHNldENvdW50O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0XCIpLmlubmVySFRNTCA9IHNldE9mO1xyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVNjcmVlbigpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbFNlY29uZHNcIikuaW5uZXJIVE1MID0gbnVtYmVyRGlzcGxheSggdG90YWxTZWNvbmRzICk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVcIikuaW5uZXJIVE1MID0gbnVtYmVyRGlzcGxheSggdGltZSApO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrT3JSZXN0XCIpLmlubmVySFRNTCA9IHdvcmtPclJlc3Q7XHJcbiAgICBzZXRPZiA9IHNldCArIFwiIG9mIFwiICsgc2V0Q291bnQ7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldFwiKS5pbm5lckhUTUwgPSBzZXRPZjtcclxufVxyXG5cclxuZnVuY3Rpb24gZW5kZWQoIHRpbWUgKXtcclxuICAgIGlmICggdGltZSA9PSAwICl7XHJcbiAgICAgICAgcmV0dXJuIFwiWWVzXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG51bWJlckRpc3BsYXkoIG51bWJlciApe1xyXG4gICAgbWludXRlcyA9IE1hdGguZmxvb3IoIG51bWJlciAvIDYwKTtcclxuICAgIHNlY29uZHMgPSBudW1iZXIgLSBtaW51dGVzICogNjA7XHJcbiAgICBpZiggbWludXRlcyA8IDEwICl7XHJcbiAgICAgICAgbWludXRlcyA9IFwiMFwiICsgbWludXRlc1xyXG4gICAgfVxyXG4gICAgaWYgKCBzZWNvbmRzIDwgMTAgKXtcclxuICAgICAgICBzZWNvbmRzID0gXCIwXCIgKyBzZWNvbmRzXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWludXRlcyArIFwiOlwiICsgc2Vjb25kcztcclxufVxyXG5cclxuZnVuY3Rpb24gc3RvcFRpbWVyKCkge1xyXG4gICAgdGltZXJSdW5uaW5nID0gZmFsc2U7XHJcbiAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRTdG9wKCl7XHJcbiAgICBpZiAoIHRpbWVyUnVubmluZyA9PSBmYWxzZSApe1xyXG4gICAgICAgIHN0YXJ0VGltZXIoKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0U3RvcFwiKS5pbm5lckhUTUwgPSBcIlN0b3BcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RvcFRpbWVyKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFN0b3BcIikuaW5uZXJIVE1MID0gXCJTdGFydFwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBza2lwKCl7XHJcbiAgICB0aW1lID0gMTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
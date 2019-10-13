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

function working() {
  alert("working");
}

var exerciseArray = ['Squat', 'Kicks Thing', 'Bicycle', 'Crunch', 'Jump', 'Lunge'];
var workOrRest = "work";
var setCount = exerciseArray.length;
var set = 0;
var restSeconds = document.getElementById("inputRest").innerHTML;
var workSeconds = document.getElementById("inputWork").innerHTML;
var time = workSeconds;
var totalSeconds = document.getElementById("inputTotal").innerHTML;
var timer;
var timerRunning = false;
document.getElementById("inputRest").innerHTML = numberDisplay(document.getElementById("inputRest").innerHTML);
document.getElementById("inputWork").innerHTML = numberDisplay(document.getElementById("inputWork").innerHTML);
document.getElementById("inputTotal").innerHTML = numberDisplay(document.getElementById("inputTotal").innerHTML);
updateScreen();
document.getElementById("currentExercise").innerHTML = exerciseArray[0];
var setOf = set + " of " + setCount;
document.getElementById("set").innerHTML = setOf;

function startTimer() {
  if (set === 0) {
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

  if (ended(time) === "Yes") {
    restWorkSwitch();
  }
}

function restWorkSwitch() {
  if (ended(totalSeconds) === "Yes") {
    stopTimer();
  }

  if (workOrRest === "work") {
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
  if (time === 0) {
    return "Yes";
  }
}

function numberDisplay(number) {
  var minutes = Math.floor(number / 60);
  var seconds = number - minutes * 60;

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
  if (timerRunning === false) {
    startTimer();
    document.getElementById("startStopBtn").innerHTML = "Stop";
  } else {
    stopTimer();
    document.getElementById("startStopBtn").innerHTML = "Start";
  }
} // window.startStop = startStop();


document.getElementById("startStopBtn").onclick = function () {
  startStop();
};

function skip() {
  time = 1;
} // window.skip = skip();


document.getElementById("skipBtn").onclick = function () {
  skip();
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9nby5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dvLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3b3JraW5nIiwiYWxlcnQiLCJleGVyY2lzZUFycmF5Iiwid29ya09yUmVzdCIsInNldENvdW50IiwibGVuZ3RoIiwic2V0IiwicmVzdFNlY29uZHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwid29ya1NlY29uZHMiLCJ0aW1lIiwidG90YWxTZWNvbmRzIiwidGltZXIiLCJ0aW1lclJ1bm5pbmciLCJudW1iZXJEaXNwbGF5IiwidXBkYXRlU2NyZWVuIiwic2V0T2YiLCJzdGFydFRpbWVyIiwic2V0SW50ZXJ2YWwiLCJydW5UaW1lciIsImVuZGVkIiwicmVzdFdvcmtTd2l0Y2giLCJzdG9wVGltZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJudW1iZXIiLCJtaW51dGVzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsImNsZWFySW50ZXJ2YWwiLCJzdGFydFN0b3AiLCJvbmNsaWNrIiwic2tpcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gs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LGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMwQixPQUFuQyxHQUE2QyxZQUFZO0FBQUVDLE1BQUk7QUFBSyxDQUFwRSxDIiwiZmlsZSI6ImdvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2dvLmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwicmVxdWlyZSgnLi4vY3NzL2dvLmNzcycpO1xyXG5cclxuZnVuY3Rpb24gd29ya2luZygpIHtcclxuICAgIGFsZXJ0KFwid29ya2luZ1wiKTtcclxufVxyXG5cclxudmFyIGV4ZXJjaXNlQXJyYXkgPSBbXHJcbiAgICAnU3F1YXQnLFxyXG4gICAgJ0tpY2tzIFRoaW5nJyxcclxuICAgICdCaWN5Y2xlJyxcclxuICAgICdDcnVuY2gnLFxyXG4gICAgJ0p1bXAnLFxyXG4gICAgJ0x1bmdlJ1xyXG5dO1xyXG5cclxuXHJcbnZhciB3b3JrT3JSZXN0ID0gXCJ3b3JrXCI7XHJcbnZhciBzZXRDb3VudCA9IGV4ZXJjaXNlQXJyYXkubGVuZ3RoO1xyXG52YXIgc2V0ID0gMDtcclxudmFyIHJlc3RTZWNvbmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFJlc3RcIikuaW5uZXJIVE1MO1xyXG52YXIgd29ya1NlY29uZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0V29ya1wiKS5pbm5lckhUTUw7XHJcbnZhciB0aW1lID0gd29ya1NlY29uZHM7XHJcbnZhciB0b3RhbFNlY29uZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0VG90YWxcIikuaW5uZXJIVE1MO1xyXG52YXIgdGltZXI7XHJcbnZhciB0aW1lclJ1bm5pbmcgPSBmYWxzZTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRSZXN0XCIpLmlubmVySFRNTCA9IG51bWJlckRpc3BsYXkoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRSZXN0XCIpLmlubmVySFRNTCApO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0V29ya1wiKS5pbm5lckhUTUwgPSBudW1iZXJEaXNwbGF5KCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0V29ya1wiKS5pbm5lckhUTUwgKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFRvdGFsXCIpLmlubmVySFRNTCA9IG51bWJlckRpc3BsYXkoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRUb3RhbFwiKS5pbm5lckhUTUwgKTtcclxuXHJcbnVwZGF0ZVNjcmVlbigpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRFeGVyY2lzZVwiKS5pbm5lckhUTUwgPSBleGVyY2lzZUFycmF5WzBdO1xyXG52YXIgc2V0T2YgPSBzZXQgKyBcIiBvZiBcIiArIHNldENvdW50O1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldFwiKS5pbm5lckhUTUwgPSBzZXRPZjtcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0VGltZXIoKXtcclxuICAgIGlmICggc2V0ID09PSAwICl7IHNldCsrIH07XHJcbiAgICB0aW1lclJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgdGltZXIgPSBzZXRJbnRlcnZhbChydW5UaW1lciwgMTAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJ1blRpbWVyKCkge1xyXG4gICAgdG90YWxTZWNvbmRzLS07XHJcbiAgICB0aW1lLS07XHJcbiAgICB1cGRhdGVTY3JlZW4oKTtcclxuICAgIGlmICggZW5kZWQodGltZSkgPT09IFwiWWVzXCIgKXsgcmVzdFdvcmtTd2l0Y2goKTsgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVzdFdvcmtTd2l0Y2goKXtcclxuICAgIGlmICggZW5kZWQodG90YWxTZWNvbmRzKSA9PT0gXCJZZXNcIiApeyBzdG9wVGltZXIoKTsgfVxyXG5cclxuICAgIGlmKCB3b3JrT3JSZXN0ID09PSBcIndvcmtcIiApe1xyXG4gICAgICAgIHdvcmtPclJlc3QgPSBcInJlc3RcIjtcclxuICAgICAgICB0aW1lID0gcmVzdFNlY29uZHM7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrT3JSZXN0XCIpLmNsYXNzTGlzdC5hZGQoXCJyZXN0XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya09yUmVzdFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwid29ya1wiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRFeGVyY2lzZVwiKS5pbm5lckhUTUwgPSBleGVyY2lzZUFycmF5W3NldF07XHJcbiAgICAgICAgaWYgKCBzZXQgPiBzZXRDb3VudCApe1xyXG4gICAgICAgICAgICBzdG9wVGltZXIoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXRcIikuaW5uZXJIVE1MID0gXCJZb3UgZGlkIGl0ISFcIjtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdvcmtPclJlc3QgPSBcIndvcmtcIjtcclxuICAgICAgICB0aW1lID0gd29ya1NlY29uZHM7XHJcbiAgICAgICAgc2V0Kys7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrT3JSZXN0XCIpLmNsYXNzTGlzdC5hZGQoXCJ3b3JrXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya09yUmVzdFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicmVzdFwiKTtcclxuXHJcbiAgICAgICAgc2V0T2YgPSBzZXQgKyBcIiBvZiBcIiArIHNldENvdW50O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0XCIpLmlubmVySFRNTCA9IHNldE9mO1xyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVNjcmVlbigpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbFNlY29uZHNcIikuaW5uZXJIVE1MID0gbnVtYmVyRGlzcGxheSggdG90YWxTZWNvbmRzICk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVcIikuaW5uZXJIVE1MID0gbnVtYmVyRGlzcGxheSggdGltZSApO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrT3JSZXN0XCIpLmlubmVySFRNTCA9IHdvcmtPclJlc3Q7XHJcbiAgICBzZXRPZiA9IHNldCArIFwiIG9mIFwiICsgc2V0Q291bnQ7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldFwiKS5pbm5lckhUTUwgPSBzZXRPZjtcclxufVxyXG5cclxuZnVuY3Rpb24gZW5kZWQoIHRpbWUgKXtcclxuICAgIGlmICggdGltZSA9PT0gMCApe1xyXG4gICAgICAgIHJldHVybiBcIlllc1wiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBudW1iZXJEaXNwbGF5KCBudW1iZXIgKXtcclxuICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vciggbnVtYmVyIC8gNjApO1xyXG4gICAgdmFyIHNlY29uZHMgPSBudW1iZXIgLSBtaW51dGVzICogNjA7XHJcbiAgICBpZiggbWludXRlcyA8IDEwICl7XHJcbiAgICAgICAgbWludXRlcyA9IFwiMFwiICsgbWludXRlc1xyXG4gICAgfVxyXG4gICAgaWYgKCBzZWNvbmRzIDwgMTAgKXtcclxuICAgICAgICBzZWNvbmRzID0gXCIwXCIgKyBzZWNvbmRzXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWludXRlcyArIFwiOlwiICsgc2Vjb25kcztcclxufVxyXG5cclxuZnVuY3Rpb24gc3RvcFRpbWVyKCkge1xyXG4gICAgdGltZXJSdW5uaW5nID0gZmFsc2U7XHJcbiAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRTdG9wKCl7XHJcbiAgICBpZiAoIHRpbWVyUnVubmluZyA9PT0gZmFsc2UgKXtcclxuICAgICAgICBzdGFydFRpbWVyKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFN0b3BCdG5cIikuaW5uZXJIVE1MID0gXCJTdG9wXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0b3BUaW1lcigpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRTdG9wQnRuXCIpLmlubmVySFRNTCA9IFwiU3RhcnRcIjtcclxuICAgIH1cclxufVxyXG4vLyB3aW5kb3cuc3RhcnRTdG9wID0gc3RhcnRTdG9wKCk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRTdG9wQnRuXCIpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7IHN0YXJ0U3RvcCgpOyB9O1xyXG5cclxuZnVuY3Rpb24gc2tpcCgpe1xyXG4gICAgdGltZSA9IDE7XHJcbn1cclxuLy8gd2luZG93LnNraXAgPSBza2lwKCk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2tpcEJ0blwiKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkgeyBza2lwKCk7IH07Il0sInNvdXJjZVJvb3QiOiIifQ==
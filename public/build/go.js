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
}

window.startStop = startStop();

function skip() {
  time = 1;
}

window.skip = skip();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9nby5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dvLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3b3JraW5nIiwiYWxlcnQiLCJleGVyY2lzZUFycmF5Iiwid29ya09yUmVzdCIsInNldENvdW50IiwibGVuZ3RoIiwic2V0IiwicmVzdFNlY29uZHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwid29ya1NlY29uZHMiLCJ0aW1lIiwidG90YWxTZWNvbmRzIiwidGltZXIiLCJ0aW1lclJ1bm5pbmciLCJudW1iZXJEaXNwbGF5IiwidXBkYXRlU2NyZWVuIiwic2V0T2YiLCJzdGFydFRpbWVyIiwic2V0SW50ZXJ2YWwiLCJydW5UaW1lciIsImVuZGVkIiwicmVzdFdvcmtTd2l0Y2giLCJzdG9wVGltZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJudW1iZXIiLCJtaW51dGVzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsImNsZWFySW50ZXJ2YWwiLCJzdGFydFN0b3AiLCJ3aW5kb3ciLCJza2lwIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxt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IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9nby5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInJlcXVpcmUoJy4uL2Nzcy9nby5jc3MnKTtcclxuXHJcbmZ1bmN0aW9uIHdvcmtpbmcoKSB7XHJcbiAgICBhbGVydChcIndvcmtpbmdcIik7XHJcbn1cclxuXHJcbnZhciBleGVyY2lzZUFycmF5ID0gW1xyXG4gICAgJ1NxdWF0JyxcclxuICAgICdLaWNrcyBUaGluZycsXHJcbiAgICAnQmljeWNsZScsXHJcbiAgICAnQ3J1bmNoJyxcclxuICAgICdKdW1wJyxcclxuICAgICdMdW5nZSdcclxuXTtcclxuXHJcblxyXG52YXIgd29ya09yUmVzdCA9IFwid29ya1wiO1xyXG52YXIgc2V0Q291bnQgPSBleGVyY2lzZUFycmF5Lmxlbmd0aDtcclxudmFyIHNldCA9IDA7XHJcbnZhciByZXN0U2Vjb25kcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRSZXN0XCIpLmlubmVySFRNTDtcclxudmFyIHdvcmtTZWNvbmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFdvcmtcIikuaW5uZXJIVE1MO1xyXG52YXIgdGltZSA9IHdvcmtTZWNvbmRzO1xyXG52YXIgdG90YWxTZWNvbmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFRvdGFsXCIpLmlubmVySFRNTDtcclxudmFyIHRpbWVyO1xyXG52YXIgdGltZXJSdW5uaW5nID0gZmFsc2U7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0UmVzdFwiKS5pbm5lckhUTUwgPSBudW1iZXJEaXNwbGF5KCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0UmVzdFwiKS5pbm5lckhUTUwgKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFdvcmtcIikuaW5uZXJIVE1MID0gbnVtYmVyRGlzcGxheSggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFdvcmtcIikuaW5uZXJIVE1MICk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRUb3RhbFwiKS5pbm5lckhUTUwgPSBudW1iZXJEaXNwbGF5KCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0VG90YWxcIikuaW5uZXJIVE1MICk7XHJcblxyXG51cGRhdGVTY3JlZW4oKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50RXhlcmNpc2VcIikuaW5uZXJIVE1MID0gZXhlcmNpc2VBcnJheVswXTtcclxudmFyIHNldE9mID0gc2V0ICsgXCIgb2YgXCIgKyBzZXRDb3VudDtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXRcIikuaW5uZXJIVE1MID0gc2V0T2Y7XHJcblxyXG5mdW5jdGlvbiBzdGFydFRpbWVyKCl7XHJcbiAgICBpZiAoIHNldCA9PT0gMCApeyBzZXQrKyB9O1xyXG4gICAgdGltZXJSdW5uaW5nID0gdHJ1ZTtcclxuICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwocnVuVGltZXIsIDEwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBydW5UaW1lcigpIHtcclxuICAgIHRvdGFsU2Vjb25kcy0tO1xyXG4gICAgdGltZS0tO1xyXG4gICAgdXBkYXRlU2NyZWVuKCk7XHJcbiAgICBpZiAoIGVuZGVkKHRpbWUpID09PSBcIlllc1wiICl7IHJlc3RXb3JrU3dpdGNoKCk7IH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlc3RXb3JrU3dpdGNoKCl7XHJcbiAgICBpZiAoIGVuZGVkKHRvdGFsU2Vjb25kcykgPT09IFwiWWVzXCIgKXsgc3RvcFRpbWVyKCk7IH1cclxuXHJcbiAgICBpZiggd29ya09yUmVzdCA9PT0gXCJ3b3JrXCIgKXtcclxuICAgICAgICB3b3JrT3JSZXN0ID0gXCJyZXN0XCI7XHJcbiAgICAgICAgdGltZSA9IHJlc3RTZWNvbmRzO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya09yUmVzdFwiKS5jbGFzc0xpc3QuYWRkKFwicmVzdFwiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtPclJlc3RcIikuY2xhc3NMaXN0LnJlbW92ZShcIndvcmtcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50RXhlcmNpc2VcIikuaW5uZXJIVE1MID0gZXhlcmNpc2VBcnJheVtzZXRdO1xyXG4gICAgICAgIGlmICggc2V0ID4gc2V0Q291bnQgKXtcclxuICAgICAgICAgICAgc3RvcFRpbWVyKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0XCIpLmlubmVySFRNTCA9IFwiWW91IGRpZCBpdCEhXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3b3JrT3JSZXN0ID0gXCJ3b3JrXCI7XHJcbiAgICAgICAgdGltZSA9IHdvcmtTZWNvbmRzO1xyXG4gICAgICAgIHNldCsrO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya09yUmVzdFwiKS5jbGFzc0xpc3QuYWRkKFwid29ya1wiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtPclJlc3RcIikuY2xhc3NMaXN0LnJlbW92ZShcInJlc3RcIik7XHJcblxyXG4gICAgICAgIHNldE9mID0gc2V0ICsgXCIgb2YgXCIgKyBzZXRDb3VudDtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldFwiKS5pbm5lckhUTUwgPSBzZXRPZjtcclxuXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTY3JlZW4oKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxTZWNvbmRzXCIpLmlubmVySFRNTCA9IG51bWJlckRpc3BsYXkoIHRvdGFsU2Vjb25kcyApO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpLmlubmVySFRNTCA9IG51bWJlckRpc3BsYXkoIHRpbWUgKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya09yUmVzdFwiKS5pbm5lckhUTUwgPSB3b3JrT3JSZXN0O1xyXG4gICAgc2V0T2YgPSBzZXQgKyBcIiBvZiBcIiArIHNldENvdW50O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXRcIikuaW5uZXJIVE1MID0gc2V0T2Y7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuZGVkKCB0aW1lICl7XHJcbiAgICBpZiAoIHRpbWUgPT09IDAgKXtcclxuICAgICAgICByZXR1cm4gXCJZZXNcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbnVtYmVyRGlzcGxheSggbnVtYmVyICl7XHJcbiAgICB2YXIgbWludXRlcyA9IE1hdGguZmxvb3IoIG51bWJlciAvIDYwKTtcclxuICAgIHZhciBzZWNvbmRzID0gbnVtYmVyIC0gbWludXRlcyAqIDYwO1xyXG4gICAgaWYoIG1pbnV0ZXMgPCAxMCApe1xyXG4gICAgICAgIG1pbnV0ZXMgPSBcIjBcIiArIG1pbnV0ZXNcclxuICAgIH1cclxuICAgIGlmICggc2Vjb25kcyA8IDEwICl7XHJcbiAgICAgICAgc2Vjb25kcyA9IFwiMFwiICsgc2Vjb25kc1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1pbnV0ZXMgKyBcIjpcIiArIHNlY29uZHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0b3BUaW1lcigpIHtcclxuICAgIHRpbWVyUnVubmluZyA9IGZhbHNlO1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0U3RvcCgpe1xyXG4gICAgaWYgKCB0aW1lclJ1bm5pbmcgPT09IGZhbHNlICl7XHJcbiAgICAgICAgc3RhcnRUaW1lcigpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRTdG9wQnRuXCIpLmlubmVySFRNTCA9IFwiU3RvcFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzdG9wVGltZXIoKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0U3RvcEJ0blwiKS5pbm5lckhUTUwgPSBcIlN0YXJ0XCI7XHJcbiAgICB9XHJcbn1cclxud2luZG93LnN0YXJ0U3RvcCA9IHN0YXJ0U3RvcCgpO1xyXG5cclxuZnVuY3Rpb24gc2tpcCgpe1xyXG4gICAgdGltZSA9IDE7XHJcbn1cclxud2luZG93LnNraXAgPSBza2lwKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==
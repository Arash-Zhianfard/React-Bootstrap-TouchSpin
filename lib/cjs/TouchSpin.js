"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Type_1 = require("./Type");
var TouchSpin = function (_a) {
    var _b = _a.signAlignment, signAlignment = _b === void 0 ? Type_1.Alignment.Left : _b, sign = _a.sign, _c = _a.initValue, initValue = _c === void 0 ? 0 : _c, _d = _a.step, step = _d === void 0 ? 1 : _d, _e = _a.min, min = _e === void 0 ? 0 : _e, _f = _a.max, max = _f === void 0 ? 10000 : _f, _g = _a.size, size = _g === void 0 ? Type_1.BsSize.Small : _g, _h = _a.decimals, decimals = _h === void 0 ? 0 : _h;
    var _j = react_1.useState(initValue), counter = _j[0], setCounter = _j[1];
    var intervalRef = react_1.useRef(null);
    var maxThresholdRef = react_1.useRef(false);
    var minThresholdRef = react_1.useRef(false);
    var interval = 250;
    react_1.useEffect(function () {
        max = max - (max % step);
        min = Math.abs(min) - (Math.abs(min) % step);
        return function () { return stopCounter(); };
    }, []);
    var isOutOfRange = function () {
        if (counter === max) {
            stopCounter();
            maxThresholdRef.current = true;
        }
        else if (counter === min) {
            minThresholdRef.current = true;
            stopCounter();
        }
    };
    react_1.useEffect(function () {
        isOutOfRange();
    }, [counter]);
    var increase = function () {
        setCounter(function (prevCounter) { return prevCounter + step; });
    };
    var decrease = function () {
        setCounter(function (prevCounter) { return prevCounter - step; });
    };
    var increaseHandler = function () {
        if (!maxThresholdRef.current)
            increase();
        minThresholdRef.current = false;
        if (intervalRef.current)
            return;
        intervalRef.current = setInterval(function () {
            increaseByInterval();
        }, interval);
    };
    var decreaseHandler = function () {
        if (!minThresholdRef.current)
            decrease();
        maxThresholdRef.current = false;
        if (intervalRef.current)
            return;
        intervalRef.current = setInterval(function () {
            decreaseByInterval();
        }, interval);
    };
    var decreaseByInterval = function () {
        stopCounter();
        if (interval > 50)
            interval = interval - 10;
        decrease();
        intervalRef.current = setInterval(function () {
            decreaseByInterval();
        }, interval);
    };
    var increaseByInterval = function () {
        stopCounter();
        if (interval > 50)
            interval = interval - 10;
        increase();
        intervalRef.current = setInterval(function () {
            increaseByInterval();
        }, interval);
    };
    var stopCounter = function () {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };
    return (react_1.default.createElement("div", { className: "input-group input-group-" + size },
        react_1.default.createElement("div", { className: "input-group-prepend" },
            react_1.default.createElement("button", { className: "input-group-text ", onMouseDown: decreaseHandler, onMouseUp: stopCounter }, "-"),
            sign && signAlignment === Type_1.Alignment.Left && (react_1.default.createElement("span", { className: "input-group-text" }, sign))),
        react_1.default.createElement("input", { type: "text", className: "form-control", value: counter.toFixed(decimals) }),
        react_1.default.createElement("div", { className: "input-group-append" },
            sign && signAlignment === Type_1.Alignment.Right && (react_1.default.createElement("span", { className: "input-group-text" }, sign)),
            react_1.default.createElement("button", { className: "input-group-text ", onMouseDown: increaseHandler, onMouseUp: stopCounter }, "+"))));
};
exports.default = TouchSpin;

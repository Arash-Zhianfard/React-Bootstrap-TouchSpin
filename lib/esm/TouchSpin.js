import React, { useState, useRef, useEffect } from "react";
import { Alignment, BsSize } from "./Type";
var TouchSpin = function (_a) {
    var _b = _a.signAlignment, signAlignment = _b === void 0 ? Alignment.Left : _b, sign = _a.sign, _c = _a.initValue, initValue = _c === void 0 ? 0 : _c, _d = _a.step, step = _d === void 0 ? 1 : _d, _e = _a.min, min = _e === void 0 ? 0 : _e, _f = _a.max, max = _f === void 0 ? 20 : _f, _g = _a.size, size = _g === void 0 ? BsSize.Small : _g;
    var _h = useState(initValue), counter = _h[0], setCounter = _h[1];
    var intervalRef = useRef(null);
    var maxThresholdRef = useRef(false);
    var minThresholdRef = useRef(false);
    var interval = 250;
    useEffect(function () {
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
    useEffect(function () {
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
    return (React.createElement("div", { className: "input-group input-group-" + size },
        React.createElement("div", { className: "input-group-prepend" },
            React.createElement("button", { className: "input-group-text ", onMouseDown: decreaseHandler, onMouseUp: stopCounter }, "-"),
            sign && signAlignment === Alignment.Left && (React.createElement("span", { className: "input-group-text" }, sign))),
        React.createElement("input", { type: "text", className: "form-control", value: counter }),
        React.createElement("div", { className: "input-group-append" },
            sign && signAlignment === Alignment.Right && (React.createElement("span", { className: "input-group-text" }, sign)),
            React.createElement("button", { className: "input-group-text ", onMouseDown: increaseHandler, onMouseUp: stopCounter }, "+"))));
};
export default TouchSpin;

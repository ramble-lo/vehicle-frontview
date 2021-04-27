"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
require("./normalize.css");
require("./App.scss");
var FrontView_1 = require("./components/FrontView");
var TimeStamp_1 = require("./components/TimeStamp");
var no_frontview_mp4_1 = require("./vidoes/no-frontview.mp4");
var have_frontview_mp4_1 = require("./vidoes/have-frontview.mp4");
// interface App {
//   onClick(video: string): React.MouseEventHandler<HTMLButtonElement>;
// }
var App = function () {
    var _a = react_1.useState(''), keyInCode = _a[0], setKeyInCode = _a[1];
    var _b = react_1.useState(0), startTime = _b[0], setStartTime = _b[1];
    var _c = react_1.useState([0]), recordTime = _c[0], setRecordTime = _c[1];
    var _d = react_1.useState(''), screenStyle = _d[0], setScreenStyle = _d[1];
    var _e = react_1.useState(no_frontview_mp4_1["default"]), videoKind = _e[0], setVideoKind = _e[1];
    react_1.useEffect(function () {
        window.addEventListener("keydown", handleKeyIn, false);
        return function () {
            window.removeEventListener("keydown", handleKeyIn, false);
        };
    });
    react_1.useEffect(function () {
        var myVar = setInterval(function () { return setScreenStyle(''); }, 1000);
        return function () {
            clearInterval(myVar);
        };
    }, [screenStyle]);
    var onClickHaveFrontViewVideoKind = function () {
        setVideoKind(have_frontview_mp4_1["default"]);
        console.log('HaveFrontViewVideoKind');
        console.log(videoKind);
    };
    var onClickNoFrontViewVideoKind = function () {
        setVideoKind(no_frontview_mp4_1["default"]);
        console.log('NoFrontViewVideoKind');
        console.log(videoKind);
    };
    var onClickRecordTime = function () {
        var string = '';
        for (var _i = 0, recordTime_1 = recordTime; _i < recordTime_1.length; _i++) {
            var time = recordTime_1[_i];
            if (time > 0) {
                console.log(time);
                string += time + ' ';
            }
        }
        console.log(string);
    };
    var handleScreenStyle = function (keyIn) {
        var style;
        if (keyIn === 'a') {
            style = 'alert-screen';
        }
        else if (keyIn === 's') {
            style = 'start-screen';
        }
        else {
            style = '';
        }
        setScreenStyle(style);
    };
    var handleKeyIn = function (e) {
        // let dateTime = Date.now();
        // let timestamp = Math.floor(dateTime / 100);
        var recoedTimeStamp;
        var startTimeStamp = startTime;
        if (e.key === 's' && startTimeStamp === 0) {
            startTimeStamp = new Date().getTime();
        }
        if (e.key === 'a') {
            recoedTimeStamp = new Date().getTime();
        }
        handleScreenStyle(e.key);
        setKeyInCode(function (pre) { return pre = e.key; });
        setStartTime(startTimeStamp);
        setRecordTime(function (pre) { return __spreadArrays(pre, [(recoedTimeStamp - startTimeStamp) / 1000]); });
    };
    return (react_1["default"].createElement("div", { className: 'App' },
        react_1["default"].createElement(FrontView_1["default"], { keyInCode: keyInCode, screenStyle: screenStyle, videoKind: videoKind }),
        react_1["default"].createElement("h2", null, "Autonomous vehicle reaction test's timestamp"),
        react_1["default"].createElement("h1", null, videoKind == '/static/media/no-frontview.6c40e73b.mp4' ? 'No front view' : 'Have front view'),
        react_1["default"].createElement("button", { onClick: onClickNoFrontViewVideoKind }, "No front view"),
        react_1["default"].createElement("button", { onClick: onClickHaveFrontViewVideoKind }, "Have front view"),
        react_1["default"].createElement("button", { onClick: onClickRecordTime }, "Record Time"),
        react_1["default"].createElement(TimeStamp_1["default"], { recordTime: recordTime })));
};
exports["default"] = App;

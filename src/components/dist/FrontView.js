"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_player_1 = require("react-player");
var FrontView = function (_a) {
    var keyInCode = _a.keyInCode, screenStyle = _a.screenStyle, videoKind = _a.videoKind;
    var _b = react_1.useState(false), isPlayed = _b[0], setIsPlayed = _b[1];
    react_1.useEffect(function () {
        var firstPlayed = isPlayed;
        if (keyInCode === 's') {
            firstPlayed = true;
        }
        else if (keyInCode === 'a') {
            return;
        }
        setIsPlayed(firstPlayed);
        console.log(keyInCode);
    }, [keyInCode, isPlayed]);
    // const onClickPlayVideo = () => {
    //     setIsPlayed(!isPlayed)
    //     console.log(isPlayed);
    // }
    return (react_1["default"].createElement("div", { className: 'front-view' },
        react_1["default"].createElement("div", { className: 'screen ' + screenStyle }),
        react_1["default"].createElement(react_player_1["default"], { url: videoKind, width: '100%', height: '100%', playing: isPlayed })));
};
exports["default"] = FrontView;

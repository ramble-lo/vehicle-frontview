"use strict";
exports.__esModule = true;
var react_1 = require("react");
// interface RefObject {
//     current: object
// }
var TimeStamp = function (_a) {
    // const timeRef = React.useRef<HTMLDivElement>(null)
    // const onClickSelectAllCopy = () => {
    //     // console.log('onClickSelectAllCopy');
    //     // console.log(timeRef.current)
    //     console.log(timeRef.current.innerHTML)
    // }
    var recordTime = _a.recordTime;
    return (react_1["default"].createElement("div", { className: 'timestamp' }, recordTime.map(function (currentValue, index) {
        if (index <= 1)
            return;
        return react_1["default"].createElement("div", { key: index }, currentValue);
    })));
};
exports["default"] = TimeStamp;

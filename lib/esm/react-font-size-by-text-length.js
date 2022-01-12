import React from "react";
export function ReactFontSizeByTextLength(_a) {
    var children = _a.children, _b = _a.maxPercent, maxPercent = _b === void 0 ? 100 : _b, _c = _a.minPercent, minPercent = _c === void 0 ? 0 : _c, changePerChar = _a.changePerChar, _d = _a.startAtChar, startAtChar = _d === void 0 ? 0 : _d, _e = _a.stopAtChar, stopAtChar = _e === void 0 ? Infinity : _e;
    var fontSizeInPercent = getNewFontSizeInPercent(maxPercent, minPercent, changePerChar, startAtChar, stopAtChar, Array.isArray(children)
        ? getNumberOfCharsForMultipleChildren(children)
        : getNumberOfCharsForSingleChild(children));
    return React.createElement("span", { style: { fontSize: "".concat(fontSizeInPercent, "%") } }, children);
}
var getNumberOfCharsForSingleChild = function (child) {
    return child.props.children.length;
};
var getNumberOfCharsForMultipleChildren = function (children) {
    var returnable = 0;
    children.forEach(function (child) {
        if (child.props.children) {
            returnable += child.props.children.length;
        }
        else {
            returnable += 1;
        }
    });
    return returnable;
};
var getNewFontSizeInPercent = function (maxPercent, minPercent, changePerChar, startAtChar, stopAtChar, numberOfChars) {
    var numberOfCharsAdjusted = Math.min(numberOfChars, stopAtChar);
    var numberOfCharToConsiderForCalculation = Math.max(0, numberOfCharsAdjusted - (startAtChar - 1));
    var fontSizeInPercent = Math.max(minPercent, maxPercent - changePerChar * numberOfCharToConsiderForCalculation);
    return fontSizeInPercent;
};

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Dropdown(_ref) {
  var label = _ref.label,
    options = _ref.options,
    value = _ref.value,
    onChange = _ref.onChange;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", null, label), /*#__PURE__*/_react["default"].createElement("select", {
    value: value,
    onChange: onChange
  }, options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: option.value,
      value: option.value
    }, option.label);
  })));
}
var _default = exports["default"] = Dropdown;
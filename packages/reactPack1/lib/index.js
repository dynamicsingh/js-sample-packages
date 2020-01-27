"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reactPack1 = function reactPack1(_ref) {
  var firstName = _ref.firstName,
      lastName = _ref.lastName,
      age = _ref.age;
  return _react.default.createElement("div", null, firstName, " : ", lastName, " : ", age);
};

reactPack1.defaultProps = {
  lastName: ""
};
reactPack1.propTypes = {
  firstName: _propTypes.default.string.isRequired,
  lastName: _propTypes.default.string,
  age: _propTypes.default.number.isRequired
};
var _default = reactPack1;
exports.default = _default;
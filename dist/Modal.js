"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Modal.css");

var Modal = function Modal(_ref) {
  var handleState = _ref.handleState;

  var closeModal = function closeModal(e) {
    e.preventDefault();
    handleState(false);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modalOverlay show"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "confirmModal"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Successfully added subject to database"), /*#__PURE__*/_react.default.createElement("div", {
    className: "modalHeader"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: closeModal
  }, "Close this dialog"))));
};

exports.Modal = Modal;
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var WarningIcon = require('@material-ui/icons/Warning');
var CheckIcon = require('@material-ui/icons/Check');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var WarningIcon__default = /*#__PURE__*/_interopDefaultLegacy(WarningIcon);
var CheckIcon__default = /*#__PURE__*/_interopDefaultLegacy(CheckIcon);

const Requirement = ({
  value,
  requirement
}) => {
  const [isValid, setisValid] = React.useState();
  let iconStyles = {
    fontSize: '13px'
  };
  React.useEffect(() => {
    setisValid(requirement.validator(value));
  }, [value, requirement]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "requirement"
  }, isValid ? /*#__PURE__*/React__default['default'].createElement(CheckIcon__default['default'], {
    style: iconStyles
  }) : /*#__PURE__*/React__default['default'].createElement(WarningIcon__default['default'], {
    style: iconStyles
  }), /*#__PURE__*/React__default['default'].createElement("p", {
    className: isValid ? 'valid' : 'invalid'
  }, requirement.text));
};

const ReqDialog = ({
  value,
  Requirements,
  onValidChange
}) => {
  const validChange = React.useCallback(onValidChange, []);
  React.useEffect(() => {
    validChange(Requirements.every(req => req.validator(value)));
  }, [value, Requirements, validChange]);
  return Requirements.map((req, index) => /*#__PURE__*/React__default['default'].createElement(Requirement, {
    key: index,
    value: value,
    requirement: req,
    onValidChange: onValidChange
  }));
};

exports.ReqDialog = ReqDialog;

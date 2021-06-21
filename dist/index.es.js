import React, { useState, useEffect, useCallback } from 'react';
import WarningIcon from '@material-ui/icons/Warning';
import CheckIcon from '@material-ui/icons/Check';

const Requirement = ({
  value,
  requirement
}) => {
  const [isValid, setisValid] = useState();
  let iconStyles = {
    fontSize: '13px'
  };
  useEffect(() => {
    setisValid(requirement.validator(value));
  }, [value, requirement]);
  return /*#__PURE__*/React.createElement("div", {
    className: "requirement"
  }, isValid ? /*#__PURE__*/React.createElement(CheckIcon, {
    style: iconStyles
  }) : /*#__PURE__*/React.createElement(WarningIcon, {
    style: iconStyles
  }), /*#__PURE__*/React.createElement("p", {
    className: isValid ? 'valid' : 'invalid'
  }, requirement.text));
};

const ReqDialog = ({
  value,
  Requirements,
  onValidChange
}) => {
  const validChange = useCallback(onValidChange, []);
  useEffect(() => {
    validChange(Requirements.every(req => req.validator(value)));
  }, [value, Requirements, validChange]);
  return Requirements.map((req, index) => /*#__PURE__*/React.createElement(Requirement, {
    key: index,
    value: value,
    requirement: req,
    onValidChange: onValidChange
  }));
};

export { ReqDialog };

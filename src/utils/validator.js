export const validatorNumber = function (value) {
  const onlyNumDotRegex = /[^.0-9]/g;
  if (onlyNumDotRegex.exec(value)) {
    return false;
  }
  return true;
};

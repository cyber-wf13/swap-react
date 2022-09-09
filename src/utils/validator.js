export const validatorNumber = function (value) {
  if (value.match(/[^.0-9]/)) {
    return false;
  }
  return true;
};

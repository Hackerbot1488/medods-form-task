export const isWord = function (value) {
  return !!value.match(/(^[a-zA-Zа-яА-Я\s]*$)/);
};
export const isNumber = function (value) {
  return !!value.match(/(^[0-9]*$)/);
};
export const isPhone = function (value) {
  return !!value.match(/(^(\+7[0-9]{10})*$)/)
}
export const isDate = function (value) {
  return !!value.match(/((^(\d{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1])))*$)|(^(((0[1-9])|([1-2][0-9])|(3[0-1]))\.((0[1-9])|(1[0-2]))\.\d{4})*$))/)
}
const jsonata = require('jsonata');
const _ = require('lodash');
export const extractFromJSON = (data = {}, exp = '') => {
  const expression = jsonata(exp);
  const result = expression.evaluate(data);
  //   debugger;
  console.log('expression', result);
  return result;
};

export function transformToFormData(
  data,
  formData = new FormData(),
  parentKey = null
) {
  _.forEach(data, (value, key) => {
    if (value === null) return; // else "null" will be added

    let formattedKey = _.isEmpty(parentKey) ? key : `${parentKey}[${key}]`;

    if (value instanceof File) {
      formData.set(formattedKey, value);
    } else if (value instanceof Array) {
      _.forEach(value, (ele) => {
        formData.append(`${formattedKey}`, ele);
      });
    } else if (value instanceof Object) {
      transformToFormData(value, formData, formattedKey);
    } else {
      formData.set(formattedKey, value);
    }
  });
  return formData;
}

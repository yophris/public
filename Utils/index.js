const jsonata = require('jsonata');

export const extractFromJSON = (data = {}, exp = '') => {
  const expression = jsonata(exp);
  const result = expression.evaluate(data);
  //   debugger;
  return result;
};

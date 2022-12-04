import { extractFromJSON } from 'Utils';
import * as Yup from 'yup';

const validationSchemaGenerator = (form) => {
  let schema = extractFromJSON(
    form,
    `**.fields.{
        "key":attr.name,
        "validation":validation
    }`
  );
  let obj = schema.reduce((agg, each) => {
    agg[each.key] = { validation: each?.validation };
    return agg;
  }, {});

  return recurse(deepen(obj));
};

function deepen(obj) {
  const result = {};
  // For each object path (property key) in the object
  for (const objectPath in obj) {
    // Split path into component parts
    const parts = objectPath.split('.');

    // Create sub-objects along path as needed
    let target = result;
    while (parts.length > 1) {
      const part = parts.shift();

      target = target[part] = target[part] || {};
    }

    // Set value at end of path
    target[parts[0]] = obj[objectPath];
  }

  console.log('Deep', result);
  return result;
}

function createYupSchema(config) {
  const { id, validationType, validations = [] } = config;

  let validator = Yup[validationType]();
  validations.forEach((validation) => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }
    console.log(type, params);
    validator = validator[type](...params);
  });

  return validator;
}

function recurse(objc, level = 0) {
  let shape = {};
  for (const key in objc) {
    if ('validation' in objc[key]) {
      // Yup.object().shape()
      console.log('Has validation', objc[key].validation);
      if (objc[key].validation) {
        shape[key] = createYupSchema(objc[key].validation);
      }
    } else {
      shape[key] = recurse(objc[key], level + 1);
      // console.log('inside', rec);
    }
  }

  return Yup.object().shape(shape);
}

export default validationSchemaGenerator;

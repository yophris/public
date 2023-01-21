export const fieldValidationRules = ( validations ) => {
  const rules = {};



  validations?.forEach((validation) => {
    switch (validation.type) {
      case 'required': {
        rules.required = {
          value: true,
          message: 'This field is required',
        };
      }
      case 'Range':
        {
          let min = validation.range?.min;
          let max = validation.range?.max;
          let step = validation.range?.step;
          let rtype = validation.range?.type;
          if (min !== undefined) {
            rules.min = {
              value: min,
              message: `This field must be at least ${min}`,
            };
          }
          if (max !== undefined) {
            rules.max = {
              value: max,
              message: `This field must be at most ${max}`,
            };
          }
          if (step !== undefined) {
            rules.validate = function (value) {
              if (value < min) {
                return `This field must be at least ${min}`;
              }
              if (value > max) {
                return `This field must be at most ${max}`;
              }
              if (value % step !== 0) {
                return `This field must be a multiple of ${step}`;
              }
              // if geometric progression
              if (rtype === 'gp' && step > 1) {
                min = min || step; // make sure min is not zero
                // x = y*z^i
                // let n = Math.floor(Math.log(max / min) / Math.log(step))
                // i = Log[x/y]/Log[z]
                if (!Number.isInteger(Math.log(value / min) / Math.log(step))) {
                  return `This field must be in geometric progression from ${min} to ${max}`;
                }
              }
            };
          }
        }
        break;
      default:
      // case 'Enum':
      //   rules.validate = function (value) {
      //     return (
      //       validation.enum.includes(value) ||
      //       `This field must be one of ${validation.enum.join(', ')}`
      //     );
      //   };
      //   break;
      // case 'Regex':
      //   rules.pattern = {
      //     value: new RegExp(validation.regex),
      //     message: `${
      //       regexMap[validation.regex]
      //         ? regexMap[validation.regex]
      //         : 'This field must match ${validation.regex'
      //     }`,
      //   };
      //   break;
      case 'Length':
        {
          let min = validation.length?.min;
          let max = validation.length?.max;
          if (min !== undefined) {
            rules.minLength = {
              value: min,
              message: `This field must be at least ${min} characters long`,
            };
          }
          if (max !== undefined) {
            rules.maxLength = {
              value: max,
              message: `This field must be at most ${max} characters long`,
            };
          }
        }
        break;
      // case 'Expr': {
      //   let expr = validation?.expr;
      //   if (expr && expr.startsWith('$fn')) {
      //     let parts = expr.split(expr.charAt(3));
      //     let fn = parts[1];
      //     let v1 = parts[2];
      //     let v2 = parts[3];
      //     rules.validate = function () {
      //       if (SectionEvaluate(fn, gV(v1), gV(v2))) {
      //         return true;
      //       }
      //       if (validation.message) return validation.message;
      //       if (validation.msg) return validation.msg;
      //       return 'invalid value';
      //     };
      //   }
      // }
    }
  });
  return rules;
};

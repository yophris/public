import { extractFromJSON } from 'Utils';

const smartUrlBuilder = (templateString = '', templateVariables = {}) => {
  const keys = [];
  const x = templateString.replace?.(/\${(.*?)}/g, (_, g) => {
    keys.push(g);
    return extractFromJSON(templateVariables, g) || `<${g}:__MISSING_VALUE__>`;
  });

  return [x, keys];
};

export default smartUrlBuilder;

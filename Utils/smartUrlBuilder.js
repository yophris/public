const smartUrlBuilder = (templateString = '', templateVariables = {}) => {
    const x = templateString.replace?.(/\${(.*?)}/g, (_, g) =>
      templateVariables[g] ? templateVariables[g] : `<${g}:__MISSING_VALUE__>`,
    );
  
    return x;
  };

  export default smartUrlBuilder;
  
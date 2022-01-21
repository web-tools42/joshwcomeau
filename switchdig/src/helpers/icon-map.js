const fileList = require.context('../icons', true, /[\s\S]*$/);

const iconMap = {};
fileList.keys().forEach((x) => {
  const filename = x.replace('./', '');

  // eslint-disable-next-line global-require, import/no-dynamic-require
  iconMap[filename.replace('.svg', '')] = require(`../icons/${filename}`);
});

export default iconMap;

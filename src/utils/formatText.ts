const formatProductTitle = (text: string, charNum: number = 10): string => {
  let remainText = text.slice(0, charNum);
  return text.length > charNum ? remainText + "..." : text;
};

const formatPath = (pathName: string): string => {
  return pathName[0].toUpperCase() + pathName.slice(1);
};

export { formatProductTitle, formatPath };

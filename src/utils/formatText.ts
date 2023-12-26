const formatProductTitle = (text: string, charNum: number = 10): string => {
  let remainText = text.slice(0, charNum);
  return text.length > charNum ? remainText + "..." : text;
};

export { formatProductTitle };

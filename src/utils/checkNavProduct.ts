const checkNavProduct = (path: string) => {
  if (path.includes("products")) {
    return true;
  }
  if (path.includes("checkout")) {
    return true;
  }
  if (path.includes("orderHx")) {
    return true;
  }
  return false;
};

export { checkNavProduct };

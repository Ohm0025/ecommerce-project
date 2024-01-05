export const discountCal = (
  startPrice: number,
  discountRate: number
): number => {
  let rawAns = startPrice - (startPrice * discountRate) / 100;
  return +rawAns.toFixed(2);
};

export const taxCal = (startPrice: number, taxPercent: number = 7): number => {
  let rawAns = startPrice + (startPrice * taxPercent) / 100;
  return +rawAns.toFixed(2);
};

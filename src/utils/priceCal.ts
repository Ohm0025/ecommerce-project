export const discountCal = (
  startPrice: number,
  discountRate: number
): number => {
  let rawAns = startPrice - (startPrice * discountRate) / 100;
  return +rawAns.toFixed(2);
};

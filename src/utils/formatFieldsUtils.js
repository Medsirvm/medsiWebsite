export const formatNumber = (num) => {
  if (typeof number !== "number") {
    num = parseInt(num);
  }
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

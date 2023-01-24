export const generateTransaction = (n) => {
  const T = new Date().getTime();
  const [AP, AM, N, idx] = n;
  return "M" + (T + idx) + AP.charAt(0) + AM.charAt(0) + N.charAt(0);
}
export const generateTransaction = (n) => {
  const T = new Date().getTime();
  const [AP, AM, N] = n;
  return "M" + T + AP.charAt(0) + AM.charAt(0) + N.charAt(0);
}
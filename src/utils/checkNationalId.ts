export const checkNationalId = (code: string) => {
  let L = code.length;

  if (L < 8 || parseInt(code, 10) == 0) return false;
  code = ("0000" + code).substring(L + 4 - 10);
  if (parseInt(code.substring(3, 6), 10) == 0) return false;
  let c = parseInt(code.substring(9, 1), 10);
  let s = 0;
  for (let i = 0; i < 9; i++)
    s += parseInt(code.substring(i, 1), 10) * (10 - i);
  s = s % 11;
  return (s < 2 && c == s) || (s >= 2 && c == 11 - s);
};

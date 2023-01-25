function max1020(a, b) {
  // first way
  if (a >= 10 && a <= 20 && b >= 10 && b <= 20) return a > b ? a : b;
  else if (a >= 10 && a <= 20) return a;
  else if (b >= 10 && b <= 20) return b;
  return 0;

  //   second way
  let aInter = a >= 10 && a <= 20;
  let bInter = b <= 20 && b >= 10;

  if (aInter && bInter) return a > b ? a : b;
  else if (aInter || bInter) return aInter ? a : b;
  return 0;
}

function intMax(a, b, c) {
  // first way
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;

  //   second way
  return Math.max(a, b, c);
}

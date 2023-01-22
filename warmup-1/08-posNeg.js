function posNeg(a, b, negative) {
  // noob's way
  if (negative && a < 0 && b < 0) {
    return true;
  } else if (a * b < 0 && negative == 0) {
    return true;
  } else return false;

  // pro's way
  if (negative) {
    return a < 0 && b < 0; //true false
  } else {
    return a * b < 0;  // true false
  }
}
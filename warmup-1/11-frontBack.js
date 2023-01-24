function frontBack(str) {
  // first way
  if (str.length <= 1) {
    return str;
  }
  let front = str.charAt(0);
  let back = str.charAt(str.length - 1);

  let middle = str.substring(1, str.length - 1);

  return back + middle + front;

  //  second way

  if (str.length <= 1) {
    return str;
  }
  return str[str.length - 1] + str.substring(1, str.length - 1) + str[0];
}

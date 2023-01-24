function startHi(str) {
  // first way
  let a = "hi";
  if (str.split(" ")[0] == a) return true;
  else return false;
  //   second way
  return str[0] + str[1] == "hi";
}

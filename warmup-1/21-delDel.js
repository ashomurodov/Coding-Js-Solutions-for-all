function delDel(str) {
  let a = str.substr(1, 3);
  // first way
  if (a == "del") {
    return str.replace("del", "");
  }
  return str;

  //   second way
  return a == "del" ? str.replace("del", "") : str;
}

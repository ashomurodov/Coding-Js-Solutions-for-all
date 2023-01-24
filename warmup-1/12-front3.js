function front3(str){
    // first way
    let string = "";
    if (str.length <= 3) string = str;
    string = str.substring(0, 3);
    return string.repeat(3)

    //second way
    let a = str.substring(0, 3);
  
    return a+a+a;
}
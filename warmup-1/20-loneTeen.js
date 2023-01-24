function loneTeen(a, b){
    // first way
    if ((a<13 || a>19) == (b<13 || b>19)){return false}
    else return true

    // second way
    return (a<13 || a>19) != (b<13 || b>19);
  }
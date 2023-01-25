function icyHot(temp1, temp2){

    // first way
    if(temp1*temp2<0 && (temp1>100 || temp2>100)) return true;
    else return false

    // second way 
    return temp1*temp2<0 && (temp1>100 || temp2>100);
  }
function notString(str){
    // first way
    if(str.substring(0, 3)=="not"){
        return str
    } else return `not ${str}`;


    // second way
    if(str.indexOf("not")==0){
      return str
    } else return "not "+str
  }
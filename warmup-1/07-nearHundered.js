function nearHundred(n){

    // solution for noobs

      let num1 = Math.abs(n-100);
      let num2 = Math.abs(n-200);
      
      if(num1 <= 10 || num2 <=10){
        return true
      }
      else {
        return false
      }
      
      
    //   solution for pros
    
      return Math.abs(n-100) <=10 || Math.abs(n-200) <=10
      
    }
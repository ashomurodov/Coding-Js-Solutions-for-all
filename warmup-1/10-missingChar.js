function missingChar(str, n){
    // first way
    return str.substring(0, n)+str.substring(n+1);

    // second way
    return str.replace(str.charAt(n), '');
}
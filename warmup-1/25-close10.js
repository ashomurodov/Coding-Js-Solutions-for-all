function close10(a, b){
    let A = Math.abs(a-10);
    let B = Math.abs(b-10);

    return A>B ? b:a;
}
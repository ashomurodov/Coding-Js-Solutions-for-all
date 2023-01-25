// ? Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

// dolphins
let teamName1 = "Dolphins";
let teamName2 = "Koalas";

let d1 = 96;
let d2 = 108;
let d3 = 89;

//  koalas

let k1 = 88;
let k2 = 91;
let k3 = 110;

let D_averageScore = (d1 + d2 + d3) / 3;
let K_averageScore = (k1 + k2 + k3) / 3;

if (D_averageScore < 100 && K_averageScore < 100) {

  console.log(`No winners 🥶`);

} else if (D_averageScore == K_averageScore) {

  console.log(`${teamName1} and ${teamName2} winners 🏆`);
  
}else {
    let winnerName = D_averageScore > K_averageScore ? teamName1 : teamName2;
    console.log(`${winnerName} winner 🏆`);
}

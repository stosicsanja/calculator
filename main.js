/* else if petlja */

let danUNedelji = 7;
let output = " dana vam je ostalo do vikenda";

if (danUNedelji == 1) {
  console.log(5 + output);
} else if (danUNedelji == 2) {
  console.log(4 + output);
} else if (danUNedelji == 3) {
  console.log(3 + output);
} else if (danUNedelji == 4) {
  console.log(2 + output);
} else if (danUNedelji == 5) {
  console.log(1 + " dan vam je ostao do vikenda");
} else if (danUNedelji == 6 || danUNedelji == 7) {
  console.log("Vikend je :)");
} else {
  console.log("Nevalidan podatak");
}

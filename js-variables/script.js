function one() {
  const firstName = "Rodrigo";
  const favoriteColor = "blue";

  let location = "Salon Profe Calahorrita";
  let mood = "Tired";

  console.log(`My name is ${firstName} and my favorite color is ${favoriteColor}`);
  console.log(`My actual location is ${location} and now I'm ${mood}`);
  mood = "very tired";

  console.log(`Now I'm ${mood}`);
}
function two() {
  const companyName = "Toyota";
  const foundingYear = 1933;
  const isActive = true;
  let fundingAmount;

  console.log("Company Name:", companyName);
  console.log("Founding Year:", foundingYear);
  console.log("Is Active:", isActive);
  console.log("Funding Amount:", fundingAmount);
}
function three() {
  let num = 8;
  const n = num;
  num = num * 2;
  num = num + 10;
  num = num / 2;
  num = num - n;

    alert(num);
}

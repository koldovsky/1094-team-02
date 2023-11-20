//Grasshopper - Messi goals function
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//Return Negative
function makeNegative(num) {
  return -Math.abs(num);
}

//Grasshopper - Terminal game move function
function move (position, roll) {
  return (roll * 2 + position)
}

//Grasshopper - Personalized Message
function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss';
  } else {
    return 'Hello guest';
  }
}

//Keep Hydrated!
function litres(time) {
  const waterAmount = 0.5 * time;
  const roundedWaterAmount = Math.floor(waterAmount);
  return roundedWaterAmount;
}

//Opposites Attract
function lovefunc(flower1, flower2) {
  return (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
         (flower1 % 2 !== 0 && flower2 % 2 === 0);
}
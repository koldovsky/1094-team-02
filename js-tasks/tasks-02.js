// Task Opposites Attract 
function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 != 0) {
    return true;
  } else if (flower2 % 2 === 0 && flower1 % 2 != 0) {
    return true;
  }
  return false;
}

// Task Keep Hydrated!
function litres(time) {
  return Math.floor(time * 0.5);
}

// Task Grasshopper - Personalized Message
function greet(name, owner) {
  if (owner === name) {
    return "Hello boss";
  }
  return "Hello guest";
}

// Task Grasshopper - Terminal game move function
function move(position, roll) {
  return (position = position + 2 * roll);
}

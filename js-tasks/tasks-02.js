// Task Opposites Attract 
function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 != 0) {
    return true;
  } else if (flower2 % 2 === 0 && flower1 % 2 != 0) {
    return true;
  }
  return false;
}

// Task Opposites Attract
function litres(time) {
  return Math.floor(time * 0.5);
}

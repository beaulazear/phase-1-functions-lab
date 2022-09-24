const streetNumber = (n);

function distanceFromHqInBlocks(n){
    const blocksTraveled = Math.abs(n - 42);
    return blocksTraveled;
}

function distanceFromHqInFeet(blocksTraveled){
    return distanceFromHqInBlocks(blocksTraveled) * 264;
}


function distanceTravelledInFeet(x, y){
    const feetTravelled = Math.abs(x - y) * 264;
    return feetTravelled;
}

function calculatesFarePrice(x, y){
  const fareFeet = Math.abs(x - y) * 264;
  if (fareFeet < 400){
    return 0;
  } else if (fareFeet >= 400 && fareFeet <= 2000){
    return (fareFeet - 400) * .02;
  } else if (fareFeet > 2000 && fareFeet < 2500){
    return 25;
  } else if (fareFeet >= 2500){
    return "cannot travel that far";
  }
}
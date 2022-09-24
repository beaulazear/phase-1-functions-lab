
switch (feetTravelled) {
    case (feetTravelled < 400):
        price = 0;
        break;
    case (feetTravelled <= 200):
        price = feetTravelled * 264;
        break;
    case (feetTravelled < 2500):
        price = 25;
        break;
    case (feetTravelled >= 2500):
        price = "cannot travel that far";
        break;
}
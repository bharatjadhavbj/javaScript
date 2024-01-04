console.log(
  `--------------------------------------------- Month of year ------------------------------------------------------------ \n`);

var monthOfYear = function (month) {
  switch (month) {
    case 1:
      console.log(`Month ${month} is January\n`);
      break;
    case 2:
      console.log(`Month ${month} is february\n`);
      break;
    case 3:
      console.log(`Month ${month} is March\n`);
      break;
    case 4:
      console.log(`Month ${month} is April\n`);
      break;
    case 5:
      console.log(`Month ${month} is May\n`);
      break;
    case 6:
      console.log(`Month ${month} is June\n`);
      break;
    case 7:
      console.log(`Month ${month} is July\n`);
      break;
    case 8:
      console.log(`Month ${month} is August\n`);
      break;
    case 9:
      console.log(`Month ${month} is september\n`);
      break;
    case 10:
      console.log(`Month ${month} is October\n`);
      break;
    case 11:
      console.log(`Month ${month} is November\n`);
      break;
    case 12:
      console.log(`Month ${month} is December\n`);
      break;
    default:
      console.log(`Month ${month} is Invalid input\n`);
    break;
  }
};
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);

let raceNumber = Math.floor(Math.random() * 1000);
const isRegisteredEarly = true;
let runnerAge = 18;

if (runnerAge > 18 && isRegisteredEarly){
  raceNumber += 1000
}

if (runnerAge > 18 && isRegisteredEarly){
console.log(`Hello racer! Kindly be informed that your race starts at 9:30 am. \nYour Race number is: ${raceNumber}`);
}else if(runnerAge > 18 && !isRegisteredEarly){
console.log(`Hello racer! Kindly be informed that your race starts at 11:00 am. \nYour Race number is: ${raceNumber}`);
}else if(runnerAge < 18){
console.log(`Hello racer! Kindly be informed that your race starts at 12:30 pm. \nYour Race number is: ${raceNumber}`);
}
else{
  console.log('Hello racer! Kindly see the registration desk.');
}
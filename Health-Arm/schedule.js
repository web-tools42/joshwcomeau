const moment = require('moment');

module.exports = {
  calculateTimeOfNextBlast(waterInfo, waterGoal) {
    const currentAmountDrank = waterInfo.summary.water;
    const target = waterGoal.goal.goal;
    const percentageOfGoal = currentAmountDrank / target * 100;
    const percentageOfDay = moment().hour() / 24 * 100;
    const timeToDrink = 15;


    // always suggest a drink IMMEDIATELY if you're behind drinking water for the time of day
    // will require changes to the copy on the front end (probably)
    // otherwise, suggest a drink in an hour
    if (percentageOfGoal <= percentageOfDay) {
    	timeToDrink = 1;
    } else {
    	timeToDrink = 60;
    }

    return moment().add(timeToDrink, 'minutes').fromNow();
  }
}

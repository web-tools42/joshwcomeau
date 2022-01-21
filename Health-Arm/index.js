const path = require('path');
const express = require('express');
const async = require('asyncawait/async');
const await = require('asyncawait/await');

const { authenticate, profileInfo, waterInfo, waterGoal } = require('./fitbit_api');
const { calculateTimeOfNextBlast } = require('./schedule');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('client'));

app.get('/', (req, res) => {
  res.render('index', { authenticated: false });
});

app.get('/fitbit', async (function(req, res) {
  const authInfo = await (authenticate(req.query));

  const [profile, info, goal] = await (Promise.all([
    profileInfo(authInfo),
    waterInfo(authInfo),
    waterGoal(authInfo)
  ]));


  // We need to calculate the time of the next water blast.
  const timeUntilBlast = calculateTimeOfNextBlast(info, goal);

  // Round the amount of water consumed to the nearest half-cup.
  const cupsDrank =  Math.round(info.summary.water / 236 * 2) / 2;
  const cupsRequired = Math.round(goal.goal.goal / 236 * 2) / 2;

  res.render('index', {
    authenticated: true,
    name: 'Josh',
    cupsDrank,
    cupsRequired,
    needsMoreWater: cupsDrank < cupsRequired,
    timeUntilBlast,
  });
}));

app.post('/fire', (req, res) => {
  // TODO: Implement firing logic!

  res.json({ fired: true })
});

app.listen(3000);

// TODO: Consolidate with scripts/setup
const path = require('path');

require('dotenv').config({
  // TODO: Don't do this in CI!
  path: '.env.local',
});

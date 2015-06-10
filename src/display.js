var display     = require('intel-edison-lcd-rgb-backlight-display-helper'),
    util        = require('util'),
    format      = util.format;


var Display = function Display () {
  'use strict';

  // If is not instance of Display return a new instance
  if (false === (this instanceof Display)) {
    return new Display();
  }
};


// Start display
Display.prototype.start = function Diplay () {
  'use strict';

  display.set(2, 16);
  display.setColor('green')

  display.write(['BeaconTracker', '----------------']);
};


// Update display
Display.prototype.update = function update (temperature, ibeacons) {
  'use strict';

  if (temperature > 26) {
    display.setColor('red')

  } else if (temperature < 20) {
    display.setColor('yellow')

  } else {
    display.setColor('blue');
  }

  display.write([
    format('Temp: %sC', temperature),
    format('IBeacons: %s', ibeacons)
  ]);
};


exports = module.exports = Display;


require('../scss/style.scss');

const $   = document.querySelector.bind(document);
const $$  = document.querySelectorAll.bind(document);

const STARTING_POSITION = 50;


const horseFactory = function({ id, color }) {
  // Private Variables.
  let _position = STARTING_POSITION;
  let _isGalloping = false;

  // Every horse is given a "handicap" between 0.5 and 2. Without it, the
  // races tend to be very very close calls; not enough volatility between
  // horses. The handicap is just a multiplier applied to every "gallop".
  function generateHandicap() { return random(0.5, 2, false); }

  const newHorse = {
    id,
    color,
    handicap: generateHandicap(),
    elem: $(`#horse${id}`),
    trackElem: $(`#track${id}`),
    get position() { return _position; },
    set position(newPosition) {
      _position = newPosition;
      DOMOperations.moveHorse(newHorse)
    },
    get isGalloping() { return _isGalloping },
    set isGalloping(newStatus) {
      _isGalloping = newStatus;
      DOMOperations.swapHorseImage(newHorse, _isGalloping);
    },
    gallop() {
      if ( !newHorse.isGalloping ) newHorse.isGalloping = true;
      newHorse.position = calculateNewPosition(newHorse);
    },
    stop() {
      newHorse.isGalloping = false;
    },
    reset() {
      newHorse.position = STARTING_POSITION;
      newHorse.handicap = generateHandicap();
    }
  };

  return newHorse;
}


function initialize() {
  const horses = [
    horseFactory({ id: 1, color: 'red'  }),
    horseFactory({ id: 2, color: 'blue' })
  ];

  // Event Handlers
  $('.start-race').addEventListener( 'click', () => {
    horses.forEach( horse => horse.reset() );
    gameLoop(horses);
  });
}

function gameLoop(horses) {
  window.requestAnimationFrame(() => {
    horses.forEach( horse => horse.gallop() )

    const winningHorse = horses.find( isWinner );

    if ( winningHorse ) {
      horses.forEach( horse => horse.stop() );
      return declareWinner(winningHorse)
    }

    gameLoop(horses);
  })
}

function isWinner(horse) {
  const horseRight = horse.elem.getBoundingClientRect().right;
  const trackRight = horse.trackElem.getBoundingClientRect().right;
  return horseRight >= trackRight;
}

function declareWinner(horse) {
  alert(horse.color + " Won!")
}


function random(min, max, floor=true) {
  const num = Math.random() * (max - min) + min
  return floor ? Math.floor(num) : num;
}

function calculateNewPosition(horse) {
  return horse.position + random(5, 15) * horse.handicap;
}


const DOMOperations = {
  moveHorse(horse) {
    horse.elem.style.left = `${horse.position}px`;
  },
  setHorseImage(horse, src) {
    horse.elem.querySelector('img').src = src;
  },
  swapHorseImage(horse, animating=true) {
    // Swap out the static image, when the race is paused, with the animated
    // one when the race is running.
    //
    // This is a bit ugly, but it's not worth the effort to build a more
    // sophisticated system. For now, image filenames always follow the same
    // structure, so we can just use the horse's color.
    const imgSuffix = animating ? '_horse.gif' : '_horse_still.png';
    const imgPath   = `./images/${horse.color}${imgSuffix}`
    DOMOperations.setHorseImage(horse, imgPath);
  }
}

initialize();

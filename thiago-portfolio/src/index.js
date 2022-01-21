import { createHistory } from 'history';
import { createStore, combineReducers } from './pseudo-redux.js';
import translations from './data/translations';
import updateAnimatedHeading from './update-animated-heading';

import contactForm, { toggleContactForm } from './contact-form.duck';
import language, { switchLanguage } from './language.duck';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const history = createHistory();

const reducer = combineReducers({ contactForm, language });
const store = createStore(reducer);


// Reconciler
// This is invoked whenever the route changes, and it's responsible for doing
// all the calculations to ensure things animate correctly.
const createReconciler = () => {
  // Making this a factory just so we can cache these selectors.
  const $homeSection = $('.js-home-section');
  const $contactSection = $('.js-contact-section');
  const $aboutMe = $('.js-about-me');
  const $thiago = $('.js-main-image');
  const $contactContents = $('.js-contact-contents');
  const $contactSubmit = $('.js-contact-contents .submit');

  let previousState = store.getState();

  return function reconciler() {
    const state = store.getState();
    const isContactVisible = state.contactForm;
    const language = state.language;

    const contactFormChanged = state.contactForm !== previousState.contactForm;

    if (contactFormChanged) {
      if (isContactVisible) {
        // Figure out how much Thiago needs to be moved over by.
        const thiagoOffset = $thiago.getBoundingClientRect().left * -0.85;

        $thiago.style.transform = `translateX(${thiagoOffset}px)`;
        $aboutMe.style.opacity = 0.25;

        $contactContents.classList.add('active');

        $homeSection.classList.remove('active');
        $contactSection.classList.add('active');
        $contactSubmit.classList.add('active');
      } else {
        $thiago.style.transform = '';
        $aboutMe.style.opacity = 1;

        $contactContents.classList.remove('active');

        $homeSection.classList.add('active');
        $contactSection.classList.remove('active');
        $contactSubmit.classList.remove('active');
      }
    }

    const languageChanged = state.language !== previousState.language;
    if (languageChanged) {
      translateAll(language);
      updateAnimatedHeading(language);
    }

    previousState = state;
  }
}

const reconciler = createReconciler();
store.subscribe(reconciler);


// i18n stuff
const getTranslation = language => key => translations[language][key];

function translateAll(language) {
  const getTranslationInLanguage = getTranslation(language);

  // Find all elements that need translating, and convert the result into
  // a true array (and not just an array-like object).
  const elements = [...$$('[data-translate-key]')];

  elements.forEach(elem => {
    const key = elem.dataset.translateKey;
    const translatedContents = getTranslationInLanguage(key);

    elem.innerText = translatedContents;
  });
}

function bindTranslationHandlers(selector) {
  const elements = [...$$(selector)];

  elements.forEach(elem => {
    elem.addEventListener('click', () => {
      const { language } = elem.dataset;
      store.dispatch(switchLanguage(language));
    });
  });
}

bindTranslationHandlers('.js-translation-control');
updateAnimatedHeading('en');

// History integration
function updateStateFromLocation(location) {
  const isContactVisible = location.search.match(/contact=true/i);

  store.dispatch(toggleContactForm(isContactVisible));
}

history.listen(updateStateFromLocation);

// We want to update the state on page-load, but we can't move Thiago until
// the image has resolved.
const $thiagoImg = document.querySelector('.thiago');
if ($thiagoImg.complete) {
  updateStateFromLocation(window.location);
} else {
  $thiagoImg.addEventListener('load', () => {
    updateStateFromLocation(window.location);
  });
}

const historyLinkElements = [...$$('.js-history-link')];
historyLinkElements.forEach(link => {
  link.addEventListener('click', ev => {
    ev.preventDefault();

    const { href } = ev.target;
    const searchStartIndex = href.indexOf('?');
    const search = searchStartIndex !== -1 ? href.slice(searchStartIndex) : '';

    history.push({ search });
  });
});

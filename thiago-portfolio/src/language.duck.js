// Action Types
export const SWITCH_LANGUAGE = 'LANGUAGE/SWITCH_LANGUAGE';

// Action Creators
export const switchLanguage = language => ({
  type: SWITCH_LANGUAGE,
  language,
});

// Reducer
export default function languageReducer(state = 'en', action) {
  switch (action.type) {
    case SWITCH_LANGUAGE: return action.language;
    default: return state;
  }
}

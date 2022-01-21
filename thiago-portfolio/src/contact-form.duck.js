// Action Types
export const TOGGLE_CONTACT_FORM = 'CONTACT_FORM/TOGGLE_CONTACT_FORM';

// Action Creators
export const toggleContactForm = isVisible => ({
  type: TOGGLE_CONTACT_FORM,
  isVisible,
});

// Reducer
export default function contactFormReducer(state = false, action) {
  switch (action.type) {
    case TOGGLE_CONTACT_FORM: return action.isVisible;
    default: return state;
  }
}

// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { css } from 'aphrodite/no-important';

import { buildErrorMessage } from '../../helpers/errors';
import { RESOLVED, LOADING } from '../../constants/statuses';
import {
  searchAuthorRequest,
  searchAuthorInput,
  updateMediaType,
} from '../../actions';
import {


  stepSelector,
} from '../../reducers/data/new-subscription.reducer';

import CheckboxGroup from '../CheckboxGroup';
import RadioButtonGroup from '../RadioButtonGroup';
import TextField from '../TextField';
import RowWithBullet from '../RowWithBullet';
import SampleBooks from '../SampleBooks';
import Spinner from '../Spinner';
import styles from './styles';


class AuthorSubscribeForm extends Component {
  constructor(props) {
    super(props);

    this.submitSearchRequest = debounce(this.submitSearchRequest.bind(this), 500);
    this.handleAuthorSearch = this.handleAuthorSearch.bind(this);
  }

  submitSearchRequest(author) {
    this.props.searchAuthorRequest({ author });
  }

  handleAuthorSearch(ev) {
    // Immediately dispatch an event that will let us react to the fact that
    // results will be incoming.
    this.props.searchAuthorInput();

    // Also submit the value for processing. This is done as a separate action
    // because it's debounced, to avoid sending a bunch of server requests.
    this.submitSearchRequest(ev.target.value);
  }

  render() {
    const {
      searchAuthorStatus,
      searchAuthorErrorCode,
      mediaTypes,
      step,
      ...actions
    } = this.props;

    const showSampleBooks = searchAuthorStatus === RESOLVED;
    const showSpinner = searchAuthorStatus === LOADING;

    return (
      <form>
        <RowWithBullet currentStepNum={step} bulletNum={1}>
          <TextField
            id="author-name"
            className={step === 1 ? styles.activeField : styles.inactiveField}
            label="Enter an author’s name"
            placeholder="Jim Butcher"
            onChange={this.handleAuthorSearch}
            status={searchAuthorStatus}
            errorMessage={
              buildErrorMessage(searchAuthorErrorCode, { type: 'authors' })
            }
          />
        </RowWithBullet>

        <RowWithBullet currentStepNum={step} bulletNum={2}>
          <span
            className={css(
              step === 2
                ? styles.activeField
                : styles.inactiveField
            )}
          >
            Select the media types you care about
          </span>
          <CheckboxGroup
            checkboxes={[
              { id: 'print', label: 'Print' },
              { id: 'ebook', label: 'E-book' },
              { id: 'audiobook', label: 'Audiobook' },
            ]}
            onChange={actions.updateMediaType}
            checkedById={mediaTypes}
          />
        </RowWithBullet>

        <RowWithBullet currentStepNum={step} bulletNum={3}>
          <span
            className={css(
              step === 3
                ? styles.activeField
                : styles.inactiveField
            )}
          >
            Enter contact info
          </span>
          <RadioButtonGroup
            name="contact-method"
            radioButtons={[
              { id: 'email', label: 'Email' },
              { id: 'sms', label: 'SMS (coming soon)', disabled: true },
            ]}
            onChange={data => console.log(data)}
            checkedId="email"
          />

          <TextField
            id="email"
            className={step === 3 ? styles.activeField : styles.inactiveField}
            placeholder="w.shakespeare@gmai"
            onChange={this.handleAuthorSearch}
          />

        </RowWithBullet>

        { showSampleBooks && <SampleBooks /> }
        { showSpinner && <Spinner /> }

      </form>
    );
  }
}

AuthorSubscribeForm.propTypes = {
  searchAuthorStatus: PropTypes.string,
  searchAuthorErrorCode: PropTypes.string,
  mediaTypes: PropTypes.shape({
    print: PropTypes.bool.isRequired,
    ebook: PropTypes.bool.isRequired,
    audiobook: PropTypes.bool.isRequired,
  }),
  step: PropTypes.number.isRequired,
  searchAuthorInput: PropTypes.func.isRequired,
  searchAuthorRequest: PropTypes.func.isRequired,
  updateMediaType: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  searchAuthorStatus: state.ui.requests.searchAuthorStatus,
  searchAuthorErrorCode: state.ui.errors.searchAuthor.code,
  mediaTypes: state.data.newSubscription.mediaTypes,
  step: stepSelector(state),
});

export default connect(
  mapStateToProps,
  { searchAuthorInput, searchAuthorRequest, updateMediaType }
)(AuthorSubscribeForm);

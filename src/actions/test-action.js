import axios from 'axios';
import {
  TEST_ACTION,
} from '../actions/action-types';

const ROOT_URL = 'http://localhost:3000';

export function testAction() {
  return dispatch => axios.get(`${ROOT_URL}/test`)
    .then(() => dispatch({ type: TEST_ACTION }));
}
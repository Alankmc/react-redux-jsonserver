import axios from 'axios';
import {
  TEST_ACTION,
} from '../actions/action-types';
import TestDto from '../services/dto/dto';
const ROOT_URL = 'http://localhost:3000';

// Pass object instead of arguments.
// Good because increases readability, and flexibilizes argument order and presence.
// Cons: removes default arguments, but in my experience, those are used so little.
export function testAction(params) {
  return dispatch => axios.post(`${ROOT_URL}/test`, TestDto.parseOutgoingObject(params))
    .then(res => dispatch({ type: TEST_ACTION, payload: TestDto.parseIncomingObject(res.data) }));
}

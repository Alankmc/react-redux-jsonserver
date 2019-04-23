import {
  TEST_ACTION
} from '../actions/action-types';

const INITIAL_STATE = {
  testSuccess: false,
};

export default function (state = INITIAL_STATE, aciton) {
  switch (aciton.type) {
    case TEST_ACTION:
      return {
        ...state,
        testSuccess: true,
      };
    default:
      return state;
  }
}
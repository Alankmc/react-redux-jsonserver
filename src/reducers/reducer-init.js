import {
  TEST_ACTION
} from '../actions/action-types';

const INITIAL_STATE = {
  thing1: null,
  thing2: null,
  objConst: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TEST_ACTION:
      const { thing1, thing2, thingObj: {objConst} } = action.payload;
      console.log(action.payload)
      return {
        ...state,
        thing1,
        thing2,
        objConst,
      };
    default:
      return state;
  }
}
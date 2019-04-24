export default class TestDto {
  static parseIncomingObject({
    thing_1, thing_2, thing_3
  }) {
    return {
      thing1: thing_1,
      thing2: thing_2,
      thingObj: {
        objConst: thing_3.constant_thing,
      },
    };
  }

  static parseOutgoingObject({
    thing1, thing2, objConst,
  }) {
    return {
      thing_1: thing1,
      thing_2: thing2,
      thing_3: {
        constant_thing: objConst,
      }
    }
  }
}
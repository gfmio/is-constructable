import { ConstructableFunction } from "./ConstructableFunction";
import { testIfConstructableWithProxy } from "./testIfConstructableWithProxy";
import { testIfConstructableWithReflect } from "./testIfConstructableWithReflect";

export const isConstructable = (f: any): f is ConstructableFunction => {
  try {
    return testIfConstructableWithProxy(f);
  } catch (e) {
    return testIfConstructableWithReflect(f);
  }
};

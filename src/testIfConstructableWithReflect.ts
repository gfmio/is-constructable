import { ConstructableFunction } from "./ConstructableFunction";

export const testIfConstructableWithReflect = (f: any): f is ConstructableFunction => {
  try {
    Reflect.construct(String, [], f);
  } catch (e) {
    return false;
  }
  return true;
};

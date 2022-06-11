import { ConstructableFunction } from "./ConstructableFunction";

const handler = {
  construct() {
    return handler;
  },
};
export const testIfConstructableWithProxy = (
  f: any
): f is ConstructableFunction => {
  try {
    return !!new new Proxy(f, handler)();
  } catch (e) {
    return false;
  }
};

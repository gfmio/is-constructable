import { describe, it } from "mocha";
import { expect } from "chai";
import { testObjects } from "./testUtils";
import { isConstructable } from "./isConstructable";

describe("isConstructable", () => {
  for (const { label, value, result } of testObjects) {
    it(`${label} is ${result ? "" : "not "}constructable`, () => {
      expect(isConstructable(value)).to.equal(result);
      if (result) {
        expect(() => new value()).to.not.throw();
      } else {
        expect(() => new value()).to.throw();
      }
    });
  }
});

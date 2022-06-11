export const testObjects: Array<{ label: string; value: any; result: boolean }> = [
  // true
  {
    label: "function () {}",
    value: function () {},
    result: true,
  },
  { label: "class A {}", value: class A {}, result: true },
  { label: "Array", value: Array, result: true },
  { label: "Function", value: Function, result: true },
  { label: "new Function()", value: new Function(), result: true },

  // false
  { label: "undefined", value: undefined, result: false },
  { label: "null", value: null, result: false },
  { label: "1", value: 1, result: false },
  { label: "new Number(1)", value: new Number(1), result: false },
  { label: "Array.prototype", value: Array.prototype, result: false },
  { label: "Function.prototype", value: Function.prototype, result: false },
  { label: "() => {}", value: () => {}, result: false },
  { label: "{ method() {} }.method", value: { method() {} }.method, result: false },

  { label: "async () => {}", value: async () => {}, result: false },
  { label: "async function f() {}", value: async function f() {}, result: false },
  { label: "function* f() {}", value: function* f() {}, result: false },
  { label: "async function* f() {}", value: async function* f() {}, result: false },
];

# is-constructable

`is-constructable` provides a type predicate for identifying if a function is constructable, i.e. whether it can be used with the `new` operator, without actually invoking the constructor.

## Install

```sh
# If you use npm
npm install is-constructable

# If you use yarn
yarn add is-constructable
```

## Usage

```ts
import { isConstructable } from "is-constructable";

isConstructable(function () {}); // true
isConstructable(class A {}); // true
isConstructable(Array); // true
isConstructable(Function); // true
isConstructable(new Function()); // true

isConstructable(undefined); // false
isConstructable(null); // false
isConstructable(1); // false
isConstructable(new Number(1)); // false
isConstructable(Array.prototype); // false
isConstructable(Function.prototype); // false
isConstructable({ method() {} }.method); // false

isConstructable(() => {}); // false
isConstructable(async () => {}); // false
isConstructable(async function f() {}); // false
isConstructable(function* f() {}); // false
isConstructable(async function* f() {}); // false
```

> **Note:** If you transpile to ES5 or below, your transpiler will convert some or all of your arrow functions, async functions, async arrow functions, generator functions and async generator functions to plain old functions, which _are_ constructable in contrast to the original objects.

Under the hoood, the library implements two equivalent checks, one using `Reflect` and one using `Proxy`, which can be imported explicitly if so desired.

```ts
import { testIfConstructableWithProxy, testIfConstructableWithReflect } from "is-constructable";

testIfConstructableWithProxy(function () {}); // true
testIfConstructableWithReflect(function () {}); // true
```

`isConstructable` will first attempt the check using `Proxy` and only if that fails, it will try to using the check using `Reflect`, because the `Proxy` check is about 3.3 times faster than the check using `Reflect`.

# License

[MIT](LICENSE)

export * from 'a';
export * from './b';
export { _onefoo } from 'c';
export { _foo, _bar as baz } from 'a';
export { _bar, baz as bafoo } from './b';
export { foobar, _foobaz as foofoo };
export var _variable: number = 1;
export let _scoped: number = 2;
export const _constant: number = 3;

export const _foo: string = 'foo',
  _bar: string = 'bar';

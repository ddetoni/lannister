import lannister from '../src/index';

test('retuns hello world', () => {
  expect(lannister.hello()).toBe('Hello World');
});
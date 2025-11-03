import { groupCSS } from '../core/index';
import { expectedOutput, testInput } from './sample-css';

test('Main Functionality Test', () => {
  const result = groupCSS(testInput);
  expect(result).toEqual(expectedOutput);
});

import { groupCSS } from '../index';
import { expectedOutput, testInput } from './sample-css';

test('Main Functionality Test', () => {
  const result = groupCSS(testInput);
  expect(result).toEqual('expectedOutput');
});

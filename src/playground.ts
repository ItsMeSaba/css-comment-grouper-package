import { groupCSS } from '.';

console.log('\n========== Playground running ==========\n');

const test = groupCSS(`.container {
  width: 100%;
  height: auto;
  max-width: 1200px;
  min-width: 300px;
  max-height: 800px;
  min-height: 200px;
}`);

console.log(test);

console.log('\n ========== Playground finished ==========\n');

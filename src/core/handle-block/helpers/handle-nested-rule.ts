import { Rule } from 'postcss';
import { Options } from '../../../types';
import { handleBlock } from '../handle-block';

/**
 * Handle nested rule nodes - schedule for recursive processing
 */
export function handleNestedRule(
  rule: Rule,
  options: Options | undefined,
  toExec: Array<() => void>,
): void {
  toExec.push(() => handleBlock(rule, options));
}

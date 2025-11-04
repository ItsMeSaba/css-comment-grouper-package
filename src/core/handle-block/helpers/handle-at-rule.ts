import { AtRule } from 'postcss';
import { Options } from '../../../types';
import { handleBlock } from '../handle-block';

/**
 * Handle at-rule nodes (@media, @mixin, etc.) - schedule for recursive processing
 */
export function handleAtRule(
  rule: AtRule,
  options: Options | undefined,
  toExec: Array<() => void>,
): void {
  toExec.push(() => handleBlock(rule, options));
}

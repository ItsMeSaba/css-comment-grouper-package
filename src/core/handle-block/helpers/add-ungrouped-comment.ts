import { Comment, Rule, AtRule } from 'postcss';

/**
 * Add "Ungrouped" comment for unrecognizable properties
 */
export function addUngroupedComment(block: Rule | AtRule, spacing: string | undefined): void {
  block.nodes.unshift(
    new Comment({ text: 'Ungrouped', raws: { before: '\n' + spacing } }),
  );
}

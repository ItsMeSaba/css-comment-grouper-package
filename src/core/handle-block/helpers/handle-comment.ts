import { Comment, Rule, AtRule } from 'postcss';
import { isCommentGroupName } from '../../helpers/is-comment-group-name';

/**
 * Handle comment nodes - remove group name comments
 */
export function handleComment(comment: Comment, block: Rule | AtRule, index: number): void {
  if (isCommentGroupName(comment.text)) {
    block.nodes[index] = null as any;
  }
}

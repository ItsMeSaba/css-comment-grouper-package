import PropertyGroups from '../helpers/property-groups';

import { Options } from '../../types';
import { handleAtRule } from './helpers/handle-at-rule';
import { handleComment } from './helpers/handle-comment';
import { AtRule, Comment, Declaration, Rule } from 'postcss';
import { handleNestedRule } from './helpers/handle-nested-rule';
import { handleDeclaration } from './helpers/handle-declaration';
import { addUngroupedComment } from './helpers/add-ungrouped-comment';
import { insertSortedGroups } from './helpers/insert-sorted-groups';

/**
 * Main function to handle CSS blocks - groups and sorts properties
 */
export function handleBlock(block: Rule | AtRule, options?: Options) {
  const listOfProperties = block.nodes as (Declaration | Comment | Rule | AtRule)[];
  const toExec: Array<() => void> = [];
  const groups = new PropertyGroups();

  let hasUnrecognizableProperty = false;
  let currentSpacing: string | undefined = '';

  // Process each node in the block
  for (let i = 0; i < listOfProperties.length; i++) {
    const node = listOfProperties[i];

    switch (node.type) {
      case 'comment':
        handleComment(node as Comment, block, i);
        break;
      case 'atrule':
        handleAtRule(node as AtRule, options, toExec);
        break;
      case 'rule':
        handleNestedRule(node as Rule, options, toExec);
        break;
      case 'decl':
        const result = handleDeclaration(node as Declaration, block, i, groups);
        if (result.hasUnrecognizable) {
          hasUnrecognizableProperty = true;
          currentSpacing = result.spacing;
        }
        break;
    }
  }

  // Remove null nodes (properties that will be re-added as sorted)
  block.nodes = block.nodes.filter((node) => !!node);

  // Add ungrouped comment if needed
  if (hasUnrecognizableProperty) {
    addUngroupedComment(block, currentSpacing);
  }

  // Insert sorted property groups
  insertSortedGroups(block, groups);

  // Execute recursive processing for nested rules
  toExec.forEach((cb) => cb());
}

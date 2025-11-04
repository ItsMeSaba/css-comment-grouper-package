import { Comment, Rule, AtRule } from 'postcss';
import PropertyGroups from '../../helpers/property-groups';

/**
 * Insert sorted property groups with their comment headers
 */
export function insertSortedGroups(block: Rule | AtRule, groups: PropertyGroups): void {
  let groupsArray = Array.from(groups.groups);
  groupsArray = groupsArray.filter((group) => group[1].length > 0).reverse();

  for (let i = 0; i < groupsArray.length; i++) {
    const [key, value] = groupsArray[i];

    // Add properties
    for (let j = 0; j < value.length; j++) {
      block.nodes.unshift(value[j]);
    }

    // Add property group name as comment
    if (value.length > 0) {
      let spacing = value[0].raws.before;

      if (groupsArray.length - 1 !== i) {
        spacing = '\n' + spacing;
      }

      block.nodes.unshift(new Comment({ text: key, raws: { before: spacing } }));
    }
  }
}

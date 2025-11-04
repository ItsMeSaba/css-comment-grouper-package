import { Declaration, Rule, AtRule } from 'postcss';
import PropertyGroups from '../../helpers/property-groups';

/**
 * Handle declaration nodes - add to property groups or mark as unrecognizable
 */
export function handleDeclaration(
  property: Declaration,
  block: Rule | AtRule,
  index: number,
  groups: PropertyGroups,
): { hasUnrecognizable: boolean; spacing: string | undefined } {
  const wasAdded = groups.append(property);

  if (wasAdded) {
    block.nodes[index] = null as any;
    return { hasUnrecognizable: false, spacing: undefined };
  } else {
    return { hasUnrecognizable: true, spacing: block.nodes[index].raws.before };
  }
}

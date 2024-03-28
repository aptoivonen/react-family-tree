import ReactFamilyTreeComp from 'react-family-tree';
import type { ExtNode, Node } from '@/types';

import { NODE_HEIGHT, NODE_WIDTH } from '@/constants';

type Props = {
  nodes: Node[];
  rootId: string;
  renderNode: (node: ExtNode) => React.ReactNode;
};

function ReactFamilyTree({ nodes, rootId, renderNode }: Props) {
  return (
    <ReactFamilyTreeComp
      nodes={nodes}
      rootId={rootId}
      width={NODE_WIDTH}
      height={NODE_HEIGHT}
      renderNode={renderNode}
    />
  );
}

export default ReactFamilyTree;

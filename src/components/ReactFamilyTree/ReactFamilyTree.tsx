import { useMemo } from 'react';
import ReactFamilyTreeComp from 'react-family-tree';
import transformData from './transformData';
import type { ExtNode, FamilyTreeData, Profile } from '@/types';
import { NODE_HEIGHT, NODE_WIDTH } from '@/constants';

type Props = {
  data: FamilyTreeData;
  renderPerson: ({
    id,
    top,
    left,
    profile,
  }: {
    id: string;
    top: number;
    left: number;
    profile: Profile;
  }) => React.ReactNode;
};

function ReactFamilyTree({ data, renderPerson }: Props) {
  // transform tree data from db format for the library
  const { nodes, rootId, profileMap } = useMemo(
    () => transformData(data),
    [data]
  );

  const renderNode = (node: ExtNode) =>
    renderPerson({
      id: node.id,
      top: node.top,
      left: node.left,
      profile: profileMap[node.id],
    });

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

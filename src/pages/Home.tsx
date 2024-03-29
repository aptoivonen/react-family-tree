import type { Node, Profile } from '@/types';
import exampleData1 from '@/data/example1';
import ReactFamilyTree from '@/components/ReactFamilyTree';
import PersonNode from '@/components/PersonNode';
import PinchZoomPan from '@/components/PinchZoomPan';

const nodeMap = exampleData1.persons as unknown as Record<
  string,
  Omit<Node & Profile, 'id'>
>;
const nodes = Object.entries(nodeMap).map(([id, node]) => ({
  id: String(id),
  ...node,
})) as unknown as Readonly<Node>[];

const { rootId } = exampleData1;

function Home() {
  return (
    <PinchZoomPan>
      <ReactFamilyTree
        nodes={nodes}
        rootId={rootId}
        renderNode={(node) => (
          <PersonNode
            key={node.id}
            node={node}
            profile={nodeMap[node.id]}
            isRoot={node.id === rootId}
          />
        )}
      />
    </PinchZoomPan>
  );
}

export default Home;

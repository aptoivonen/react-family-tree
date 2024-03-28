import type { Node, Profile } from '@/types';
import exampleData2 from '@/data/example1';
import ReactFamilyTree from '@/components/ReactFamilyTree';
import PersonNode from '@/components/PersonNode';

const nodeMap = exampleData2 as unknown as Record<
  string,
  Omit<Node & Profile, 'id'>
>;
const nodes = Object.entries(exampleData2).map(([id, node]) => ({
  id: String(id),
  ...node,
})) as unknown as Readonly<Node>[];

const rootId = nodes[0].id;

function Home() {
  return (
    <ReactFamilyTree
      nodes={nodes}
      rootId={rootId}
      renderNode={(node) => (
        <PersonNode key={node.id} node={node} profile={nodeMap[node.id]} />
      )}
    />
  );
}

export default Home;

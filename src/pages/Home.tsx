import exampleMap1 from '@/data/exampleMap1';
import ReactFamilyTree from '@/components/ReactFamilyTree';
import PersonNode from '@/components/PersonNode';
import PinchZoomPan from '@/components/PinchZoomPan';
import transformData from '@/utils/transformData';

const { nodes, profileMap, rootId } = transformData(exampleMap1);

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
            profile={profileMap[node.id]}
            isRoot={node.id === rootId}
          />
        )}
      />
    </PinchZoomPan>
  );
}

export default Home;

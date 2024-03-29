import exampleMap1 from '@/data/exampleMap1';
import ReactFamilyTree from '@/components/ReactFamilyTree';
import PersonNode from '@/components/PersonNode';
import PinchZoomPan from '@/components/PinchZoomPan';

function Home() {
  return (
    <PinchZoomPan>
      <ReactFamilyTree
        data={exampleMap1}
        renderPerson={({ id, top, left, profile }) => (
          <PersonNode
            key={id}
            top={top}
            left={left}
            profile={profile}
            isRoot={id === exampleMap1.rootId}
          />
        )}
      />
    </PinchZoomPan>
  );
}

export default Home;

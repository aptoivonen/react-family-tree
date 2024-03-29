import data from '@/data/royalty';
import ReactFamilyTree from '@/components/ReactFamilyTree';
import PersonNode from '@/components/PersonNode';
import PinchZoomPan from '@/components/PinchZoomPan';

function Home() {
  return (
    <PinchZoomPan>
      <ReactFamilyTree
        data={data}
        renderPerson={({ id, top, left, profile }) => (
          <PersonNode
            key={id}
            top={top}
            left={left}
            profile={profile}
            isRoot={id === data.rootId}
          />
        )}
      />
    </PinchZoomPan>
  );
}

export default Home;

import type { ExtNode, Profile } from '@/types';

import { NODE_HEIGHT, NODE_WIDTH, NODE_DISTANCE } from '@/constants';

type Props = {
  node: ExtNode;
  profile: Profile;
};

export default function FamilyNode({ node, profile }: Props) {
  const borderColor = node.gender === 'male' ? 'blue' : 'pink';

  return (
    <div
      style={{
        position: 'absolute',
        width: NODE_WIDTH,
        height: NODE_HEIGHT,
        padding: `${NODE_DISTANCE / 2}px`,
        transform: `translate(${node.left * (NODE_WIDTH / 2)}px, ${
          node.top * (NODE_HEIGHT / 2)
        }px)`,
      }}
    >
      <div
        style={{
          display: 'grid',
          justifyItems: 'center',
          height: '100%',
          border: `2px solid ${borderColor}`,
          backgroundColor: 'white',
        }}
      >
        <div style={{ fontSize: '0.7rem' }}>{node.id}</div>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          {profile.name}
        </div>
      </div>
    </div>
  );
}

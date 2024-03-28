import type { ExtNode, Profile } from '@/types';

import { NODE_HEIGHT, NODE_WIDTH } from '@/constants';

type Props = {
  node: ExtNode;
  profile: Profile;
};

const nodeGap = 'p-[20px]';
const maleColor = 'border-[#17B4CE]';
const femaleColor = 'border-[#FC8181]';

export default function FamilyNode({ node, profile }: Props) {
  const borderColor = node.gender === 'male' ? maleColor : femaleColor;

  return (
    <div
      className={`absolute ${nodeGap}`}
      style={{
        width: NODE_WIDTH,
        height: NODE_HEIGHT,
        transform: `translate(${node.left * (NODE_WIDTH / 2)}px, ${
          node.top * (NODE_HEIGHT / 2)
        }px)`,
      }}
    >
      <div
        className={`grid justify-items-center h-full bg-[#fffffe] border-2 rounded-xl ${borderColor}`}
      >
        <div className="text-xs">{node.id}</div>
        <div className="text-xl font-bold">{profile.name}</div>
      </div>
    </div>
  );
}

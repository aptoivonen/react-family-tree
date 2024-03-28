import PersonNodeWrapper from './PersonNodeWrapper';
import type { ExtNode, Profile } from '@/types';

type Props = {
  node: ExtNode;
  profile: Profile;
};

const maleColor = 'border-[#17B4CE]';
const femaleColor = 'border-[#FC8181]';

export default function FamilyNode({ node, profile }: Props) {
  const borderColor = node.gender === 'male' ? maleColor : femaleColor;

  return (
    <PersonNodeWrapper top={node.top} left={node.left}>
      <div
        className={`grid justify-items-center h-full bg-[#fffffe] border-2 rounded-xl ${borderColor}`}
      >
        <div className="text-xs">{node.id}</div>
        <div className="text-xl font-bold">{profile.name}</div>
      </div>
    </PersonNodeWrapper>
  );
}

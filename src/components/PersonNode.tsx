import { IoIosPerson } from 'react-icons/io';
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
        className={`grid grid-cols-[1fr_2fr] h-full p-1 bg-[#fffffe] border-2 rounded-xl ${borderColor}`}
      >
        <div className="absolute top-0 left-[25px] text-xs">{node.id}</div>
        <IoIosPerson className="w-full h-full text-[#cccccc]" />
        <div className="grid items-center text-xs font-bold leading-none">
          {profile.name}
        </div>
      </div>
    </PersonNodeWrapper>
  );
}

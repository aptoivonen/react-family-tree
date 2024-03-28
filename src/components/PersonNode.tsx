import { IoIosPerson } from 'react-icons/io';
import PersonNodeWrapper from './PersonNodeWrapper';
import type { ExtNode, Profile } from '@/types';

type Props = {
  node: ExtNode;
  profile: Profile;
};

const maleColor = 'bg-[#9FD5EB]';
const femaleColor = 'bg-[#F5B8DB]';

export default function FamilyNode({ node, profile }: Props) {
  const backgroundColor = node.gender === 'male' ? maleColor : femaleColor;

  return (
    <PersonNodeWrapper top={node.top} left={node.left}>
      <div
        className={`grid grid-cols-[1fr_2fr] h-full p-1 rounded-xl ${backgroundColor} border border-[#cccccc] shadow-lg`}
      >
        <div className="absolute top-0 left-[25px] text-xs">{node.id}</div>
        <IoIosPerson className="w-full h-full text-gray-500 border-1 border-dashed border-black" />
        <div className="grid items-center text-xs font-bold leading-none">
          {profile.name}
        </div>
      </div>
    </PersonNodeWrapper>
  );
}

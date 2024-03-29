import { IoIosPerson } from 'react-icons/io';
import { ImTree } from 'react-icons/im';
import PersonNodeWrapper from './PersonNodeWrapper';
import type { ExtNode, Profile } from '@/types';

type Props = {
  node: ExtNode;
  profile: Profile;
  isRoot: boolean;
};

const maleColor = 'bg-[#9FD5EB]';
const femaleColor = 'bg-[#F5B8DB]';

export default function FamilyNode({ node, profile, isRoot }: Props) {
  const backgroundColor = node.gender === 'male' ? maleColor : femaleColor;

  return (
    <PersonNodeWrapper top={node.top} left={node.left}>
      <div
        className={`relative grid grid-cols-[1fr_2fr] gap-1 h-full p-1 rounded ${backgroundColor} border border-gray-300 shadow-lg`}
      >
        {isRoot && (
          <div className="absolute -top-2 right-1 w-5 h-5 bg-gray-300 p-1 rounded-full">
            <ImTree className="w-full h-full text-blue-800" />
          </div>
        )}
        <div className="bg-gray-400 rounded">
          <IoIosPerson className="w-full h-full text-gray-100" />
        </div>
        <div className="grid items-center text-xs font-bold leading-none">
          {profile.name}
        </div>
      </div>
    </PersonNodeWrapper>
  );
}

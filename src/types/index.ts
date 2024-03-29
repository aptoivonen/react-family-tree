export type Profile = {
  name: string;
};

export type PersonProfileMap = Record<
  string,
  {
    gender: 'male' | 'female';
    fatherId?: string;
    motherId?: string;
  } & Profile
>;

export type FamilyTreeData = {
  rootId: string;
  persons: PersonProfileMap;
};

export type { Node, ExtNode } from 'relatives-tree/lib/types';

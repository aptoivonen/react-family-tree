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

export type SpouseRelation = {
  id1: string;
  id2: string;
  type: 'married' | 'divorced';
};

export type FamilyTreeData = {
  rootId: string;
  persons: PersonProfileMap;
  spouses: ReadonlyArray<SpouseRelation>;
};

export type { Node, ExtNode } from 'relatives-tree/lib/types';

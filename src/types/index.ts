export type Profile = {
  name: string;
};

export type Gender = 'male' | 'female';
export type SpouseRelationType = 'married' | 'divorced';

export type PersonProfileMap = Record<
  string,
  {
    gender: Gender;
    fatherId?: string;
    motherId?: string;
  } & Profile
>;

export type SpouseRelation = {
  id1: string;
  id2: string;
  type: SpouseRelationType;
};

export type FamilyTreeData = {
  rootId: string;
  persons: PersonProfileMap;
  spouses: ReadonlyArray<SpouseRelation>;
};

export type { Node, ExtNode } from 'relatives-tree/lib/types';

import type {
  Node,
  Profile,
  FamilyTreeData,
  PersonProfileMap,
  SpouseRelationType,
} from '@/types';

type Data = {
  nodes: Readonly<Node>[];
  profileMap: Record<string, Profile>;
  rootId: string;
};

function idExists(
  id: string | undefined,
  personMap: PersonProfileMap
): id is string {
  return !!(id && personMap[id]);
}

function getParents({
  fatherId,
  motherId,
  personMap,
}: {
  fatherId: string | undefined;
  motherId: string | undefined;
  personMap: PersonProfileMap;
}): { id: string; type: 'blood' }[] {
  const parents = [] as { id: string; type: 'blood' }[];
  if (idExists(fatherId, personMap)) {
    parents.push({ id: fatherId, type: 'blood' });
  }
  if (idExists(motherId, personMap)) {
    parents.push({ id: motherId, type: 'blood' });
  }
  return parents;
}

export default function transformData(data: FamilyTreeData): Data {
  const personProfileMap = data.persons;
  const profileEntries = Object.entries(personProfileMap);

  const nodeMap = Object.fromEntries(
    profileEntries.map(([id, profile]) => [
      id,
      {
        gender: profile.gender,
        parents: getParents({
          fatherId: profile.fatherId,
          motherId: profile.motherId,
          personMap: personProfileMap,
        }),
        siblings: [] as { id: string; type: 'blood' }[],
        children: [] as { id: string; type: 'blood' }[],
        spouses: [] as { id: string; type: SpouseRelationType }[],
      },
    ])
  );

  profileEntries.forEach(([id]) => {
    const node = nodeMap[id];
    node.parents.forEach((parentRel) => {
      const parentId = parentRel.id;
      nodeMap[parentId].children.push({ id, type: 'blood' });
    });
  });

  const spousesList = data.spouses;
  spousesList.forEach((spouseRelation) => {
    nodeMap[spouseRelation.id1].spouses.push({
      id: spouseRelation.id2,
      type: spouseRelation.type,
    });
    nodeMap[spouseRelation.id2].spouses.push({
      id: spouseRelation.id1,
      type: spouseRelation.type,
    });
  });

  const nodes = Object.entries(nodeMap).map(([id, node]) => ({
    id,
    ...node,
  })) as unknown as Readonly<Node>[];

  const profileMap = Object.fromEntries(
    profileEntries.map(([id, profile]) => [
      id,
      { name: profile.name, gender: profile.gender },
    ])
  );

  const { rootId } = data;

  return { nodes, profileMap, rootId };
}

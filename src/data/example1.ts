export default {
  user1: {
    gender: 'male',
    name: 'Eero',
    spouses: [],
    siblings: [],
    parents: [],
    children: [
      {
        id: 'user3',
        type: 'blood',
      },
      {
        id: 'user2',
        type: 'blood',
      },
      {
        id: 'user4',
        type: 'blood',
      },
    ],
  },
  user2: {
    gender: 'female',
    name: 'Maria',
    spouses: [],
    siblings: [],
    parents: [
      {
        id: 'user1',
        type: 'blood',
      },
    ],
    children: [],
  },
  user3: {
    gender: 'male',
    name: 'Ilkka',
    spouses: [],
    siblings: [],
    parents: [
      {
        id: 'user1',
        type: 'blood',
      },
    ],
    children: [],
  },
  user4: {
    gender: 'male',
    name: 'Aleksi',
    spouses: [],
    siblings: [],
    parents: [
      {
        id: 'user1',
        type: 'blood',
      },
    ],
    children: [],
  },
};

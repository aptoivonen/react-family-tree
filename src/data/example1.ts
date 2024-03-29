export default {
  rootId: 'user1',
  persons: {
    user1: {
      gender: 'male',
      name: 'Eero',
      spouses: [{ id: 'user5', type: 'married' }],
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
    user5: {
      gender: 'female',
      name: 'Margit',
      spouses: [{ id: 'user1', type: 'married' }],
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
      spouses: [{ id: 'user6', type: 'marriage' }],
      siblings: [],
      parents: [
        {
          id: 'user1',
          type: 'blood',
        },
        {
          id: 'user5',
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
        {
          id: 'user5',
          type: 'blood',
        },
      ],
      children: [],
    },
    user4: {
      gender: 'male',
      name: 'Aleksi Toivonen',
      spouses: [],
      siblings: [],
      parents: [
        {
          id: 'user1',
          type: 'blood',
        },
        {
          id: 'user5',
          type: 'blood',
        },
      ],
      children: [],
    },
    user6: {
      gender: 'male',
      name: 'PR',
      spouses: [{ id: 'user2', type: 'marriage' }],
      siblings: [],
      parents: [],
      children: [],
    },
  },
};

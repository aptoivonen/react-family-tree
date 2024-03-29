export default {
  persons: {
    '1': {
      gender: 'male',
      name: 'Aleksi',
      fatherId: '2',
      motherId: '3',
    },
    '2': {
      gender: 'male',
      name: 'Eero',
    },
    '3': {
      gender: 'female',
      name: 'Margit',
    },
    '4': {
      gender: 'male',
      name: 'Ilkka',
      fatherId: '2',
      motherId: '3',
    },
    '5': {
      gender: 'female',
      name: 'Maria',
      fatherId: '2',
      motherId: '3',
    },
  },
  rootId: '2',
} as const;

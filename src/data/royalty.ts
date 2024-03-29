export default {
  persons: {
    andrewOfGreece: {
      gender: 'male',
      name: 'Prince Andrew of Greece',
    },
    alice: {
      gender: 'female',
      name: 'Princess Alice',
    },
    georgevi: {
      gender: 'male',
      name: 'King George VI',
    },
    queenmother: {
      gender: 'female',
      name: 'Queen Elizabeth',
    },
    elizabeth: {
      gender: 'female',
      name: 'Queen Elizabeth II',
      fatherId: 'georgevi',
      motherId: 'queenmother',
    },
    philip: {
      gender: 'male',
      name: 'Prince Philip',
      fatherId: 'andrewOfGreece',
      motherId: 'alice',
    },
    charles: {
      gender: 'male',
      name: 'King Charles III',
      fatherId: 'philip',
      motherId: 'elizabeth',
    },
    diana: {
      gender: 'female',
      name: 'Princess Diana',
    },
    camilla: {
      gender: 'female',
      name: 'Queen Camilla',
    },
    william: {
      gender: 'male',
      name: 'Prince William',
      fatherId: 'charles',
      motherId: 'diana',
    },
    harry: {
      gender: 'male',
      name: 'Prince Harry',
      fatherId: 'charles',
      motherId: 'diana',
    },
    kate: {
      gender: 'female',
      name: 'Kate Middleton',
    },
    meghan: {
      gender: 'female',
      name: 'Meghan Markle',
    },
    george: {
      gender: 'male',
      name: 'Prince George',
      fatherId: 'william',
      motherId: 'kate',
    },
    charlotte: {
      gender: 'female',
      name: 'Princess Charlotte',
      fatherId: 'william',
      motherId: 'kate',
    },
    louis: {
      gender: 'male',
      name: 'Prince Louis',
      fatherId: 'william',
      motherId: 'kate',
    },
    archie: {
      gender: 'male',
      name: 'Prince Archie',
      fatherId: 'harry',
      motherId: 'meghan',
    },
    lilibet: {
      gender: 'female',
      name: 'Princess Lilibet',
      fatherId: 'harry',
      motherId: 'meghan',
    },
    anne: {
      gender: 'female',
      name: 'Princess Anne',
      fatherId: 'philip',
      motherId: 'elizabeth',
    },
    andrew: {
      gender: 'male',
      name: 'Prince Andrew',
      fatherId: 'philip',
      motherId: 'elizabeth',
    },
    edward: {
      gender: 'male',
      name: 'Prince Edward',
      fatherId: 'philip',
      motherId: 'elizabeth',
    },
    mark: {
      gender: 'male',
      name: 'Mark Phillips',
    },
    timothy: {
      gender: 'male',
      name: 'Timothy Laurence',
    },
    peter: {
      gender: 'male',
      name: 'Peter Phillips',
      fatherId: 'mark',
      motherId: 'anne',
    },
    zara: {
      gender: 'female',
      name: 'Zara Tindall',
      fatherId: 'mark',
      motherId: 'anne',
    },
    sarah: {
      gender: 'female',
      name: 'Sarah',
    },
    beatrice: {
      gender: 'female',
      name: 'Princess Beatrice',
      fatherId: 'andrew',
      motherId: 'sarah',
    },
    eugenie: {
      gender: 'female',
      name: 'Princess Eugenie',
      fatherId: 'andrew',
      motherId: 'sarah',
    },
    sophie: {
      gender: 'female',
      name: 'Sophie',
    },
    louise: {
      gender: 'female',
      name: 'Louise Windsor',
      fatherId: 'edward',
      motherId: 'sophie',
    },
    james: {
      gender: 'male',
      name: 'James',
      fatherId: 'edward',
      motherId: 'sophie',
    },
  },
  spouses: [
    { id1: 'elizabeth', id2: 'philip', type: 'married' },
    { id1: 'charles', id2: 'diana', type: 'divorced' },
    { id1: 'charles', id2: 'camilla', type: 'married' },
    { id1: 'william', id2: 'kate', type: 'married' },
    { id1: 'harry', id2: 'meghan', type: 'married' },
    { id1: 'mark', id2: 'anne', type: 'divorced' },
    { id1: 'timothy', id2: 'anne', type: 'married' },
    { id1: 'andrew', id2: 'sarah', type: 'divorced' },
    { id1: 'edward', id2: 'sophie', type: 'married' },
  ],
  rootId: 'charles',
} as const;

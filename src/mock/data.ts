import { RecordType } from '../models';

const records = {
  instruments: [
    {
      id: 1,
      name: 'Instrument 1',
      value: 'instrument 1',
      levelTypes: [
        {
          id: 1,
          name: 'Type 1',
          price: '1150',
          yield: '768',
          spread: 'Spread 1',
        },
        {
          id: 2,
          name: 'Type 2',
          price: '1150',
          yield: '768',
          spread: 'Spread 2',
        },
        {
          id: 3,
          name: 'Type 3',
          price: '1150',
          yield: '768',
          spread: 'Spread 3',
        },
        {
          id: 4,
          name: 'Type 4',
          price: '1150',
          yield: '768',
          spread: 'Spread 4',
        },
      ],
    },
    {
      id: 2,
      name: 'Instrument 2',
      value: 'instrument 2',
      levelTypes: [
        {
          id: 5,
          name: 'Type 5',
          price: '1150',
          yield: '768',
          spread: 'Spread 5',
        },
        {
          id: 6,
          name: 'Type 6',
          price: '1150',
          yield: '768',
          spread: 'Spread 6',
        },
        {
          id: 7,
          name: 'Type 7',
          price: '1150',
          yield: '768',
          spread: 'Spread 7',
        },
        {
          id: 8,
          name: 'Type 8',
          price: '1150',
          yield: '768',
          spread: 'Spread 8',
        },
      ],
    },
  ],
  salesPersons: [
    { id: 1, name: 'Jeff Morgan' },
    { id: 2, name: 'Jessice Houston' },
    { id: 3, name: 'Max Humphreys' },
  ],
} as RecordType;

const getData = (): RecordType => {
  return records;
};

export default getData;

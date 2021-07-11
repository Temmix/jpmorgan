export type TextInputType = {
  value: number;
  label: string;
  type: string;
  onChange: (event: any) => void;
};

type MenuItemType = {
  id: number;
  value: string;
};

export type SelectBoxType = {
  label: string;
  value: string;
  selectOptions: MenuItemType[];
  onChange: (event: any) => void;
};

export type levelType = {
  id: number;
  name: string;
  price: string;
  yield: string;
  spread: string;
};

export type allTypes = {
  instrument: string;
  salesPerson: string;
  levelInput: number;
  amount: number;
  levelType: string;
};

export type instrument = {
  id: number;
  name: string;
  value: string;
  levelTypes: levelType[];
};

export type salesPerson = {
  id: number;
  name: string;
};

export type RecordType = {
  instruments: instrument[];
  salesPersons: salesPerson[];
};

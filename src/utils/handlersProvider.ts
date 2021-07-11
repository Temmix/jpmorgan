import { allTypes, RecordType } from '../models';

const HandlersProvider = (
  data: RecordType,
  setInstrument: Function,
  setSalesPerson: Function,
  setLevelInput: Function,
  setAmount: Function,
  setLevelType: Function,
  otherValues: allTypes
) => {
  const { instrument, salesPerson, levelInput, amount, levelType } =
    otherValues;
  const handleInstrumentChange = (event: any): void => {
    const value = event.target.value;
    setInstrument(value);

    const selectedInstrument = data.instruments.find((x) => x.id === +value);
    if (!selectedInstrument?.levelTypes.find((x) => x.id === +levelType))
      setLevelType('');
  };

  const handleSalesPersonChange = (event: any): void =>
    setSalesPerson(event.target.value);

  const handleLevelInputOnChange = (event: any) => {
    const value = event.target.value;
    value > 0 ? setLevelInput(value) : setLevelInput(1);
  };

  const handleLevelTypeOnChange = (event: any) => {
    const value = event.target.value;
    setLevelType(value);
    // Reset Level Input on change of LevelType
    setLevelInput(0);
  };

  const handleAmountOnChange = (event: any) => {
    const value = event.target.value;
    value > 0 ? setAmount(value) : setAmount(1);
  };

  const getInstruments = () => {
    return data.instruments.map((x) => ({
      id: x.id,
      name: x.name,
      value: x.name,
    }));
  };

  const getSalesPerson = () =>
    data.salesPersons.map((x) => ({
      id: x.id,
      name: x.name,
      value: x.name,
    }));

  const getLevelType = () => {
    if (!instrument) return [];
    return (
      data.instruments
        .find((x) => x.id === +instrument)
        ?.levelTypes.map((x) => ({ id: x.id, name: x.name, value: x.name })) ||
      []
    );
  };

  const isDisable = (): boolean => {
    return !(
      !!instrument &&
      !!salesPerson &&
      !!levelInput &&
      !!levelType &&
      !!amount
    );
  };

  const handleSubmit = (): boolean | void => {
    if (isDisable()) return false;

    const record = {
      instrument: getInstruments()
        .filter((x) => x.id === +instrument)
        .map((x) => ({ id: x.id, name: x.name }))[0],
      salesPerson: getSalesPerson()
        .filter((x) => x.id === +salesPerson)
        .map((x) => ({ id: x.id, name: x.name }))[0],
      levelType: getLevelType().filter((x) => x.id === +levelType)[0],
      levelInput,
      amount,
    };

    console.log({ record });
  };

  return {
    isDisable,
    handleSubmit,
    handleInstrumentChange,
    handleSalesPersonChange,
    handleLevelInputOnChange,
    handleLevelTypeOnChange,
    handleAmountOnChange,
    getInstruments,
    getSalesPerson,
    getLevelType,
  };
};

export default HandlersProvider;

import { renderHook, act } from '@testing-library/react-hooks';
import LogicHandler from './handlersProvider';
import getData from '../mock/data';
import { allTypes } from '../models';

describe('Test Handler', () => {
  const setInstrument = jest.fn();
  const setSalesPerson = jest.fn();
  const setLevelInput = jest.fn();
  const setAmount = jest.fn();
  const setLevelType = jest.fn();
  const otherValues = {
    instrument: '',
    salesPerson: '',
    levelInput: 0,
    amount: 0,
    levelType: '',
  } as allTypes;

  const { result } = renderHook(() =>
    LogicHandler(
      getData(),
      setInstrument,
      setSalesPerson,
      setLevelInput,
      setAmount,
      setLevelType,
      otherValues
    )
  );

  it('should be disabled button', () => {
    expect(result.current.isDisable()).toBeTruthy();
  });

  it('should be able to submit', () => {
    expect(result.current.handleSubmit()).toBeFalsy();
  });

  it('should be able to set both instrument and levelType', () => {
    const evt = { target: { value: '1' } };
    act(() => {
      result.current.handleInstrumentChange(evt);
    });
    expect(setInstrument).toHaveBeenCalledTimes(1);
    expect(setInstrument).toHaveBeenCalledWith(evt.target.value);

    expect(setLevelType).toHaveBeenCalledTimes(1);
    expect(setLevelType).toHaveBeenCalledWith('');
  });

  it('should be able to set salesPerson', () => {
    const evt = { target: { value: '1' } };
    act(() => {
      result.current.handleSalesPersonChange(evt);
    });
    expect(setSalesPerson).toHaveBeenCalledTimes(1);
    expect(setSalesPerson).toHaveBeenCalledWith(evt.target.value);
  });

  it('should be able to set LevelInput', () => {
    const evt = { target: { value: 200 } };
    act(() => {
      result.current.handleLevelInputOnChange(evt);
    });
    expect(setLevelInput).toHaveBeenCalledTimes(1);
    expect(setLevelInput).toHaveBeenCalledWith(evt.target.value);
  });

  it('should not be able to set LevelInput to 0 but default value', () => {
    const evt = { target: { value: 0 } };
    const defaultValue = 1;
    act(() => {
      result.current.handleLevelInputOnChange(evt);
    });
    expect(setLevelInput).toHaveBeenCalledTimes(1);
    expect(setLevelInput).toHaveBeenCalledWith(defaultValue);
  });

  it('should be able to set LevelType', () => {
    const evt = { target: { value: '1' } };
    act(() => {
      result.current.handleLevelTypeOnChange(evt);
    });
    expect(setLevelType).toHaveBeenCalledTimes(1);
    expect(setLevelType).toHaveBeenCalledWith(evt.target.value);
  });

  it('should be able to reset levelInput on setting Level Type', () => {
    const evt = { target: { value: '1' } };
    act(() => {
      result.current.handleLevelTypeOnChange(evt);
    });
    expect(setLevelType).toHaveBeenCalledTimes(1);
    expect(setLevelType).toHaveBeenCalledWith(evt.target.value);

    expect(setLevelInput).toHaveBeenCalledTimes(1);
    expect(setLevelInput).toHaveBeenCalledWith(0);
  });

  it('should be able to set Amount', () => {
    const evt = { target: { value: 500 } };
    act(() => {
      result.current.handleAmountOnChange(evt);
    });
    expect(setAmount).toHaveBeenCalledTimes(1);
    expect(setAmount).toHaveBeenCalledWith(evt.target.value);
  });

  it('should not be able to set Amount to 0 but default value', () => {
    const evt = { target: { value: 0 } };
    const defaultValue = 1;
    act(() => {
      result.current.handleAmountOnChange(evt);
    });
    expect(setAmount).toHaveBeenCalledTimes(1);
    expect(setAmount).toHaveBeenCalledWith(defaultValue);
  });
});

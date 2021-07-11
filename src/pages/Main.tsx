import React, { useState } from 'react';
import { Box, Container, Button, Grid } from '@material-ui/core';

import HandlersProvider from '../utils/handlersProvider';
import TextInput from '../components/TextInput';
import SelectBox from '../components/SelectBox';
import MainAppBar from '../components/MainAppBar';
import { allTypes } from '../models';
import getData from '../mock/data';

const Main = () => {
  const [instrument, setInstrument] = useState('');
  const [salesPerson, setSalesPerson] = useState('');
  const [levelInput, setLevelInput] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [levelType, setLevelType] = useState('');

  const {
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
  } = HandlersProvider(
    getData(),
    setInstrument,
    setSalesPerson,
    setLevelInput,
    setAmount,
    setLevelType,
    {
      instrument,
      salesPerson,
      levelInput,
      amount,
      levelType,
    } as allTypes
  );

  return (
    <Container>
      <MainAppBar />
      <h2>Instrument Page</h2>

      <SelectBox
        onChange={handleInstrumentChange}
        label='Instrument'
        value={instrument}
        selectOptions={getInstruments()}
      />

      <SelectBox
        onChange={handleSalesPersonChange}
        label='Sales Person'
        value={salesPerson}
        selectOptions={getSalesPerson()}
      />

      <SelectBox
        onChange={handleLevelTypeOnChange}
        label='Level Type'
        value={levelType}
        selectOptions={getLevelType()}
      />

      <TextInput
        value={levelInput}
        onChange={handleLevelInputOnChange}
        type='number'
        label='Level Input'
      />

      <TextInput
        value={amount}
        onChange={handleAmountOnChange}
        type='number'
        label='Amount'
      />

      <Grid item xs={12}>
        <Box m={1} pt={2}>
          <Button
            size='large'
            color='primary'
            disabled={isDisable()}
            variant='contained'
            style={{ padding: '6px 30px' }}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Box>
      </Grid>
    </Container>
  );
};

export default Main;

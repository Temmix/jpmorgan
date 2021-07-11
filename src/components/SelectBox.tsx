import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { SelectBoxType } from '../models';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectBox = ({
  onChange,
  label,
  value,
  selectOptions,
}: SelectBoxType) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id='select-outlined-label'>{label} </InputLabel>
        <Select
          labelId={`select-outlined-label-${label}`}
          id={`select-outlined-${label}`}
          value={value}
          onChange={onChange}
          label={label}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {selectOptions.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.value}{' '}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectBox;

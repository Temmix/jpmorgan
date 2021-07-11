import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FormControl, TextField } from '@material-ui/core';

import { TextInputType } from '../models';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const TextInput = ({ value, onChange, label, type }: TextInputType) => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <FormControl variant='outlined' className={classes.formControl}>
        <TextField
          id={`${label.split(' ').join('-')}-id`}
          label={label}
          type={type}
          value={value}
          variant='outlined'
          inputProps={{ min: 1, pattern: 'd+' }}
          onChange={onChange}
        />
      </FormControl>
    </Grid>
  );
};

export default TextInput;

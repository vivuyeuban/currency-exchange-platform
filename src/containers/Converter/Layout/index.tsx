import React from 'react';

import FormHelperText from '@material-ui/core/FormHelperText';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import AccountSelect from '../../../components/AccountSelect';
import CurrencyInput from '../../../components/CurrencyInput';
import TopToast from '../../../components/TopToast';
import Button from '../../../components/Button';

import { useStyles } from './styles';
import { getCurrencySymbol } from '../../../utils/currencies';

import type { TConverterLayoutProps } from './types';

const ConverterLayout = React.memo(({
  showToast = false,
  onToastClose,
  accounts = [],
  src,
  dest,
  isValid = false,
  exchangeRate,
  onSumbit,
  onChangeSrcToDest,
}: TConverterLayoutProps) => {
  const classes = useStyles();

  const outOfBound = +src.balance < +src.amount;
  return (
    <div>
      <TopToast
        severity="success"
        open={showToast}
        onDelayedClose={onToastClose}
      >
        Done!
      </TopToast>
      <div className={classes.container}>
        <Typography
          className={classes.customTypographyStyle}
          variant="h5"
          display="block"
          gutterBottom
        >
          I want to exchange
        </Typography>
        <AccountSelect
          id="sourceAcc"
          name="sourceAcc"
          accounts={accounts}
          value={src.accountId}
          className={classes.select}
          label="From"
          onChange={src.onAccountChange}
        />
        <Button
          className={classes.customChangeStyle}
          onClick={onChangeSrcToDest}
        >
          <ImportExportIcon />
        </Button>
        <AccountSelect
          id="destAcc"
          name="destAcc"
          value={dest.accountId}
          accounts={accounts}
          className={classes.select}
          label="To"
          onChange={dest.onAccountChange}
        />
        {
          !outOfBound
          && !!src.accountId
          && !!dest.accountId
          && !!src.currency
          && !!dest.currency
          && src.currency !== dest.currency
          && (
            <>
              <FormHelperText className={classes.rateInfo}>
                {!exchangeRate ? 'Loading...' : `Rate: ${getCurrencySymbol(src.currency)}1 = ${getCurrencySymbol(dest.currency)}${exchangeRate}`}
              </FormHelperText>
              <Divider variant="middle" />
            </>
          )
        }
        <div className={classes.row}>
          <CurrencyInput
            id="srcAmount"
            name="srcAmount"
            error={outOfBound}
            disabled={!src.accountId}
            helperText={outOfBound && 'Not enough money'}
            className={classes.marginRight}
            currency={src.currency}
            value={src.amount}
            onChange={src.onValChange}
            label="Amount"
          />
          <CurrencyInput
            id="destAmount"
            name="destAmount"
            label="Result"
            disabled={!dest.accountId}
            currency={dest.currency}
            value={dest.amount}
            onChange={dest.onValChange}
          />
        </div>
        <Button
          variant="contained"
          className={classes.customExachangeButtonStyle}
          disabled={!isValid}
          onClick={onSumbit}
        >
          Exchange
        </Button>
      </div>
    </div>
  );
});

export default ConverterLayout;

import { updateAccountBalance, setAccounts } from '../../reducers/accounts';
import mockAccountsData from '../../mockData/accounts';

import type {
  TGetState,
  TTransactionPayload,
  ThunkResult,
  TThunkDispatch,
} from './types';
import { getProperlyRounded } from '../../utils/currencies';

export const getAccounts = (): ThunkResult<void> => async (dispatch: TThunkDispatch) => {
  dispatch(setAccounts(mockAccountsData));
};

export const makeTransaction = ({
  source,
  destination,
}: TTransactionPayload): ThunkResult<void> => async (
  dispatch: TThunkDispatch,
  getState: TGetState,
) => {
  const { accounts: state } = getState();
  const sourceAccount = state.accounts[source.id];
  const destAccount = state.accounts[destination.id];

  if (!sourceAccount || !destAccount) {
    return;
  }

  if (sourceAccount.balance < source.amount) {
    return;
  }

  const newSourceAmount = sourceAccount.balance - source.amount;
  const newDestAmount = destAccount.balance + destination.amount;
  dispatch(updateAccountBalance({
    id: sourceAccount.id,
    newBalance: +getProperlyRounded(newSourceAmount),
  }));
  dispatch(updateAccountBalance({
    id: destAccount.id,
    newBalance: +getProperlyRounded(newDestAmount),
  }));
};

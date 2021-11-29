import type { TAccount } from '../reducers/types';

const accounts: TAccount[] = [
  {
    id: 'account-1',
    name: 'Dollars Account',
    currency: 'USD',
    balance: 200,
  },
  {
    id: 'account-2',
    name: 'Euros Account',
    currency: 'EUR',
    balance: 150,
  },
  {
    id: 'account-3',
    name: 'Pounds Account',
    currency: 'GBP',
    balance: 10,
  },
];

export default accounts;

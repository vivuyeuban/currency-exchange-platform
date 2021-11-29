import { createTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import type { Theme } from '@material-ui/core/styles';

export const createThemeStyle = (prefersDarkMode: boolean): Theme => createTheme({
  palette: {
    type: prefersDarkMode ? 'dark' : 'light',
    primary: {
      main: orange[400],
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        '&:hover $notchedOutline': {
          borderColor: orange[400],
        },
      },
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
});

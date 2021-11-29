import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  marginRight: {
    marginRight: 20,
  },
  select: {
    marginTop: 20,
  },
  row: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  rateInfo: {
    marginTop: 20,
    textAlign: 'center',
  },
  customExachangeButtonStyle: {
    marginTop: 20,
    width: 'fit-content',
    alignSelf: 'end',
  },
  customChangeStyle: {
    marginTop: 20,
    width: 'fit-content',
    alignSelf: 'center',
  },
  customTypographyStyle: {
    color: 'black',
  },
});

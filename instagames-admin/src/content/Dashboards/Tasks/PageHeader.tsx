import {
  alpha,
  Avatar,
  Box,
  Button,
  lighten,
  styled,
  Typography,
} from '@mui/material';

import { useTest } from '@/hooks/ping/usePing';

const AvatarPageTitle = styled(Avatar)(
  ({ theme }) => `
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      color: ${theme.colors.primary.main};
      margin-right: ${theme.spacing(2)};
      background: ${
        theme.palette.mode === 'dark'
          ? theme.colors.alpha.trueWhite[10]
          : theme.colors.alpha.white[50]
      };
      box-shadow: ${
        theme.palette.mode === 'dark'
          ? '0 1px 0 ' +
            alpha(lighten(theme.colors.primary.main, 0.8), 0.2) +
            ', 0px 2px 4px -3px rgba(0, 0, 0, 0.3), 0px 5px 16px -4px rgba(0, 0, 0, .5)'
          : '0px 2px 4px -3px ' +
            alpha(theme.colors.alpha.black[100], 0.4) +
            ', 0px 5px 16px -4px ' +
            alpha(theme.colors.alpha.black[100], 0.2)
      };
`
);

function PageHeader() {
  const testHook = useTest();

  const runTest = async () => {
    const res = await testHook.mutateAsync();
  };

  return (
    <Box
      display='flex'
      alignItems={{ xs: 'stretch', md: 'center' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent='space-between'
    >
      <Box display='flex' alignItems='center'>
        {/* <AvatarPageTitle variant='rounded'>
          <AddAlertTwoToneIcon fontSize='large' />
        </AvatarPageTitle> */}
        <Box>
          {/* <Typography variant='subtitle1'>Total Balance</Typography> */}
          <Typography variant='h1' component='h3' gutterBottom>
            3,45,34,556
          </Typography>
          <Button
            onClick={() => {
              console.log('this is test');
              runTest();
            }}
            variant='contained'
            size='small'
          >
            test
          </Button>
          {/* <Typography variant='subtitle2'>
            Manage your day to day tasks with style! Enjoy a well built UI
            system.
          </Typography> */}
        </Box>
      </Box>
      <Box mt={{ xs: 3, md: 0 }}>
        {/* <Button variant='contained' startIcon={<DocumentScannerTwoToneIcon />}>
          Export
        </Button> */}
      </Box>
    </Box>
  );
}

export default PageHeader;

import { createTheme } from '@mui/material/styles';

// Definindo o tema com breakpoints
const themeOverrides = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderBottom: '3px solid',
          borderColor: 'transparent',
          '& th': {
            backgroundColor: '#4C4C4C',
            padding: '7px 0px',
            textAlign: 'center',
            width: '20%',
            '&:nth-child(1)': {
              borderTopLeftRadius: '3px',
              borderBottomLeftRadius: '5px',
            },
            '&:nth-child(4)': {
              borderTopRightRadius: '3px',
              borderBottomRightRadius: '5px',
            },
          },
          '& div': {
            fontWeight: '700',
            fontSize: '13px',
            color: '#ffffff',
            '@media (max-width:600px)': {
                fontSize: '11px',
            },
          },
          '& span': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& td': {
            backgroundColor: '#2E2E2E',
            color: '#ffffff',
            borderBottom: 'none',
            textAlign: 'center',
            padding: '9px',
            fontSize: '13px',
            fontWeight: '400',
            '@media (max-width:600px)': {
                fontSize: '11px',
            },
            '&:nth-child(1)': {
              borderTopLeftRadius: '3px',
              borderBottomLeftRadius: '3px',
            },
            '&:nth-child(4)': {
              borderTopRightRadius: '3px',
              borderBottomRightRadius: '3px',
            },
          },
        },
      },
    },
  },
});

export { themeOverrides };

import styled from 'styled-components';
import { Button, styled as styledMui } from '@mui/material';

interface Props {
  buttoncolor: string;
  textcolor: string;
  fontWeight: number;
}

const SidebarContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const CustomButton = styledMui(Button)<Props>(({ buttoncolor, textcolor, fontWeight }) => ({
  top: '0px',
  left: '0px',
  width: '246px',
  height: '143px',
  backgroundColor: buttoncolor,
  color: textcolor,
  fontWeight: fontWeight,
  opacity: 1,
  letterSpacing: 0,
  lineHeight: '22px',
  fontSize: '14px',
  borderRadius: '0px',
  fontFamily: 'Montserrat, sans-serif',
  flexGrow: 1,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: buttoncolor,
    color: textcolor,
  },
}));

export { SidebarContainer, CustomButton };
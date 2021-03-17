import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FooterContainer, FooterInner } from './footer.styles';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterInner>
        <Typography variant="subtitle1">
          @copyrights
        </Typography>
      </FooterInner>
    </FooterContainer>
  );
}

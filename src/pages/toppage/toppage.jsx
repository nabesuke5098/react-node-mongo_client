import React from 'react';
import Grid from '@material-ui/core/Grid';

import { TopPageContainer } from './toppage.styles';

class TopPage extends React.Component {
  render() {
    return (
      <TopPageContainer>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <h1>test1</h1>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1>test2</h1>
          </Grid>
        </Grid>
      </TopPageContainer>
    );
  }
}

export default TopPage;
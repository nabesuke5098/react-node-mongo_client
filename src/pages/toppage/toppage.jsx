import React from 'react';
import Grid from '@material-ui/core/Grid';

import ContentCard from '../../components/card/card';
import ProfileModal from '../../components/modal/modal';

import { TopPageContainer } from './toppage.styles';

class TopPage extends React.Component {
  render() {
    return (
      <TopPageContainer>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <ContentCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ContentCard />
          </Grid>
        </Grid>
        <ProfileModal />
      </TopPageContainer>
    );
  }
}

export default TopPage;
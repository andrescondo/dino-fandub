import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Landing from '../containers/Landing';
import Video from '../containers/Video';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/video" component={Video} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

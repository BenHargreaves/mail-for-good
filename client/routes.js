import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';

import Dashboard from './containers/Dashboard';

import CreateCampaign from './containers/campaigns/CreateCampaign';
import ManageCampaigns from './containers/campaigns/ManageCampaigns';
import CampaignView from './containers/campaigns/CampaignView';

import CreateList from './containers/lists/CreateList';
import ManageLists from './containers/lists/ManageLists';

import Settings from './containers/Settings';

import AddEmail from './containers/AddEmail';
import NotFound from './components/404';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />

    <Route path="campaigns">
        <Route path="create" component={CreateCampaign} />
        <Route path="manage">
          <IndexRoute component={ManageCampaigns} />
          <Route path=":slug" component={CampaignView} />
        </Route>
    </Route>

    <Route path="lists">
        <Route path="create" component={CreateList} />
        <Route path="manage" component={ManageLists} />
    </Route>

    <Route path="analytics">
    </Route>

    <Route path="settings" component={Settings} />

    <Route path="*" component={NotFound} />
  </Route>
);

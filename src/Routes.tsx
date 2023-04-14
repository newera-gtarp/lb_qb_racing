import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Races from './views/Races';
import Tracks from './views/Tracks';
import SetupRace from './views/SetupRace';
import SetupTrack from './views/SetupTrack';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={`/`} component={Races} />
      <Route path={`/setupRace/:trackId?`} component={SetupRace} />
      <Route path={`/setupTrack`} component={SetupTrack} />
      <Route path={`/tracks`} component={Tracks} />
    </Switch>
  );
};

export default Routes;

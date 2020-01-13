import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './Palette';
import seedColors from './seedColors';
import PaletteList from './PaletteList';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <PaletteList palettes={seedColors} />
      </Route>
      <Route path="/palette/:id">
        <Palette />
      </Route>
    </Switch>
  );
}

export default App;

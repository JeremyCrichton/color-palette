import React from 'react';
import { Route, Switch } from 'react-router-dom';

import seedColors from './seedColors';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <PaletteList palettes={seedColors} />
      </Route>
      <Route exact path="/palette/new">
        <NewPaletteForm />
      </Route>
      <Route exact path="/palette/:id">
        <Palette />
      </Route>
      <Route exact path="/palette/:paletteId/:colorId">
        <SingleColorPalette />
      </Route>
    </Switch>
  );
}

export default App;

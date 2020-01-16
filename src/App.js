import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import seedColors from './seedColors';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);

  useEffect(() => {
    // Save to local storage whenever palettes changes
    window.localStorage.setItem('palettes', JSON.stringify(palettes));
  }, [palettes]);

  const savePalette = newPalette => {
    console.log(newPalette);
    setPalettes([...palettes, newPalette]);
  };

  return (
    <Switch>
      <Route exact path="/">
        <PaletteList palettes={palettes} />
      </Route>
      <Route exact path="/palette/new">
        <NewPaletteForm savePalette={savePalette} palettes={palettes} />
      </Route>
      <Route exact path="/palette/:id">
        <Palette palettes={palettes} />
      </Route>
      <Route exact path="/palette/:paletteId/:colorId">
        <SingleColorPalette palettes={palettes} />
      </Route>
    </Switch>
  );
}

export default App;

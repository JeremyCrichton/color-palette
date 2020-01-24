import React, { useState, useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import { AnimatedSwitch } from './AnimatedSwitch';
import seedColors from './seedColors';

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);
  const location = useLocation();

  useEffect(() => {
    // Save to local storage whenever palettes changes
    window.localStorage.setItem('palettes', JSON.stringify(palettes));
  }, [palettes]);

  const savePalette = newPalette => {
    console.log(newPalette);
    setPalettes([...palettes, newPalette]);
  };

  const deletePalette = id => {
    setPalettes(palettes.filter(palette => palette.id !== id));
  };

  return (
    <AnimatedSwitch location={location}>
      <Route exact path="/">
        <PaletteList palettes={palettes} deletePalette={deletePalette} />
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
    </AnimatedSwitch>
  );
}

export default App;

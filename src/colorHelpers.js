import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

// Return an array w/ 3 color values: dark, actual, white
function getRange(hexColor) {
  const end = '#fff';
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    end
  ];
}

// Return a # of colors based on a single hexColor
function getScale(hexColor, numberOfColors) {
  return chroma
    .scale(getRange(hexColor))
    .mode('lab')
    .colors(numberOfColors);
}

function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  };
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of starterPalette.colors) {
    let scale = getScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace('rgb', 'rgba')
          .replace(')', ',1.0)')
      });
    }
  }

  return newPalette;
}

// Find a palette by ID
const findPalette = (pid, colors) => {
  return colors.find(palette => palette.id === pid);
};

const gatherShades = (palette, colorToFilterBy) => {
  let shades = [];
  let allColors = palette.colors;

  for (let key in allColors) {
    shades = shades.concat(
      allColors[key].filter(color => color.id === colorToFilterBy)
    );
  }

  return shades.slice(1);
};

export { findPalette, generatePalette, gatherShades };

type RGBColor = {r: number; g: number; b: number}

const RGBPalette1 = {
  red: {r: 255, g: 0, b: 0},
  green: {r: 0, g: 255, d: 0},
  blue: {r: 0, g: 0, b: 255}
}

// Uncomment and green will be highlighted as an error
// const RGBPalette2 = {
//   red: {r: 255, g: 0, b: 0},
//   green: {r: 0, g: 255, d: 0},
//   blue: {r: 0, g: 0, b: 255}
// } satisfies Record<string, RGBColor>

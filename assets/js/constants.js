'use strict';

const defaultUnits = (name) => [
  {
    name: `kilo${name}`,
    toBase: (value) => value * 1_000,
    fromBase: (value) => value / 1_000,
  },
  {
    name: `hekto${name}`,
    toBase: (value) => value * 100,
    fromBase: (value) => value / 100,
  },
  {
    name: `deka${name}`,
    toBase: (value) => value * 10,
    fromBase: (value) => value / 10,
  },
  {
    name,
    toBase: (value) => value,
    fromBase: (value) => value,
  },
  {
    name: `deci${name}`,
    toBase: (value) => value / 10,
    fromBase: (value) => value * 10,
  },
  {
    name: `centi${name}`,
    toBase: (value) => value / 100,
    fromBase: (value) => value * 100,
  },
  {
    name: `milli${name}`,
    toBase: (value) => value / 1_000,
    fromBase: (value) => value * 1_000,
  },
];

export const temperature = [
  {
    name: 'celsius',
    toBase: (value) => value + 273.15,
    fromBase: (value) => value - 273.15,
  },
  {
    name: 'fahrenheit',
    toBase: (value) => (value - 32) * (5 / 9) + 273.15,
    fromBase: (value) => (value - 273.15) * (9 / 5) + 32,
  },
  {
    name: 'kelvin',
    toBase: (value) => value,
    fromBase: (value) => value,
  },
  {
    name: 'rankine',
    toBase: (value) => value * (5 / 9),
    fromBase: (value) => value * (9 / 5),
  },
  {
    name: 'delisle',
    toBase: (value) => 373.15 - value * (2 / 3),
    fromBase: (value) => (373.15 - value) * (3 / 2),
  },
];

export const length = [
  ...defaultUnits('méter'),
  {
    name: 'hüvelyk',
    toBase: (value) => value / 25.4,
    fromBase: (value) => value * 25.4,
  },
  {
    name: 'láb',
    toBase: (value) => value / 0.3048,
    fromBase: (value) => value * 0.3048,
  },
  {
    name: 'yard',
    toBase: (value) => value / 0.9144,
    fromBase: (value) => value * 0.9144,
  },
  {
    name: 'mérföld',
    toBase: (value) => value / 1_609.344,
    fromBase: (value) => value * 1_609.344,
  },
];

export const weight = [
  ...defaultUnits('gramm'),
  {
    name: 'tonna',
    toBase: (value) => value * 1_000_000,
    fromBase: (value) => value / 1_000_000,
  },
  {
    name: 'mázsa',
    toBase: (value) => value * 100_000,
    fromBase: (value) => value / 100_000,
  },
  {
    name: 'font',
    toBase: (value) => value * 453.59237,
    fromBase: (value) => value / 453.59237,
  },
  {
    name: 'uncia',
    toBase: (value) => value * 28.349523125,
    fromBase: (value) => value / 28.349523125,
  },
  {
    name: 'karát',
    toBase: (value) => value * 0.2,
    fromBase: (value) => value / 0.2,
  },
];

export const volume = [
  ...defaultUnits('liter'),
  {
    name: 'köbméter',
    toBase: (value) => value * 1_000,
    fromBase: (value) => value / 1_000,
  },
];

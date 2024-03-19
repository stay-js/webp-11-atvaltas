'use strict';

export const temperature = [
  {
    name: 'Celsius',
    toBase: (value) => value + 273.15,
    fromBase: (value) => value - 273.15,
  },
  {
    name: 'Fahrenheit',
    toBase: (value) => (value - 32) * (5 / 9) + 273.15,
    fromBase: (value) => (value - 273.15) * (9 / 5) + 32,
  },
  {
    name: 'Kelvin',
    toBase: (value) => value,
    fromBase: (value) => value,
  },
  {
    name: 'Rankine',
    toBase: (value) => value * (5 / 9),
    fromBase: (value) => value * (9 / 5),
  },
  {
    name: 'Delisle',
    toBase: (value) => 373.15 - value * (2 / 3),
    fromBase: (value) => (373.15 - value) * (3 / 2),
  },
];

export const length = [
  {
    name: 'Méter',
    toBase: (value) => value,
    fromBase: (value) => value,
  },
  {
    name: 'Kilométer',
    toBase: (value) => value * 1000,
    fromBase: (value) => value / 1000,
  },
  {
    name: 'Centiméter',
    toBase: (value) => value / 100,
    fromBase: (value) => value * 100,
  },
  {
    name: 'Milliméter',
    toBase: (value) => value / 1000,
    fromBase: (value) => value * 1000,
  },
];

export const weight = [
  {
    name: 'Kilogramm',
    toBase: (value) => value,
    fromBase: (value) => value,
  },
  {
    name: 'Gramm',
    toBase: (value) => value / 1000,
    fromBase: (value) => value * 1000,
  },
  {
    name: 'Milligramm',
    toBase: (value) => value / 1e6,
    fromBase: (value) => value * 1e6,
  },
  {
    name: 'Tonna',
    toBase: (value) => value * 1000,
    fromBase: (value) => value / 1000,
  },
];

export const volume = [
  {
    name: 'Köbméter',
    toBase: (value) => value,
    fromBase: (value) => value,
  },
  {
    name: 'Köbdeciméter',
    toBase: (value) => value / 1000,
    fromBase: (value) => value * 1000,
  },
  {
    name: 'Liter',
    toBase: (value) => value / 1000,
    fromBase: (value) => value * 1000,
  },
  {
    name: 'Deciliter',
    toBase: (value) => value / 10000,
    fromBase: (value) => value * 10000,
  },
  {
    name: 'Centiliter',
    toBase: (value) => value / 100000,
    fromBase: (value) => value * 100000,
  },
  {
    name: 'Milliliter',
    toBase: (value) => value / 1e6,
    fromBase: (value) => value * 1e6,
  },
  {
    name: 'Hektoliter',
    toBase: (value) => value / 10,
    fromBase: (value) => value * 10,
  },
  {
    name: 'Köbmilliméter',
    toBase: (value) => value / 1e9,
    fromBase: (value) => value * 1e9,
  },
];

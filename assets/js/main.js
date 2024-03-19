'use strict';

import { temperature, length, weight, volume } from './constants.js';

const fromUnit = document.getElementById('from-unit');
const fromValue = document.getElementById('from-value');
const toUnit = document.getElementById('to-unit');
const toValue = document.getElementById('to-value');
const switchButton = document.getElementById('switch');

let values;

const convertHandler = () => {
  const from = values.find((val) => val.name == fromUnit.value);
  const to = values.find((val) => val.name == toUnit.value);

  const value = to.fromBase(from.toBase(parseFloat(fromValue.value)));
  toValue.value = isNaN(value) ? '' : value;
};

fromUnit.addEventListener('change', convertHandler);
fromValue.addEventListener('input', convertHandler);
toUnit.addEventListener('change', convertHandler);

const removeAllChildren = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

document.getElementById('type').addEventListener('change', (e) => {
  removeAllChildren(fromUnit);
  removeAllChildren(toUnit);

  switch (e.target.value) {
    case 'temperature':
      values = temperature;
      break;
    case 'length':
      values = length;
      break;
    case 'weight':
      values = weight;
      break;
    case 'volume':
      values = volume;
      break;
  }

  values.forEach((item) => {
    const option = document.createElement('option');
    option.value = item.name;
    option.textContent = item.name;

    fromUnit.append(option.cloneNode(true));
    toUnit.append(option.cloneNode(true));
  });
});

switchButton.addEventListener('click', () => {
  [fromUnit.value, toUnit.value] = [toUnit.value, fromUnit.value];
  [fromValue.value, toValue.value] = [toValue.value, fromValue.value];

  switchButton.style.transform =
    switchButton.style.getPropertyValue('transform') == 'rotate(180deg)'
      ? 'rotate(0deg)'
      : 'rotate(180deg)';
});

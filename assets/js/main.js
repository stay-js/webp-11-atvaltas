'use strict';

import { temperature, length, weight, volume } from './constants.js';

const fromType = document.getElementById('from-type');
const fromValue = document.getElementById('from-value');
const toType = document.getElementById('to-type');
const toValue = document.getElementById('to-value');
const switchButton = document.getElementById('switch');

let values;

const convertHandler = () => {
  const from = values.filter((val) => val.name == fromType.value)[0];
  const to = values.filter((val) => val.name == toType.value)[0];

  toValue.value = to.fromBase(from.toBase(parseFloat(fromValue.value)));
};

fromType.addEventListener('change', convertHandler);
fromValue.addEventListener('input', convertHandler);
toType.addEventListener('change', convertHandler);

const removeAllChildren = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

document.getElementById('type-selector').addEventListener('change', (e) => {
  removeAllChildren(fromType);
  removeAllChildren(toType);

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

    fromType.append(option.cloneNode(true));
    toType.append(option.cloneNode(true));
  });
});

switchButton.addEventListener('click', () => {
  [fromType.value, toType.value] = [toType.value, fromType.value];
  [fromValue.value, toValue.value] = [toValue.value, fromValue.value];

  switchButton.style.transform =
    switchButton.style.getPropertyValue('transform') == 'rotate(180deg)'
      ? 'rotate(0deg)'
      : 'rotate(180deg)';
});

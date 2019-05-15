'use strict';
/*! (c) Andrea Giammarchi - ISC */

const {call} = require('safer-function');

const {
  defineProperty,
  getPrototypeOf,
  getOwnPropertyDescriptor,
  getOwnPropertyNames,
  hasOwnProperty
} = Object;

const falsify = (descriptor, name) => {
  defineProperty(descriptor, name, {
    enumerable: true,
    value: false
  });
};

const updated = descriptor => {
  falsify(descriptor, 'configurable');
  if (call(hasOwnProperty, descriptor, 'writable'))
    falsify(descriptor, 'writable');
  return descriptor;
};

Object.defineProperty(exports, '__esModule', {value: true}).default = object => {
  const self = object;
  const names = [];
  const descriptors = [];
  do {
    getOwnPropertyNames(object).forEach(name => {
      if (!names.includes(name)) {
        names.push(name);
        descriptors.push(getOwnPropertyDescriptor(object, name));
      }
    });
  }
  while (object = getPrototypeOf(object));
  names.forEach((name, i) => {
    defineProperty(self, name, updated(descriptors[i]));
  });
  return self;
};

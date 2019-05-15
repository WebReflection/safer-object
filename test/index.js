const {default:saferObject} = require('../cjs');

const obj = saferObject({
  __proto__: {
    name: 'shadowed',
    parent: 'super'
  },
  name: 'test'
});

obj.name = 'nope';
obj.parent = {nope: true};

console.assert(obj.name === 'test');
console.assert(obj.parent === 'super');
console.assert(obj.hasOwnProperty('parent'));
console.assert(obj.hasOwnProperty('hasOwnProperty'));

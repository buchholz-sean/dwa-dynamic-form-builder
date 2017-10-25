const tool = require('./tool.js');

const demoArr = [{
  type: 'label',
  id: 'nameLabel',
  for: 'nameInput',
}, {
  type: 'text',
  id: 'nameInput',
  required: true,
}, {
  type: 'SELECT',
  id: 'caseInsensitive',
}, {
  type: 'select',
  for: 'bogusProperty',
  required: false,
}, {
  type: 'bogusInput',
  class: 'anotherBogusProp',
  id: 'this won\'t render',
}, {
  type: 'text',
  class: 'textClass',
  required: 'true',
}, {
  foo: 'bar',
  baz: 'bat',
}, {
  type: 'Submit',
  id: 'submitBtn',
  formaction: '/some/action.php',
  value: 'Submit Form',
}];

// eslint-disable-next-line no-console
console.log(tool.genForm(demoArr));

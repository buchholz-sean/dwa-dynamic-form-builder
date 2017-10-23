const tool = require('./tool.js');

var demoArr = [{
    type: 'label',
    id: 'nameLabel',
    for: 'nameInput'
}, {
    type: 'text',
    id: 'nameInput'
}, {
    type: 'SELECT',
    id: 'caseInsensitive'
}, {
    type: 'select',
    for: 'bogusProperty'
}, {
    type: 'bogusInput',
    className: 'anotherBogusProp',
    id: 'this won\'t render'
}, {
    type: 'text',
    class: 'thisOneHasNoId'
}, {
    foo: 'bar',
    baz: 'bat'
}];

console.log(tool.genForm(demoArr));

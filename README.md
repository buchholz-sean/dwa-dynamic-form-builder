# dwa-dynamic-form-builder
A tool that dynamically generates valid HTML forms based on user input.

## Getting Started

### Requirements
* node
* npm

New to node? [Check out the documentation!](https://www.npmjs.com/get-npm)

### Installation
Clone (or download) this repo...
```
git clone git@github.com:buchholz-sean/dwa-dynamic-form-builder.git && cd dwa-dynamic-form-builder
```
...then install dependencies
```
npm install
```

### See some example output
```
cd src
node demo
```

## How it works

The `genForm` method accepts an array of objects with a required `type` property and optional `id` property. Some input types accept other optional properties, too.

The recognized input types and their optional properties are:

|              | *Text*             | *Email*            | *Password*         | *Label*            | *Select*           | *Reset*            | *Submit*           |
|--------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|
| `id`         | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| `class`      | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| `name`       | :white_check_mark: | :white_check_mark: | :white_check_mark: |                    | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| `for`        |                    |                    |                    | :white_check_mark: |                    |                    |                    |
| `form`       | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| `formaction` |                    |                    |                    |                    |                    |                    | :white_check_mark: |
| `value`      | :white_check_mark: | :white_check_mark: | :white_check_mark: |                    |                    | :white_check_mark: | :white_check_mark: |
| `required`   | :white_check_mark: | :white_check_mark: | :white_check_mark: |                    | :white_check_mark: |                    |                    |

The `type` property is case-insensitive, and the tool will ignore any unrecognized values of `type`, as well as any unsupported properties like `class`.

### Basic usage

Import the tool into your project by declaring it as a constant or variable
```
const tool = require('./path/to/tool.js');
```

Pass the `genForm` method an array of objects to convert to HTML inputs:

```
var myArr = [{
    type: 'label',
    id: 'nameLabel',
    for: 'nameInput'
}, {
    type: 'text',
    id: 'nameInput'
}, {
    type: 'SELECT',
    id: 'caseInsensitive'
}];

var output = tool.genForm(myArr);

/* output =
 * '<label id="nameLabel" for="nameInput"></label><input type="text" id="nameInput" /><select id="caseInsensitive"></select>'
 */
```

Take a look at [src/demo.js](./src/demo.js) to see an example array with both good and bad values.

## About the author

### Sean Buchholz

* Slack (preferred): @smbuchholz
* Email: smbuchholz@fullsail.edu

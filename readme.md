# max-min-coordinate [![Build Status](https://travis-ci.org/jeffminsungkim/max-min-coordinate.svg?branch=master)](https://travis-ci.org/jeffminsungkim/max-min-coordinate)

> Find the maximum and the minimum value of coordinate X and Y in an array

Latitude is the Y-axis, longitude is the X-axis.


## Install

```
$ npm install max-min-coordinate
```


## Usage

```js
const m = require('max-min-coordinate');
const coordinates = [44.2324, 12.5513, 341.1434, -334.2315, 44.1322, 44.8886];

m.getMaxLongitude(coordinates);
//=> 44.8886

m.getMinLongitude(coordinates);
//=> -334.2315

m.getMaxLatitude(coordinates);
//=> 341.1434

m.getMinLatitude(coordinates);
//=> 44.1322
```


## API

### getMaxLongitude(input: [object Array]) : number

#### input

Type: `Array`

Get the maximum value of longitude in an array.

### getMinLongitude(input: [object Array]) : number

#### input

Type: `Array`

Get the minimum value of longitude in an array.

### getMaxLatitude(input: [object Array]) : number

#### input

Type: `Array`

Get the maximum value of latitude in an array.

### getMinLatitude(input: [object Array]) : number

#### input

Type: `Array`

Get the minimum value of latitude in an array.

## License

MIT © [JeffMinsungKim](https://jeffminsungkim.com)

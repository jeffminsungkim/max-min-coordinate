"use strict";
exports.getMaxLongitude = input => {

  if (Object.prototype.toString.call(input) !== "[object Array]")
    throw new TypeError(`Expected an Array, got ${typeof input}`);

  if (input.length & 1)
    throw new Error("Invalid pair of coordinate. Please check your list of cooridinate.");

  let maxLong = input[0];

  for (let i = 0; i < input.length; i += 2)
    maxLong = Math.max(input[i] * 1, maxLong);

  return maxLong;
};

exports.getMinLongitude = input => {
  if (Object.prototype.toString.call(input) !== "[object Array]")
    throw new TypeError(`Expected an Array, got ${typeof input}`);

  if (input.length & 1)
    throw new Error("Invalid pair of coordinate. Please check your list of cooridinate.");

  let minLong = input[0];

  for (let i = 0; i < input.length; i += 2)
  	minLong = Math.min(input[i] * 1, minLong);

  return minLong;
};

exports.getMaxLatitude = input => {
  if (Object.prototype.toString.call(input) !== "[object Array]")
    throw new TypeError(`Expected an Array, got ${typeof input}`);

  if (input.length & 1)
    throw new Error("Invalid pair of coordinate. Please check your list of cooridinate.");

  let maxLat = input[1];

  for (let i = 1; i < input.length; i += 2)
    maxLat = Math.max(input[i] * 1, maxLat);

  return maxLat;
};

exports.getMinLatitude = input => {
  if (Object.prototype.toString.call(input) !== "[object Array]")
    throw new TypeError(`Expected an Array, got ${typeof input}`);

  if (input.length & 1)
    throw new Error("Invalid pair of coordinate. Please check your list of cooridinate.");

  let minLat = input[1];

  for (let i = 1; i < input.length; i += 2)
    minLat = Math.min(input[i] * 1, minLat);

  return minLat;
};

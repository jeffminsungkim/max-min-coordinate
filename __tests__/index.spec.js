const m = require("../index");

describe("Check the maximum and minimum value of Longitude & Latitude", () => {
  const stringCoordinates = ["44.2324", "12.5513", "341.1434", "-334.2315", "44.1322", "44.8886"];
  const coordinates =
  [
    34.8630381121752,
    126.79283293157454,
    34.86297626447228,
    126.79290553830698,
    34.86291435621377,
    126.79294260279168,
    34.86285575836447,
    126.79293864861928,
    34.862807266325234,
    126.79291416398303,
    34.862789119624814,
    126.79284449200419,
    34.8627855740095,
    126.79274744325238,
    34.862830525069846,
    126.79267761299087,
    34.86294869601974,
    126.7925966627584,
    34.863014910563614,
    126.7924420240835,
    34.86307342442305,
    126.79239676562504,
    34.863127573633854,
    126.7924349059684,
    34.863160328629576,
    126.7924813021935,
    34.86315031384976,
    126.79255514616251,
    34.86309870027328,
    126.79268240808228
  ];

  it("should return 126.79294260279168", () => {
    maxLon = 126.79294260279168;
    expect(m.getMaxLongitude(coordinates)).toBe(maxLon);
    expect(m.getMaxLongitude(coordinates)).toBeNumber();
  });

  it("should return 126.79239676562504", () => {
    minLat = 126.79239676562504;
    expect(m.getMinLongitude(coordinates)).toBe(minLat);
    expect(m.getMinLongitude(coordinates)).toBeNumber();
  });

  it("should return 34.863160328629576", () => {
    maxLat = 34.863160328629576;
    expect(m.getMaxLatitude(coordinates)).toBe(maxLat);
    expect(m.getMaxLatitude(coordinates)).toBeNumber();
  });

  it("should return 34.8627855740095", () => {
    minLat = 34.8627855740095;
    expect(m.getMinLatitude(coordinates)).toBe(minLat);
    expect(m.getMinLatitude(coordinates)).toBeNumber();
  });

  it("should return 44.8886", () => {
    maxLong = 44.8886;
    expect(m.getMaxLongitude(stringCoordinates)).toBe(maxLong);
    expect(m.getMaxLongitude(stringCoordinates)).toBeNumber();
  });

  it("should return -334.2315", () => {
    minLong = -334.2315;
    expect(m.getMinLongitude(stringCoordinates)).toBe(minLong);
    expect(m.getMinLongitude(stringCoordinates)).toBeNumber();
  });

  it("should return 341.1434", () => {
    maxLat = 341.1434;
    expect(m.getMaxLatitude(stringCoordinates)).toBe(maxLat);
    expect(m.getMaxLatitude(stringCoordinates)).toBeNumber();
  });

  it("should return 44.1322", () => {
    minLat = 44.1322;
    expect(m.getMinLatitude(stringCoordinates)).toBe(minLat);
    expect(m.getMinLatitude(stringCoordinates)).toBeNumber();
  });
});

describe("Throw an error when the list of coordinate is invalid" , () => {
  const invalidCoordinates = [34.8630381121752, 126.79283293157454, 34.86297626447228];

  it("should throw an error message if the length of an array is an odd number", () => {
    expect(() => {
      m.getMaxLongitude(invalidCoordinates);
    }).toThrowError("Invalid pair of coordinate. Please check your list of cooridinate.");
  });
});

describe("Throw an error when the type of input is not an array" , () => {
  it("should throw an error message if the input type is number", () => {
    expect(() => {
      m.getMaxLongitude(123);
    }).toThrowError("Expected an Array, got number");
  });

  it("should throw an error message if the input type is object", () => {
    expect(() => {
      m.getMinLongitude({num: 123});
    }).toThrowError("Expected an Array, got object");
  });

  it("should throw an error message if the input type is string", () => {
    expect(() => {
      m.getMaxLatitude("Coordinates");
    }).toThrowError("Expected an Array, got string");
  });

  it("should throw an error message if the input type is boolean", () => {
    expect(() => {
      m.getMinLatitude(true);
    }).toThrowError("Expected an Array, got boolean");
  });
});

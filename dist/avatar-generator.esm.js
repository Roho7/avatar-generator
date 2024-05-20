import React from 'react';

var Avatar = function Avatar(_ref) {
  var seed = _ref.seed,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 100 : _ref$size,
    _ref$blockSize = _ref.blockSize,
    blockSize = _ref$blockSize === void 0 ? 10 : _ref$blockSize,
    _ref$colors = _ref.colors,
    colors = _ref$colors === void 0 ? {} : _ref$colors;
  var generateColor = function generateColor(type, defaultColor) {
    var hash = 0;
    for (var i = 0; i < seed.length; i++) {
      hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    var color = "#";
    for (var _i = 0; _i < 3; _i++) {
      var value = hash >> _i * 8 + type.charCodeAt(0) & 0xff;
      color += ("00" + value.toString(16)).substr(-2);
    }
    return color || defaultColor;
  };
  var skinColor = colors.skin || generateColor("skin", "#f5d6b3");
  var eyeColor = colors.eye || generateColor("eye", "#ab4848");
  var hairColor = colors.hair || generateColor("hair", "#704e3b");
  var avatarData = [[hairColor, hairColor, hairColor, hairColor, hairColor, hairColor, hairColor, hairColor, hairColor, hairColor], [hairColor, hairColor, hairColor, hairColor, hairColor, hairColor, hairColor, hairColor, hairColor, hairColor], [skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor], [skinColor, eyeColor, eyeColor, skinColor, skinColor, skinColor, eyeColor, eyeColor, skinColor, skinColor], [skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor], [skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor], [skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor], [skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor], [skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor], [skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor, skinColor]];
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg"
  }, avatarData.map(function (row, rowIndex) {
    return row.map(function (color, colIndex) {
      return React.createElement("rect", {
        key: rowIndex + "-" + colIndex,
        x: colIndex * blockSize,
        y: rowIndex * blockSize,
        width: blockSize,
        height: blockSize,
        fill: color
      });
    });
  }));
};

export default Avatar;
//# sourceMappingURL=avatar-generator.esm.js.map

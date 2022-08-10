"use strict";

var _slicedToArray = (function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    }
  };
})();

var _typeof =
  typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
    ? function (obj) {
        return typeof obj;
      }
    : function (obj) {
        return obj &&
          typeof Symbol === "function" &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? "symbol"
          : typeof obj;
      };

//function to generate list of MIDs
var generateMID = function generateMID(MID, numOfMID) {
  var validMIDList =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var _loop = function _loop() {
    var FIXED_NUMBER = "2468135790";
    var MIDList = MID.split("");
    var fixList = FIXED_NUMBER.split("");

    //calculate sum off odd number and even number

    var _MIDList$reduce = MIDList.reduce(
        function (_ref, cur, i) {
          var _ref2 = _slicedToArray(_ref, 2),
            oddSum = _ref2[0],
            evenSum = _ref2[1];

          return i % 2 !== 0 && Number(cur) > 0
            ? [oddSum, evenSum + Number(fixList[Number(cur) - 1])]
            : [oddSum + Number(cur), evenSum];
        },
        [0, 0]
      ),
      _MIDList$reduce2 = _slicedToArray(_MIDList$reduce, 2),
      oddSum = _MIDList$reduce2[0],
      evenSum = _MIDList$reduce2[1];

    //calculate total sum

    var totalSum = evenSum + oddSum;
    console.log("Total Sum: " + totalSum);

    //if the last digit of total sum is 0, push it to validMIDList array
    if (totalSum > 0 && totalSum % 10 === 0) {
      console.log("Hurray! Valid MID is found");
      //append 000001 to MID
      var validMid = "000001" + MID;
      validMIDList.push(validMid);
    }

    //check range and increment MID by 1. If range is exceeded return from the function

    var _plusOne = plusOne(MID),
      _plusOne2 = _slicedToArray(_plusOne, 2),
      newMID = _plusOne2[0],
      isValidRange = _plusOne2[1];

    if (isValidRange) {
      MID = newMID;
    } else {
      console.log("Alas! Exceeded the range.");
      return {
        v: validMIDList,
      };
    }
  };

  while (validMIDList.length < numOfMID) {
    var _ret = _loop();

    if (
      (typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object"
    )
      return _ret.v;
  } //loop ends

  return validMIDList;
};

//function to increment MID by 1
var plusOne = function plusOne(MID) {
  var range = 99999;
  //take the last 5 digits of MID and increment by 1
  var nextMID = Number(MID.substr(4)) + 1;
  //check for valid range
  var isValidRange = void 0;
  var newMID =
    MID.substr(0, MID.length - ("" + nextMID).length) + String(nextMID);
  nextMID < range ? (isValidRange = true) : (isValidRange = false);

  return [newMID, isValidRange];
};

//const MID = "000000184020014";
var validMIDList = generateMID("224014944", 20);

//loop through the valid MID List and print each element
validMIDList.forEach(function (el) {
  console.log(el);
});

//length of the valid MID List
console.log(validMIDList.length);

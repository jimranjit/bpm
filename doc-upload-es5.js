"use strict";

var uploadFile = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(files) {
    var file, fileContent;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("start time" + new Date());
            file = document.querySelector("#fileupload").files[0];

            console.log(file.name, file.type);
            _context.prev = 3;
            _context.next = 6;
            return toBase64(file);

          case 6:
            fileContent = _context.sent;

            console.log(fileContent);
            console.log("end time" + new Date());
            page.ui.get("uploadDoc").execute(file);
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](3);

            console.error(_context.t0);
            return _context.abrupt("return");

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 12]]);
  }));

  return function uploadFile(_x) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var toBase64 = function toBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    //reader.readAsText(file);
    reader.onload = function () {
      return resolve(reader.result.toString().replace(/^data:(.*,)?/, ""));
    };
    reader.onerror = function (error) {
      return reject(error);
    };
  });
};

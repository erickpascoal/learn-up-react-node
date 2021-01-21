"use strict";

require("./database");

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = 3333;
const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_routes.default);
app.listen(PORT, () => {
  console.log(`🐺  Server listen on ${PORT}`);
});
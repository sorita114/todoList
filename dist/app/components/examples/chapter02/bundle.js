webpackJsonp([0],[function(module,exports,__webpack_require__){eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n\tif (true) {\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(58), __webpack_require__(3), __webpack_require__(13)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else if (typeof exports !== \"undefined\") {\n\t\tfactory(require('babel-runtime/helpers/toConsumableArray'), require('vue'), require('axios'));\n\t} else {\n\t\tvar mod = {\n\t\t\texports: {}\n\t\t};\n\t\tfactory(global.toConsumableArray, global.vue, global.axios);\n\t\tglobal.app = mod.exports;\n\t}\n})(this, function (_toConsumableArray2, _vue, _axios) {\n\t'use strict';\n\n\tvar _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);\n\n\tvar _vue2 = _interopRequireDefault(_vue);\n\n\tvar _axios2 = _interopRequireDefault(_axios);\n\n\tfunction _interopRequireDefault(obj) {\n\t\treturn obj && obj.__esModule ? obj : {\n\t\t\tdefault: obj\n\t\t};\n\t}\n\n\tvar App = new _vue2.default({\n\t\tel: '#app',\n\t\tdata: {\n\t\t\ttodos: [],\n\t\t\tnewTodo: ''\n\t\t},\n\t\tcreated: function created() {\n\t\t\tgetTodo();\n\t\t},\n\n\t\tmethods: {\n\t\t\tadd: function add() {\n\t\t\t\taddTodo(this, { text: this.newTodo });\n\t\t\t}\n\t\t}\n\t});\n\n\tfunction addTodo(target, data) {\n\t\t_axios2.default.post('http://localhost:8080/v1/todo', data).then(function () {\n\t\t\ttarget.newTodo = '';\n\n\t\t\tvar todos = [data].concat((0, _toConsumableArray3.default)(target.todos));\n\n\t\t\ttarget.todos = todos;\n\t\t});\n\t}\n\n\tfunction getTodo() {\n\t\t_axios2.default.get('http://localhost:8080/v1/todo', {\n\t\t\theaders: {\n\t\t\t\t'Access-Control-Allow-Origin': '*'\n\t\t\t}\n\t\t}).then(function (response) {\n\t\t\tApp.$set(App._data, 'todos', response.data._embedded.todos);\n\t\t});\n\t}\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9leGFtcGxlcy9jaGFwdGVyMDIvYXBwLmpzP2ViZWUiXSwibmFtZXMiOlsiQXBwIiwiZWwiLCJkYXRhIiwidG9kb3MiLCJuZXdUb2RvIiwiY3JlYXRlZCIsImdldFRvZG8iLCJtZXRob2RzIiwiYWRkIiwiYWRkVG9kbyIsInRleHQiLCJ0YXJnZXQiLCJwb3N0IiwidGhlbiIsImdldCIsImhlYWRlcnMiLCJyZXNwb25zZSIsIiRzZXQiLCJfZGF0YSIsIl9lbWJlZGRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsS0FBTUEsTUFBTSxrQkFBUTtBQUNuQkMsTUFBSSxNQURlO0FBRW5CQyxRQUFPO0FBQ05DLFVBQVEsRUFERjtBQUVOQyxZQUFVO0FBRkosR0FGWTtBQU1uQkMsU0FObUIscUJBTVI7QUFDVkM7QUFDQSxHQVJrQjs7QUFTbkJDLFdBQVU7QUFDVEMsTUFEUyxpQkFDRjtBQUNOQyxZQUFRLElBQVIsRUFBYyxFQUFDQyxNQUFNLEtBQUtOLE9BQVosRUFBZDtBQUNBO0FBSFE7QUFUUyxFQUFSLENBQVo7O0FBZ0JBLFVBQVNLLE9BQVQsQ0FBaUJFLE1BQWpCLEVBQXlCVCxJQUF6QixFQUErQjtBQUM5QixrQkFDRVUsSUFERixDQUNPLCtCQURQLEVBQ3dDVixJQUR4QyxFQUVFVyxJQUZGLENBRU8sWUFBTTtBQUNYRixVQUFPUCxPQUFQLEdBQWlCLEVBQWpCOztBQUVBLE9BQUlELFNBQVNELElBQVQsMENBQWtCUyxPQUFPUixLQUF6QixFQUFKOztBQUVBUSxVQUFPUixLQUFQLEdBQWVBLEtBQWY7QUFDQSxHQVJGO0FBU0E7O0FBRUQsVUFBU0csT0FBVCxHQUFtQjtBQUNsQixrQkFDRVEsR0FERixDQUNNLCtCQUROLEVBQ3VDO0FBQ3JDQyxZQUFVO0FBQ1QsbUNBQWdDO0FBRHZCO0FBRDJCLEdBRHZDLEVBTUVGLElBTkYsQ0FNTyxVQUFDRyxRQUFELEVBQWM7QUFDbkJoQixPQUFJaUIsSUFBSixDQUFTakIsSUFBSWtCLEtBQWIsRUFBb0IsT0FBcEIsRUFBNkJGLFNBQVNkLElBQVQsQ0FBY2lCLFNBQWQsQ0FBd0JoQixLQUFyRDtBQUNBLEdBUkY7QUFTQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgQXBwID0gbmV3IFZ1ZSh7XG5cdGVsOiAnI2FwcCcsXG5cdGRhdGEgOiB7XG5cdFx0dG9kb3MgOiBbXSxcblx0XHRuZXdUb2RvIDogJydcblx0fSxcblx0Y3JlYXRlZCAoKSB7XG5cdFx0Z2V0VG9kbygpO1xuXHR9LFxuXHRtZXRob2RzIDoge1xuXHRcdGFkZCAoKSB7XG5cdFx0XHRhZGRUb2RvKHRoaXMsIHt0ZXh0OiB0aGlzLm5ld1RvZG99KTtcblx0XHR9XG5cdH1cbn0pO1xuXG5mdW5jdGlvbiBhZGRUb2RvKHRhcmdldCwgZGF0YSkge1xuXHRheGlvc1xuXHRcdC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvdjEvdG9kbycsIGRhdGEpXG5cdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0dGFyZ2V0Lm5ld1RvZG8gPSAnJztcblxuXHRcdFx0bGV0IHRvZG9zID0gW2RhdGEsIC4uLnRhcmdldC50b2Rvc107XG5cblx0XHRcdHRhcmdldC50b2RvcyA9IHRvZG9zO1xuXHRcdH0pO1xufVxuXG5mdW5jdGlvbiBnZXRUb2RvKCkge1xuXHRheGlvc1xuXHRcdC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC92MS90b2RvJywge1xuXHRcdFx0aGVhZGVycyA6IHtcblx0XHRcdFx0J0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicgOiAnKidcblx0XHRcdH1cblx0XHR9KVxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0QXBwLiRzZXQoQXBwLl9kYXRhLCAndG9kb3MnLCByZXNwb25zZS5kYXRhLl9lbWJlZGRlZC50b2Rvcyk7XG5cdFx0fSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9leGFtcGxlcy9jaGFwdGVyMDIvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}],[0]);
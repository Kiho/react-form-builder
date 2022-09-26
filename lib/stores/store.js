"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _beedle = _interopRequireDefault(require("beedle"));

var _requests = require("./requests");

var _saveUrl;

var _onPost;

var _onLoad;

var store = new _beedle["default"]({
  actions: {
    setData: function setData(context, data, saveData) {
      context.commit('setData', data);
      if (saveData) this.save(data);
    },
    load: function load(context, _ref) {
      var _this = this;

      var loadUrl = _ref.loadUrl,
          saveUrl = _ref.saveUrl,
          data = _ref.data,
          saveAlways = _ref.saveAlways;
      _saveUrl = saveUrl;
      var saveA = saveAlways || saveAlways === undefined;
      context.commit('setSaveAlways', saveA);

      if (_onLoad) {
        _onLoad().then(function (x) {
          if (data && data.length > 0 && x.length === 0) {
            data.forEach(function (y) {
              return x.push(y);
            });
          }

          _this.setData(context, x);
        });
      } else if (loadUrl) {
        (0, _requests.get)(loadUrl).then(function (x) {
          if (data && data.length > 0 && x.length === 0) {
            data.forEach(function (y) {
              return x.push(y);
            });
          }

          _this.setData(context, x);
        });
      } else {
        this.setData(context, data);
      }
    },
    create: function create(context, element) {
      var _context$state = context.state,
          data = _context$state.data,
          saveAlways = _context$state.saveAlways;
      data.push(element);
      this.setData(context, data, saveAlways);
    },
    "delete": function _delete(context, element) {
      var _context$state2 = context.state,
          data = _context$state2.data,
          saveAlways = _context$state2.saveAlways;
      data.splice(data.indexOf(element), 1);
      this.setData(context, data, saveAlways);
    },
    post: function post(context) {
      var data = context.state.data;
      this.setData(context, data, true);
    },
    updateOrder: function updateOrder(context, elements) {
      var saveAlways = context.state.saveAlways;
      var newData = elements.filter(function (x) {
        return x && !x.parentId;
      });
      elements.filter(function (x) {
        return x && x.parentId;
      }).forEach(function (x) {
        return newData.push(x);
      });
      this.setData(context, newData, saveAlways);
    },
    save: function save(data) {
      if (_onPost) {
        _onPost({
          task_data: data
        });
      } else if (_saveUrl) {
        (0, _requests.post)(_saveUrl, {
          task_data: data
        });
      }
    }
  },
  mutations: {
    setData: function setData(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.data = payload;
      return state;
    },
    setSaveAlways: function setSaveAlways(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.saveAlways = payload;
      return state;
    }
  },
  initialState: {
    data: [],
    saveAlways: true
  }
});

store.setExternalHandler = function (onLoad, onPost) {
  _onLoad = onLoad;
  _onPost = onPost;
};

var _default = store;
exports["default"] = _default;
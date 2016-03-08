/**
 * @author RubaXa <trash@rubaxa.org>
 * @licence MIT
 */

(function (factory) {
  'use strict';

  if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
    module.exports = factory(require('./Sortable'));
  } else if (typeof define === 'function' && define.amd) {
    define(['./Sortable'], factory);
  } else {
    /* jshint sub:true */
    window['SortableMixin'] = factory(Sortable);
  }
})(function ( /** Sortable */ Sortable) {
  'use strict';

  var _nextSibling;

  var _activeComponent;

  var _defaultOptions = {
    ref: 'list',
    model: 'items',

    animation: 100,
    onStart: 'handleStart',
    onEnd: 'handleEnd',
    onAdd: 'handleAdd',
    onUpdate: 'handleUpdate',
    onRemove: 'handleRemove',
    onSort: 'handleSort',
    onFilter: 'handleFilter'
  };

  function _getModelName(component) {
    return component.sortableOptions && component.sortableOptions.model || _defaultOptions.model;
  }

  function _getModelItems(component) {
    var names = _getModelName(component);

    // 是正常状态还是 liteFlux的
    var isLiteFlux = names.split('|');
    if (isLiteFlux.length && isLiteFlux.length > 1) {
      var pathArr = isLiteFlux[1].split('\.');
      var items = S(isLiteFlux[0]);
    } else {
      var pathArr = names.split('\.');
      var items = component.state || component.props;
    }

    pathArr.map(function (k) {
      items = items[k];
    });

    return items.slice();
  }

  function _extend(dst, src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }

    return dst;
  }

  /**
   * Simple and easy mixin-wrapper for rubaxa/Sortable library, in order to
   * make reorderable drag-and-drop lists on modern browsers and touch devices.
   *
   * @mixin
   */
  var SortableMixin = {
    sortableMixinVersion: '0.1.0',

    /**
     * @type {Sortable}
     * @private
     */
    _sortableInstance: null,

    componentDidMount: function () {
      var options = _extend(_extend({}, _defaultOptions), this.sortableOptions || {}),
        copyOptions = _extend({}, options),

        emitEvent = function ( /** string */ type, /** Event */ evt) {
          var method = this[options[type]];
          method && method.call(this, evt, this._sortableInstance);
        }.bind(this);

      // Bind callbacks so that "this" refers to the component
      'onStart onEnd onAdd onSort onUpdate onRemove onFilter'.split(' ').forEach(function ( /** string */ name) {
        copyOptions[name] = function (evt) {
          if (name === 'onStart') {
            _nextSibling = evt.item.nextElementSibling;
            _activeComponent = this;
          } else if (name === 'onAdd' || name === 'onUpdate') {
            evt.from.insertBefore(evt.item, _nextSibling);

            var newState = {},
              remoteState = {},
              oldIndex = evt.oldIndex,
              newIndex = evt.newIndex,
              items = _getModelItems(this),
              remoteItems,
              item;

            if (name === 'onAdd') {
              remoteItems = _getModelItems(_activeComponent);
              item = remoteItems.splice(oldIndex, 1)[0];
              items.splice(newIndex, 0, item);

              remoteState[_getModelName(_activeComponent)] = remoteItems;
            } else {
              items.splice(newIndex, 0, items.splice(oldIndex, 1)[0]);
            }

            // 是正常状态还是 liteFlux的
            var names = _getModelName(this);
            var isLiteFlux = names.split('|');
            if (isLiteFlux.length && isLiteFlux[1]) {
              var pathArr = isLiteFlux[1].split('\.');
              var store = S(isLiteFlux[0]);
              var _store = store;

              for (var k in pathArr) {
                if (k == pathArr.length - 1) {
                  _store[pathArr[k]] = items;
                } else {
                  _store[pathArr[k]] = _store[pathArr[k]] || {};
                }
                _store = _store[pathArr[k]];
              }

              S(isLiteFlux[0], store);
            } else {

              var pathArr = names.split('\.');
              var _newState = newState;

              for (var k in pathArr) {
                if (k == pathArr.length - 1) {
                  _newState[pathArr[k]] = items;
                } else {
                  _newState[pathArr[k]] = _newState[pathArr[k]] || {};
                }
                _newState = _newState[pathArr[k]];
              }

              this.setState(newState);
              (this !== _activeComponent) && _activeComponent.setState(remoteState);
            }

          }

          setTimeout(function () {
            emitEvent(name, evt);
          }, 0);
        }.bind(this);
      }, this);

      /** @namespace this.refs — http://facebook.github.io/react/docs/more-about-refs.html */
      this._sortableInstance = Sortable.create(this.refs[options.ref] || this, copyOptions);
    },

    componentWillReceiveProps: function (nextProps) {
      var newState = {},
        modelName = _getModelName(this),
        items = nextProps[modelName];

      if (items) {

        // 是正常状态还是 liteFlux的
        var names = _getModelName(this);
        var isLiteFlux = names.split('|');

        if (isLiteFlux.length && isLiteFlux[1]) {
          var pathArr = isLiteFlux[1].split('\.');
          var store = S(isLiteFlux[0]);
          var _store = store;

          for (var k in pathArr) {
            if (k == pathArr.length - 1) {
              _store[pathArr[k]] = items;
            } else {
              _store[pathArr[k]] = _store[pathArr[k]] || {};
            }
            _store = _store[pathArr[k]];
          }

          S(isLiteFlux[0], store);
        } else if (_activeComponent && typeof remoteState !== "undefined") {
          // 融合了上传组件的弹窗之后，如果未触发排序的情况下_activeComponent为空值，
          // 关闭弹窗会触发componentWillReceiveProps，这时_activeComponent.setState就会报错

          var pathArr = names.split('\.');
          var _newState = newState;

          for (var k in pathArr) {
            if (k == pathArr.length - 1) {
              _newState[pathArr[k]] = items;
            } else {
              _newState[pathArr[k]] = _newState[pathArr[k]] || {};
            }
            _newState = _newState[pathArr[k]];
          }

          this.setState(newState);
          (this !== _activeComponent) && _activeComponent.setState(remoteState);
        }

      }
    },

    componentWillUnmount: function () {
      this._sortableInstance.destroy();
      this._sortableInstance = null;
    }
  };

  // Export
  return SortableMixin;
});

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Базовый класс всех дверей
 * @class DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */

var DoorBase = function () {
  function DoorBase(number, onUnlock) {
    var _this = this;

    _classCallCheck(this, DoorBase);

    this.number = number;
    this.onUnclockCallback = onUnlock;

    this.level = $('.level_' + number);
    this.door = $('.door_level_' + number);
    this.popup = $('.popup_level_' + number);
    this.close = this.popup.find('.popup__close');

    this.isLocked = true;
    this.isDisabled = this.door.hasClass('door_disabled');
    var onDoorClick = function onDoorClick() {
      if (!_this.isDisabled) {
        _this.openPopup();
      }
    };
    var onCloseClick = function onCloseClick() {
      _this.closePopup();
    };
    this.door.on('click', onDoorClick.bind(this));
    this.close.on('click', onCloseClick.bind(this));
  }

  _createClass(DoorBase, [{
    key: 'openPopup',
    value: function openPopup() {
      this.popup.removeClass('popup_hidden');
    }
  }, {
    key: 'closePopup',
    value: function closePopup() {
      this.popup.addClass('popup_hidden');
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.door.removeClass('door_disabled');
      this.isDisabled = false;
    }
    /**
     * Вызывается, если после последовательности действий
     * дверь считается открытой
     */

  }, {
    key: 'unlock',
    value: function unlock() {
      this.door.removeClass('door_locked');
      this.isLocked = false;
      this.closePopup();
      this.onUnclockCallback();
      this.showCongratulations();
    }
  }, {
    key: 'showCongratulations',
    value: function showCongratulations() {
      alert('Дверь ' + this.number + ' открыта!');
    }
  }]);

  return DoorBase;
}();
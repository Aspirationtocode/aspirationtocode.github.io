/**
 * Базовый класс всех дверей
 * @class DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
class DoorBase {
  constructor(number, onUnlock) {
    this.number = number;
    this.onUnclockCallback = onUnlock;

    this.level = $('.level_' + number);
    this.door = $('.door_level_' + number);
    this.popup = $('.popup_level_' + number);
    this.close = this.popup.find('.popup__close');

    this.isLocked = true;
    this.isDisabled = this.door.hasClass('door_disabled');
    var onDoorClick = () => {
      if (!this.isDisabled) {
        this.openPopup();
      }
    }
    var onCloseClick = () => {
      this.closePopup();
    }
    this.door.on('click', onDoorClick.bind(this));
    this.close.on('click', onCloseClick.bind(this));
      
  }
  openPopup() {
    this.popup.removeClass('popup_hidden');
  }
  closePopup() {
    this.popup.addClass('popup_hidden');
  }
  enable() {
    this.door.removeClass('door_disabled');
    this.isDisabled = false;
  }
  /**
   * Вызывается, если после последовательности действий
   * дверь считается открытой
   */
  unlock() {
    this.door.removeClass('door_locked');
    this.isLocked = false;
    this.closePopup();
    this.onUnclockCallback();
    this.showCongratulations();
  }
  showCongratulations() {
    setTimeout(() => {
      alert('Дверь ' + this.number + ' открыта!')
    }, 100)  
  }
}



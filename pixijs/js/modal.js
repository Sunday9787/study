/*
 * @Author: Edward
 * @Date: 2018-03-04 01:24:19
 * @Last modified by:
 * @Email: 809537981@qq.com
 * @Last modified time: 2018-03-09T13:17:10+08:00
 */

// 模态框

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // amd | cmd 模块
    define(factory());
  } else if (typeof exports === 'object') {
    // Node, CommonJS之类的
    module.exports = factory();
  } else {
    // 浏览器全局变量(root 即 window)
    root.modal = factory();
  }
})(this, function () {
  'use strict';
  function Modal(options) {
    this.type = options.type || 1;
    this.title = options.title;
    this.content = options.content;
    this.btn = options.btn;
    this.success = (typeof options.success == 'function' ? options.success : undefined);
    this.cancel = (typeof options.cancel == 'function' ? options.cancel : undefined);
    this.init();
  }

  Modal.prototype.init = function () {
    this.modalOverlay = this.creatModalOverlay();
    this.modal = this.creatModal();
    var closeBtn = this.modal.querySelector('.modal-close');
    this.bindEvent.close.call(this, closeBtn, this.modal, this.modalOverlay);
    this.success ? this.success.call(this, this.modal) : void (0);
  }

  Modal.prototype.creatModalOverlay = function () {

    if (document.querySelector('.modal-overlay')) {
      var el = document.querySelector('.modal-overlay');
      setTimeout(function () {
        el.classList.add('modal-overlay-visible');
      }, 50);
      el.onclick = null;
      return el;
    }

    var modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    document.body.appendChild(modalOverlay);
    var el = document.querySelector('.modal-overlay');
    setTimeout(function () {
      el.classList.add('modal-overlay-visible');
    }, 50);
    return el;
  }

  Modal.prototype.creatModal = function () {
    var frame = document.createDocumentFragment();
    var modal = document.createElement('div');
    modal.className = 'modal';
    var temlplate = '<div class="modal-head">' +
      '<div class="modal-title">' + this.title + '</div>' +
      '<a href="javascript:;" class="iconfont icon-close modal-close"></a>' +
      '</div>' +
      '<div class="modal-content" style="padding-bottom: ' + (this.type ? '.40625rem' : '') + '">' + this.content + '</div>' +
      (this.btn ? '<div class="modal-footer"></div>' : '');
    modal.innerHTML = temlplate;
    frame.appendChild(modal);
    document.body.appendChild(frame);
    var el = document.querySelector('.modal');
    el.style.marginTop = (-el.offsetHeight / 2) + 'px';
    setTimeout(function () {
      el.classList.add('modal-in');
    }, 20);
    return el;
  }

  Modal.prototype.close = function () {
    // 异步执行动画
    setTimeout(function () {
      this.modal.classList.add('modal-out');
      this.modalOverlay.classList.remove('modal-overlay-visible');
    }.bind(this), 0);
    setTimeout(function () {
      this.modal.style.display = 'none';
      this.modal.remove();
    }.bind(this), 400);
  }

  Modal.prototype.bindEvent = {
    closeEvent: function () {
      this.close();
      this.cancel ? this.cancel(this.modal) : void (0);
    },
    close: function (close, modal, modalOverlay) {
      modalOverlay.onclick = this.bindEvent.closeEvent.bind(this);
      close.addEventListener('click', this.bindEvent.closeEvent.bind(this), false);
    }
  }

  /* alert */
  function alert(title, content, callback) {
    this.title = title;
    this.content = content;
    this.callback = callback;
    this.init();
  }

  alert.prototype.init = function () {
    this.modalOverlay = this.creatModalOverlay();
    this.modal = this.creatModal();
    this.yes();
  }

  alert.prototype.creatModal = function () {
    var frame = document.createDocumentFragment();
    var modal = document.createElement('div');
    modal.className = 'modal';
    var temlplate = '<div class="modal-head">' +
      '<div class="modal-title">' + this.title + '</div>' +
      '<a href="javascript:;" class="iconfont icon-close modal-close"></a>' +
      '</div>' +
      '<div class="modal-content">' + this.content + '</div>' +
      '<div class="modal-footer"><a href="javascript:;" class="btn btn-full">确定</div>';
    modal.innerHTML = temlplate;
    frame.appendChild(modal);
    document.body.appendChild(frame);
    modal.style.marginTop = (-modal.offsetHeight / 2) + 'px';
    setTimeout(function () {
      modal.classList.add('modal-in');
    }, 20);
    return modal;
  }

  alert.prototype.creatModalOverlay = function () {
    if (document.querySelector('.modal-overlay')) {
      var modalOverlay = document.querySelector('.modal-overlay');
      setTimeout(function () {
        modalOverlay.classList.add('modal-overlay-visible');
      }, 50);
      modalOverlay.onclick = null;
      return modalOverlay;
    }

    var modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    document.body.appendChild(modalOverlay);

    setTimeout(function () {
      modalOverlay.classList.add('modal-overlay-visible');
    }, 50);
    return modalOverlay;
  }

  alert.prototype.close = function () {
    // 异步执行动画
    setTimeout(function () {
      this.modal.classList.add('modal-out');
      this.modalOverlay.classList.remove('modal-overlay-visible');
    }.bind(this), 0);
    setTimeout(function () {
      this.modal.style.display = 'none';
      this.modal.remove();
    }.bind(this), 400);
  }

  alert.prototype.yes = function () {
    var modalFooter = this.modal.querySelector('.modal-footer');
    var yes = modalFooter.querySelector('.btn');
    yes.addEventListener('click', function () {
      this.close();
      this.callback ? this.callback() : void (0);
    }.bind(this), false);
  }

  function toast(content, options, callback) {
    var options = options || {};
    this.content = content;
    this.position = options.center || 'center';
    this.time = options.time || 1500;
    this.callback = callback;
    this.init();
  }

  toast.prototype.init = function () {
    this.modal = this.createModal();
  }

  toast.prototype.close = function () {
    // 异步执行动画
    this.modal.classList.remove('modal-in');
    setTimeout(function () {
      this.modal.remove();
    }.bind(this), 450);
  }

  toast.prototype.createModal = function () {
    var modal = document.createElement('div');
    modal.className = 'toast ' + 'toast-' + this.position;
    modal.innerHTML = '<div class="toast-content">' + this.content + '</div>';
    document.body.appendChild(modal);

    setTimeout(function () {
      modal.classList.add('modal-in');
    }, 50);

    setTimeout(function () {
      this.close();
      this.callback ? this.callback() : void (0);
    }.bind(this), this.time);
    return modal;
  }

  // 弹出层
  function pupup(options) {
    this.content = options.content;
    this.success = options.success;
    this.skin = options.skin;
    this.position = options.position || 'center';
    this.mask = options.mask || false;
    this.init();
  }

  pupup.prototype.init = function () {
    this.modal = this.createPupup();
    this.modalOverlay = this.mask ? this.creatModalOverlay() : null;
  }

  pupup.prototype.close = function () {
    // 异步执行动画
    setTimeout(function () {
      this.modal.classList.remove('pupup-in');
      this.modalOverlay.classList.remove('modal-overlay-visible');
    }.bind(this), 0);
    setTimeout(function () {
      this.modal.style.display = 'none';
      this.modal.remove();
    }.bind(this), 400);
  }

  pupup.prototype.creatModalOverlay = Modal.prototype.creatModalOverlay;

  pupup.prototype.createPupup = function () {
    var position = 'slideInDown';
    var pupup = document.createElement('div');
    var pupupContent = document.createElement('div');
    pupup.className = 'pupup';
    pupupContent.className = 'pupup-content';
    pupupContent.innerHTML = this.content;
    pupup.appendChild(pupupContent);
    if (typeof this.skin === 'string' && this.skin !== '') pupup.classList.add(this.skin);
    document.body.appendChild(pupup);
    setTimeout(function () {
      pupup.classList.add('pupup-in');
      pupupContent.classList.add('slideInDown');
    }.bind(this), 0);
    console.log(typeof this.success);
    if (typeof this.success === 'function') this.success.call(this, pupup);
    return pupup;
  }

  return {
    modal: function (options) {
      return new Modal(options);
    },
    alert: function (title, content, callback) {
      return new alert(title, content, callback);
    },
    toast: function (content, options, callback) {
      return new toast(content, options, callback);
    },
    pupup: function (options) {
      return new pupup(options);
    }
  };
});

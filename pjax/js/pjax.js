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
  if (history.pushState) history.replaceState({ title: document.title, url: document.URL }, null, document.URL);

  function pjax(url, replaceState) {
    $.get(url, function (str) {
      var $page = $(str);
      var title = $page.filter('title').text();
      var $content = $page.find('#container').html();
      console.log($content);
      document.title = title;
      $('#container').html($content);
      history[replaceState ? 'replaceState' : 'pushState']({
        title: title,
        url: url
      }, null, url);
      NProgress.done();
    });
  }
  // 处理前进 后退
  $(window).on('popstate', function (e) {
    var state = history.state;
    console.log(state);
    pjax(state.url, true);
  });
  $(document).on('click', 'a[data-pjax]', function (e) {
    if (!history.pushState) {
      return;
    }

    NProgress.inc();
    var url = this.href;
    // console.log(this);
    // if (!/^\/($|(\w+\/)+)/.test(href)) { // 非相对路径退出操作
    //   return true;
    // }
    pjax(url);
    e.preventDefault();
  });
})
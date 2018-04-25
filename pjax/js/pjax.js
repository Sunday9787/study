define(['jquery', 'nprogress'], function ($, nprogress) {
  'use strict';
  var pjax = function () {
    if (history.pushState) history.replaceState({
      title: document.title,
      url: document.URL
    }, null, document.URL);
  
    function ajax(url, replaceState) {
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
        nprogress.done();
      });
    }
    // 处理前进 后退
    $(window).on('popstate', function (e) {
      var state = history.state;
      console.log(state);
      ajax(state.url, true);
    });
    $(document).on('click', 'a[data-pjax]', function (e) {
      if (!history.pushState) {
        return;
      }
  
      nprogress.inc();
      var url = this.href;
      // console.log(this);
      // if (!/^\/($|(\w+\/)+)/.test(href)) { // 非相对路径退出操作
      //   return true;
      // }
      ajax(url);
      e.preventDefault();
    });
  }
  return pjax;
})
/*
 * @Author: Edward
 * @Date: 2017-12-05 16:39:48
 * @Last Modified by: Edward
 * @Email by:  809537981@qq.com
 * @Last Modified time: 2017-12-05 17:18:08
 *
 * 简易loading加载模效果
 */

/**
 *
 *
 * @export
 * @param {any} elment
 * @param {number} [speed=200]
 * @param {string} [Text=['加载中', '加载中.', '加载中..', '加载中...']]
 * @returns {object}
 */

export function loadingText(elment, speed = 200, Text = ['加载中', '加载中.', '加载中..', '加载中...']) {
  const nowText = elment.innerText;
  let i = 0;
  const num = Text.length;
  if (num < 1) return false;
  return {
    runTime: setInterval(() => {
      elment.innerText = Text[(i += 1) % num];
    }, speed),
    clearTime() {
      clearInterval(this.runTime);
      elment.innerText = nowText;
    },
  };
}

export default {};

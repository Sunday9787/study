/*
 * @Author: Edward
 * @Date: 2017-12-11 23:23:14
 * @Last Modified by: Edward
 * @Email: 809537981@qq.com
 * @Last Modified time: 2017-12-18 22:44:11
 */

import WebUploader from '../../static/lib/webuploader/webuploader.min';

class Uploader {
  constructor({
    WebUploadId,
    baseUrl,
    uploadUrl,
    upload,
    stopUpload,
    picke,
    button,
    maxFileLength,
    thumbnailSize,
    maxSize,
    fileName,
    success,
    error,
    formData,
    accetp,
    duplicate,
  }) {
    /**
     * @param  {String} [必选] 上传容器 ID
     * @param {String} [必选] WebUpload基本url
     * @param {String} [必选] 服务器地址
     * @param {String} [必选] 上传按钮 ID
     * @param {String} [必选] 取消上传按钮 ID
     * @param {String} [必选] 文件选择按钮 ID
     * @param {Object} [必选] 多个选择按钮 ID
     * @param {String} [必选] 上传最大文件长度
     * @param {String} [可选] [默认值: 100] 图片缩略图大小 一般定死100
     * @param {String} [必选] 单个文件最大大小 mb
     * @param {Boolean} 是否显示文件名
     * @param {Function} 传完成回调
     * @param {Function} 上传失败
     * @param {Object} [可选] [默认值：{}] 文件上传请求的参数表，每次发送都会发送此对象中的参数
     * @param {String} [可选] [默认值：image] 上传的文件类型
     * @param {Boolean} [可选] [默认值：true] 去重 根据文件名字、文件大小和最后修改时间来生成hash Key
     */

    this.WebUploadId = WebUploadId;

    this.baseUrl = baseUrl;

    this.serverUrl = uploadUrl;

    this.upload = upload;

    this.stopUpload = stopUpload;

    this.picke = picke;

    this.addButton = button;

    this.maxFileLength = maxFileLength;

    this.thumbnailSize = thumbnailSize || 100;

    this.maxSizeMb = maxSize;

    this.maxSize = (1024 ** 2) * maxSize;

    this.fileName = fileName;

    this.success = success;

    this.error = error;

    this.formData = formData;

    this.accept = accetp || 'images';

    this.duplicate = duplicate || true;

    this.init();
  }

  init() {
    this.webuploader = this.create();
    this.bindEvent();
  }

  create() {
    const accept = {
      images: {
        title: 'Images',
        extensions: 'gif,jpg,jpeg,bmp,png',
        mimeTypes: 'image/jpg,image/jpeg,image/gif,image/bmp,image/png',
      },
      video: {
        title: 'video',
        extensions: 'mp4,webm,ogg',
        mimeTypes: 'video/mp4,video/webm,video/ogg',
      },
      audio: {
        title: 'audio',
        extensions: 'mp3',
        mimeTypes: 'audio/mpeg',
      },
      xls: {
        title: 'excel',
        extensions: 'xls',
        mimeTypes: 'application/vnd.ms-excel',
      },
    };

    const upload = WebUploader.create({
      // swf文件路径
      swf: `${this.baseUrl}webuploader/Uploader.swf`,
      // 文件接收服务端。
      server: this.serverUrl,
      // 选择文件的按钮。可选。
      // 内部根据当前运行是创建，可能是input元素，也可能是flash.
      pick: this.picke,

      // 指定监听paste事件的容器，如果不指定，不启用此功能。此功能为通过粘贴来添加截屏的图片
      paste: document.body,
      // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
      resize: false,

      duplicate: true,
      // 只允许选择图片文件。
      accept: accept[this.accept],
      formData: this.formData,
    });
    return upload;
  }

  bindEvent() {
    const that = this;
    const webuploader = this.webuploader;

    // 当有文件添加进来的时候
    webuploader.on('fileQueued', (file) => {
      if (webuploader.getFiles('inited').length > that.maxFileLength) {
        alert(`最多添加${that.maxFileLength}张`);
        return;
      }

      if (!/^(jpg||gif||bmp||png)$/.test(file.ext)) {
        alert('请选择图片类型文件');
        return;
      }

      if (file.size > that.maxSize) {
        alert(`文件大小超过${that.maxSizeMb}mb`);
        return;
      }
      const $li = $(
        `<li id="${file.id}" class="file-item thumbnail">
          <span class="icon hidden"><a class="remove-this" href="javascript:;">&#xe611;</a></span>
          <img>
          <p class="state to-hd">${file.name}</p>
        </li>`,
      );
      const $img = $li.find('img');
      // $list为容器jQuery实例
      $(that.WebUploadId).append($li);

      // 创建 缩略图
      webuploader.makeThumb(file, (error, src) => {
        if (error) {
          $img.replaceWith('<span class="cl-rd">不能预览</span>');
          return;
        }
        $img.attr('src', src);
      }, that.thumbnailSize, that.thumbnailSize);

      // 删除上传文件队列
      /* eslint-disable */
      // 删除按钮交互 使用箭头函数会导致 this 指向改变 this 应该为元素
      $li.on('click', '.remove-this', function () {
        webuploader.removeFile(file, true);
        $(this).parents('.file-item').remove();
      });
    });

    // 提交上传
    $(that.upload).on('click', () => {
      if (!WebUploader.Uploader.support()) {
        alert('Web Uploader 不支持您的浏览器！如果你使用的是IE浏览器，请尝试升级 flash 播放器');
        throw new Error('WebUploader does not support the browser you are using.');
      }
      webuploader.upload();
    });

    // 取消上传
    $(that.stopUpload).on('click', () => {
      webuploader.stop();
      webuploader.reset();
      $(that.WebUploadId).empty();
    });

    // 文件上传成功
    webuploader.on('uploadSuccess', (file, response) => {
      $(`#${file.id}`).find('p.state').text('上传成功！');
      if (that.success instanceof Function) {
        that.success(response);
        return;
      }
      throw new Error('success is not a function');
    });

    // 文件上传失败，显示上传出错
    webuploader.on('uploadError', (file, reason) => {
      $(`#${file.id}`).find('p.state').text('上传出错!');
      if (that.error instanceof Function) {
        that.error(reason);
        return;
      }
      throw new Error('error is not a function');
    });

    /* eslint-disable */
    // 删除按钮交互 使用箭头函数会导致 this 指向为父级this 应该为元素
    $(that.WebUploadId).on(
      {
        mouseover: function () {
          $(this).find('.icon').removeClass('hidden');
        },
        mouseout: function () {
          $(this).find('.icon').addClass('hidden');
        },
      },
      '.file-item',
    );
  }
}

export default Uploader;

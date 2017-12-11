/*
 * @Author: Edward
 * @Date: 2017-12-11 23:23:14
 * @Last Modified by: Edward
 * @Email: 809537981@qq.com
 * @Last Modified time: 2017-12-12 00:11:07
 */

// eslint-disable-next-line
class Uploader {
  constructor(options) {
    this.WebUploadId = options.WebUploadId;

    // 基本url
    this.baseUrl = options.base_url;

    // 服务器地址
    this.serverUrl = options.uploadUrl;

    // 上传按钮 ID
    this.upload = options.upload;

    // 取消上传按钮 ID
    this.stopUpload = options.stopUpload;

    // 文件选择按钮 ID
    this.picke = options.picke;

    // 最大文件长度
    this.maxFileLength = options.maxFileLength;

    // 图片缩略图大小
    this.thumbnailSize = options.thumbnailSize;

    // 文件最大大小 mb
    this.maxSize = (options.maxSize ** 1024);

    // 上传完成
    this.success = options.success;

    // 上传失败
    this.error = options.error;

    // formData {Object} [可选] [默认值：{}] 文件上传请求的参数表，每次发送都会发送此对象中的参数
    this.formData = options.formData;
  }

  init() {
    this.webuploader = this.create();
    this.bindEvent();
  }

  create() {
    const upload = WebUploader.create({
      // swf文件路径
      swf: `${this.baseUrl}webuploader/Uploader.swf`,
      // 文件接收服务端。
      server: this.serverUrl,
      // 选择文件的按钮。可选。
      // 内部根据当前运行是创建，可能是input元素，也可能是flash.
      pick: this.picke,
      // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
      resize: false,
      // 只允许选择图片文件。
      accept: {
        title: 'Images',
        extensions: 'gif,jpg,jpeg,bmp,png',
        mimeTypes: 'image/jpg,image/jpeg,image/gif,image/bmp,image/png',
      },
      formData: this.formData,
    });
    return upload;
  }

  bindEvent() {
    const that = this;
    const webuploader = this.webuploader;

    // 当有文件添加进来的时候
    webuploader.on('fileQueued', (file) => {
      if (webuploader.getFiles().length > that.maxFileLength) {
        alert(`最多添加${that.maxFileLength}张`);
        return;
      }

      if (!/^(jpg||gif||bmp||png)$/.test(file.ext)) {
        alert('请选择图片类型文件');
        return;
      }

      if (file.size > that.maxSize) {
        alert(`文件大小超过${that.maxSize}mb`);
        return;
      }
      const $li = $(
          `<li id="${file.id}" class="file-item thumbnail">
              <span class="icon hidden"><a class="remove-this" href="javascript:;">&#xe611;</a></span>' +
              <img>
              <p class="state to-hd">${file.name}</p>
            </li>`,
        );
      const $img = $li.find('img');
      // $list为容器jQuery实例
      $(that.WebUploadId).append($li);

      // 创建 缩略图
      webuploader.makeThumb(
        file,
        (error, src) => {
          if (error) {
            $img.replaceWith('<span class="cl-rd">不能预览</span>');
            return;
          }
          $img.attr('src', src);
        },
        that.thumbnailSize,
        that.thumbnailSize,
      );

      // 删除上传文件队列
      $li.on('click', '.remove-this', () => {
        webuploader.removeFile(file, true);
        $(this).parents('.file-item').remove();
      });
    });

    // 提交上传
    $(that.webuploader).on('click', () => {
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

    // 删除按钮交互
    $(that.WebUploadId).on(
      {
        mouseover: () => {
          $(this).find('.icon').removeClass('hidden');
        },
        mouseout: () => {
          $(this).find('.icon').addClass('hidden');
        },
      },
      '.file-item',
    );
  }
}

export default Uploader;

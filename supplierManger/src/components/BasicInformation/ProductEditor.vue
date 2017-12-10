<template>
  <div class="layui-row">
      <h2><p>商品管理</p></h2>
      <section class="layui-row">
          <div class="layui-tab layui-tab-brief" lay-filter="">
            <ul class="layui-tab-title product-editor-menu">
              <li class="item layui-this"><a href="javascript:;"><span class="icon-round">&#xe61c;</span>封面图片</a></li>
              <li class="item"><a class="wrong" href="javascript:;"><span class="icon-round">&#xe61c;</span>通用信息</a></li>
              <li class="item"><a class="wrong" href="javascript:;"><span class="icon-round">&#xe61c;</span>编辑推荐</a></li>
              <li class="item"><a class="wrong" href="javascript:;"><span class="icon-round">&#xe61c;</span>内容简介</a></li>
              <li class="item"><a class="wrong" href="javascript:;"><span class="icon-round">&#xe61c;</span>作者推荐</a></li>
              <li class="item"><a class="wrong" href="javascript:;"><span class="icon-round">&#xe61c;</span>精彩书评</a></li>
              <li class="item"><a class="wrong" href="javascript:;"><span class="icon-round">&#xe61c;</span>目录</a></li>
              <li class="item"><a class="wrong" href="javascript:;"><span class="icon-round">&#xe61c;</span>精彩书摘</a></li>
              <li class="item"><a class="wrong" href="javascript:;"><span class="icon-round">&#xe61c;</span>前言/序言</a></li>
              <li class="item"><a class="wrong" href="javascript:;"><span class="icon-round">&#xe61c;</span>商品详情图</a></li>
              <li class="item"><a class="wrong" href="javascript:;"><span class="icon-round">&#xe61c;</span>产品特色</a></li>
            </ul>
            <ul class="layui-tab-content mt-30">
              <li class="layui-tab-item layui-show">
                <div class="bd-1-e8 pd-1016">
                  <h5>
                    封面图片（第一张图片为封面立体图，最多添加五张）
                    <label class="btn" id="picke_cover">选择文件</label>
                  </h5>
                  <!--用来存放文件信息-->
                  <ul id="cover_pic" class="uploader-list mt-10 webuploader clearfix"></ul>
                </div>
                <p>
                  <a href="javascript:;" id="upload_cover" class="btn">保存</a>
                  <a href="javascript:;" id="stop_cover" class="btn">取消</a>
                </p>
              </li>
              <li class="layui-tab-item">
                <form class="product-editor-form" action="javascript:;" method="post">
                  <table class="lh-30" width="100%">
                    <tbody>
                      <tr>
                        <td>
                          <div class="editer-name-input wd-90 ta-rt fl">
                            <label>商品名称：</label>
                            <span class="icon-round">&#xe61c;</span>
                          </div>
                          <input class="fl editor-input" type="text" name="" value="">
                          <div class="clear"></div>
                        </td>
                        <td>
                          <div class="editer-name-input wd-90 ta-rt fl">
                            <label>副标题：</label>
                          </div>
                          <input class="fl editor-input" type="text" name="" value="">
                          <div class="clear"></div>
                        </td>
                        <td>
                          <div class="editer-name-input wd-90 ta-rt fl">
                            <label>丛书名：</label>
                          </div>
                          <input class="fl editor-input" type="text" name="" value="">
                          <div class="clear"></div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="editer-name-input wd-90 ta-rt fl">
                            <label>定价：</label>
                            <span class="icon-round">&#xe61c;</span>
                          </div>
                          <input class="fl editor-input" type="text" name="" value="">
                          <div class="clear"></div>
                        </td>
                        <td>
                          <div class="editer-name-input wd-90 ta-rt fl">
                            <label>ISBN：</label>
                            <span class="icon-round">&#xe61c;</span>
                          </div>
                          <input class="fl editor-input" type="text" name="" value="">
                          <div class="clear"></div>
                        </td>
                        <td>
                          <div class="editer-name-input wd-90 ta-rt fl">
                            <label>作者：</label>
                            <span class="icon-round">&#xe61c;</span>
                          </div>
                          <input class="fl editor-input" type="text" name="" value="">
                          <div class="clear"></div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="editer-name-input wd-90 ta-rt fl">
                            <label>出版社：</label>
                            <span class="icon-round">&#xe61c;</span>
                          </div>
                          <input class="fl editor-input" type="text" name="" value="">
                          <div class="clear"></div>
                        </td>
                        <td>
                          <div class="editer-name-input wd-90 ta-rt fl">
                            <label>版次：</label>
                          </div>
                          <input class="fl editor-input" type="text" name="" value="">
                          <div class="clear"></div>
                        </td>
                        <td>
                          <div class="editer-name-input wd-90 ta-rt fl">
                            <label>印次：</label>
                          </div>
                          <input class="fl editor-input" type="text" name="" value="">
                          <div class="clear"></div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="editer-name-input wd-90 ta-rt fl">
                            <label>出版时间：</label>
                          </div>
                          <input class="fl editor-input" type="text" name="" value="">
                          <div class="clear"></div>
                        </td>
                        <td>
                          <div class="editer-name-input wd-90 ta-rt fl">
                            <label>印刷时间：</label>
                          </div>
                          <input class="fl editor-input" type="text" name="" value="">
                          <div class="clear"></div>
                        </td>
                        <td>
                          <div class="editer-name-input wd-90 ta-rt fl">
                            <label>开本：</label>
                          </div>
                          <input class="fl editor-input" type="text" name="" value="">
                          <div class="clear"></div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="editer-name-input wd-90 ta-rt fl">
                            <label>页数：</label>
                          </div>
                          <input class="fl editor-input" type="text" name="" placeholder="0.00" value="">
                          <div class="clear"></div>
                        </td>
                        <td>
                          <div class="editer-name-input wd-90 ta-rt fl">
                            <label>包装：</label>
                          </div>
                          <input class="fl editor-input" type="text" name="" placeholder="0.00" value="">
                          <div class="clear"></div>
                        </td>
                        <td>
                          <div class="editer-name-input wd-90 ta-rt fl">
                            <label>套装数量：</label>
                          </div>
                          <input class="fl editor-input" type="text" name="" placeholder="0.00" value="">
                          <div class="clear"></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
                <p><a href="javascript:;" class="btn">保存</a><a href="javascript:;" class="btn muted">取消</a></p>
              </li>
              <li class="layui-tab-item">
                <form class="product-editor-form" action="javascript:;">
                  <textarea class="editor-textarea wd-70p fl mr-10" rows="20"></textarea>
                  <p class="cl-rd oh">填写的内容不要包含"最"等敏感词</p>
                  <div class="clear"></div>
                </form>
                <p>
                  <a href="javascript:;" id="upload" class="btn">保存</a>
                  <a href="javascript:;" id="stopupload" class="btn">取消</a>
                </p>
              </li>
              <li class="layui-tab-item">
                <form class="product-editor-form" action="javascript:;">
                  <textarea class="editor-textarea wd-70p fl mr-10" rows="20"></textarea>
                  <p class="cl-rd oh">填写的内容不要包含"最"等敏感词</p>
                  <div class="clear"></div>
                </form>
                <p>
                  <a href="javascript:;" id="upload" class="btn">保存</a>
                  <a href="javascript:;" id="stopupload" class="btn">取消</a>
                </p>
              </li>
              <li class="layui-tab-item">
                <form class="product-editor-form" action="javascript:;">
                  <textarea class="editor-textarea wd-70p fl mr-10" rows="20"></textarea>
                  <p class="cl-rd oh">填写的内容不要包含"最"等敏感词</p>
                  <div class="clear"></div>
                </form>
                <p>
                  <a href="javascript:;" id="upload" class="btn">保存</a>
                  <a href="javascript:;" id="stopupload" class="btn">取消</a>
                </p>
              </li>
              <li class="layui-tab-item">
                <form class="product-editor-form" action="javascript:;">
                  <textarea class="editor-textarea wd-70p fl mr-10" rows="20"></textarea>
                  <p class="cl-rd oh">填写的内容不要包含"最"等敏感词</p>
                  <div class="clear"></div>
                </form>
                <p>
                  <a href="javascript:;" id="upload" class="btn">保存</a>
                  <a href="javascript:;" id="stopupload" class="btn">取消</a>
                </p>
              </li>
              <li class="layui-tab-item">
                <form class="product-editor-form" action="javascript:;">
                  <textarea class="editor-textarea wd-70p fl mr-10" rows="20"></textarea>
                  <p class="cl-rd oh">填写的内容不要包含"最"等敏感词</p>
                  <div class="clear"></div>
                </form>
                <p>
                  <a href="javascript:;" id="upload" class="btn">保存</a>
                  <a href="javascript:;" id="stopupload" class="btn">取消</a>
                </p>
              </li>
              <li class="layui-tab-item">
                <form class="product-editor-form" action="javascript:;">
                  <textarea class="editor-textarea wd-70p fl mr-10" rows="20"></textarea>
                  <p class="cl-rd oh">填写的内容不要包含"最"等敏感词</p>
                  <div class="clear"></div>
                </form>
                <p>
                  <a href="javascript:;" id="upload" class="btn">保存</a>
                  <a href="javascript:;" id="stopupload" class="btn">取消</a>
                </p>
              </li>
              <li class="layui-tab-item">
                <form class="product-editor-form" action="javascript:;">
                  <textarea class="editor-textarea wd-70p fl mr-10" rows="20"></textarea>
                  <p class="cl-rd oh">填写的内容不要包含"最"等敏感词</p>
                  <div class="clear"></div>
                </form>
                <p>
                  <a href="javascript:;" id="upload" class="btn">保存</a>
                  <a href="javascript:;" id="stopupload" class="btn">取消</a>
                </p>
              </li>
              <li class="layui-tab-item">
                <div class="bd-1-e8 pd-1016">
                  <h5>
                    详情图片<small>（为了更好的展示商品，建议您添加详情图片）</small>
                    <label class="btn" id="proddets_picke">选择文件</label>
                  </h5>
                  <p class="cl-rd">宽790*高（不限），大小不超过2mb</p>
                  <p class="cl-rd">主要的页面逻辑：先展示书的卖点信息，其次商品的基本信息，再次精彩内文详情</p>
                  <!--用来存放文件信息-->
                  <ul id="proddets_pic" class="uploader-list webuploader mt-10 clearfix"></ul>
                </div>
                <p>
                  <a href="javascript:;" id="proddets_upload" class="btn">保存</a>
                  <a href="javascript:;" id="proddets_stop" class="btn">取消</a>
                </p>
              </li>
              <li class="layui-tab-item">
                <form class="product-editor-form" action="javascript:;">
                  <textarea class="editor-textarea wd-70p fl mr-10" rows="20"></textarea>
                  <p class="cl-rd oh">填写的内容不要包含"最"等敏感词</p>
                  <div class="clear"></div>
                </form>
                <p>
                  <a href="javascript:;" id="upload" class="btn">保存</a>
                  <a href="javascript:;" id="stopupload" class="btn">取消</a>
                </p>
              </li>
            </ul>
          </div>
      </section>
  </div>
</template>

<script>
export default {
  name: 'ProductEditor',
  mounted() {
    layui.use('element', () => {
      // eslint-disable-next-line
      const element = layui.element;
    });
  },
};

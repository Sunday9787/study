<template>
  <div class="layui-row">
    <h2><p>订单复核</p></h2>
    <section class="layui-row">
      <form action="javascript:;" class="layui-form">
        <div class="layui-form-item">
          <div class="layui-col-sm5 layui-col-md4">
            <label class="layui-form-label" for="boxNum">输入箱号：</label>
            <div class="layui-input-block">
              <input type="text" name="box" required lay-verify="required" placeholder="请输入标题" autocomplete="off" id="boxNum" class="layui-input">
            </div>
          </div>
          <div class="layui-col-sm-offset1 layui-col-sm3 layui-col-md2">
            <a href="javascript:;" class="layui-btn">确认</a>
            <a href="javascript:;" class="layui-btn">添加打包人</a>
          </div>
          <div class="layui-col-sm-offset1 layui-col-sm2 layui-col-md1 layui-col-md-offset4">
            <a href="javascript:;" class="layui-btn">复核完成</a>
          </div>
        </div>
      </form>
    </section>
    <section>
      <h4>未复核列表</h4>
      <div class="layui-row">
        <table class="layui-table">
          <thead>
            <tr>
              <th>序号</th>
              <th>书号/条码</th>
              <th>定价</th>
              <th>订单号</th>
              <th>未复核数</th>
              <th>已复核数</th>
              <th>分拣时间</th>
              <th>运单号</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1456987</td>
              <td>23.00</td>
              <td>12345677</td>
              <td>23</td>
              <td>999</td>
              <td><time>2017.07.26  11:30</time></td>
              <td>12312345678</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1456987</td>
              <td>23.00</td>
              <td>12345677</td>
              <td>23</td>
              <td>999</td>
              <td><time>2017.07.26  11:30</time></td>
              <td>12312345678</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1456987</td>
              <td>23.00</td>
              <td>12345677</td>
              <td>23</td>
              <td>999</td>
              <td><time>2017.07.26  11:30</time></td>
              <td>12312345678</td>
            </tr>
          </tbody>
        </table>
        <p style="text-align: center;"><a class="layui-btn layui-btn-small" href="javascript:;">显示更多数据</a></p>
      </div>
      <div class="layui-row">
        <table class="layui-table">
          <thead>
            <tr>
              <th>序号</th>
              <th>书号/条码</th>
              <th>定价</th>
              <th>订单号</th>
              <th>未复核数</th>
              <th>已复核数</th>
              <th>分拣时间</th>
              <th>运单号</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1456987</td>
              <td>23.00</td>
              <td>12345677</td>
              <td>23</td>
              <td>999</td>
              <td><time>2017.07.26  11:30</time></td>
              <td>12312345678</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1456987</td>
              <td>23.00</td>
              <td>12345677</td>
              <td>23</td>
              <td>999</td>
              <td><time>2017.07.26  11:30</time></td>
              <td>12312345678</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1456987</td>
              <td>23.00</td>
              <td>12345677</td>
              <td>23</td>
              <td>999</td>
              <td><time>2017.07.26  11:30</time></td>
              <td>12312345678</td>
            </tr>
          </tbody>
        </table>
        <p style="text-align: center;"><a class="layui-btn layui-btn-small" href="javascript:;">显示更多数据</a></p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'order-01',
};
</script>

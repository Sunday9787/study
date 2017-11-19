<template>
  <div class="layui-row">
    <h2><p>订单复核</p></h2>
    <section class="layui-row">
      <form action="javascript:;" class="layui-form">
        <div class="layui-form-item">
          <div class="layui-col-sm5 layui-col-md4">
            <label class="layui-form-label" for="boxNum">输入箱号：</label>
            <div class="layui-input-block">
              <input class="layui-input" v-model="PickBox" id="boxNum" type="text" name="box" required lay-verify="required" placeholder="箱号" autocomplete="off">
            </div>
          </div>
          <div class="layui-col-sm-offset1 layui-col-sm3 layui-col-md2">
            <a href="javascript:;" v-on:click="addPickBox" class="layui-btn">确认</a>
            <a href="javascript:;" v-on:click="addPickUser" class="layui-btn">添加打包人</a>
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
        <ul>
          <li v-for="value in $store.getters.getAddPickingUser">{{value.name}}</li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'order-01',
  data() {
    return {
      PickBox: '',
    };
  },
  computed: {
    clearPickUser() {
      this.PickBox = '';
    },
  },
  methods: {
    addPickBox() {
      this.$store.commit('addPickBox', this.PickBox);
    },
    addPickUser() {
      const that = this;
      layui.use('layer', () => {
        const layer = layui.layer;
        layer.open({
          type: 1,
          area: ['400px', '300px'],
          shadeClose: true,
          btn: ['确定'],
          content: `
            <div style="padding: 20px;">
              <form class="layui-form">
                <div class="layui-form-item">
                  <label class="layui-form-label">添加打包人:</label>
                  <div class="layui-input-block">
                    <input class="layui-input" type="text" name="modelAddPickUser" placeholder="请输入姓名或工号" lay-verify="required" autocomplete="off">
                  </div>
                </div>
                <div class="layui-form-item">
                  <label class="layui-form-label">添加打包人:</label>
                  <div class="layui-input-block">
                    <input class="layui-input" type="text" name="modelAddPickUser" placeholder="请输入姓名或工号" autocomplete="off">
                  </div>
                </div>
              </form>
            </div>
          `,
          yes(index, layero) {
            const els = layero[0].querySelectorAll('[name="modelAddPickUser"]');
            [...els].forEach((el) => {
              that.$store.commit('addPickingUser', el.value);
            });
            layer.close(index);
          },
        });
      });
      // this.$store.state.orderPicking.boxPickingUser.user.push({
      //   name: this.PickUser,
      //   boxNumber: [{ number: '', checked: false }],
      // });
      // this.PickUser = '';
    },
  },
};
</script>

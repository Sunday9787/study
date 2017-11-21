<template>
  <div class="layui-row">
    <h2><p>订单复核</p></h2>
    <section class="layui-row">
      <form action="javascript:;" class="layui-form">
        <div class="layui-form-item">
          <div class="layui-col-sm5 layui-col-md4">
            <label class="layui-form-label" for="boxNum">输入箱号：</label>
            <div class="layui-input-block">
              <input class="layui-input" v-model.trim="PickBox" id="boxNum" type="text" name="box" required lay-verify="required" placeholder="箱号" autocomplete="off">
            </div>
          </div>
          <div class="layui-col-sm-offset1 layui-col-sm4 layui-col-md3">
            <a href="javascript:;" v-on:click="addPickBox" class="layui-btn">确认</a>
            <a href="javascript:;" v-on:click="addPickUser" class="layui-btn">添加打包人</a>
            <a href="javascript:;"v-on:click="editPickUser" class="layui-btn">修改打包人</a>
          </div>
          <div class="layui-col-sm-offset1 layui-col-sm2 layui-col-md1 layui-col-md-offset3">
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
        <ul v-if="getAddPickingUser.length > 0">
          <li v-for="(value, index) in getAddPickingUser" v-bind:key="value.name">
            <p>索引:{{index}}  打包人:{{value.name}} 打包：箱号<span v-for="(num, index) in value.boxNumber" v-bind:key="num.number">{{num.number}},</span></p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'order-01',
  data() {
    return {
      PickBox: null,
    };
  },
  computed: {
    ...mapGetters({
      getAddPickingUser: 'orderPickinggetAddPickingUser',
    }),
  },
  methods: {
    ...mapMutations({
      addUser: 'orderPickingaddPickingUser',
      addsPickBox: 'orderPickingaddPickBox',
      editsPickUser: 'orderPickingeditPickUser',
    }),
    clearPick() {
      this.PickBox = '';
    },
    addPickBox() {
      this.addsPickBox(this.PickBox);
      console.log(this.getAddPickingUser);
      this.clearPick();
    },
    addPickUser() {
      const that = this;
      layui.use('layer', () => {
        const layer = layui.layer;
        layer.open({
          type: 1,
          shadeClose: true,
          btn: ['确定'],
          content: `
            <div style="padding: 20px;">
              <form class="layui-form">
                <div class="layui-form-item">
                  <label class="layui-form-label">添加打包人:</label>
                  <div class="layui-input-block">
                    <input class="layui-input" type="text" name="modelAddPickUser1" placeholder="请输入姓名或工号" lay-verify="required" autocomplete="off">
                  </div>
                </div>
                <div class="layui-form-item">
                  <label class="layui-form-label">添加打包人:</label>
                  <div class="layui-input-block">
                    <input class="layui-input" type="text" name="modelAddPickUser2" placeholder="请输入姓名或工号" autocomplete="off">
                  </div>
                </div>
              </form>
            </div>
          `,
          yes(index, layero) {
            const els = layero[0].querySelectorAll('[name^="modelAddPickUser"]');
            [...els].forEach((el) => {
              if (el.value !== '') {
                that.addUser({ id: el.name, name: el.value });
              }
            });
            layer.close(index);
          },
        });
      });
    },
    editPickUser() {
      const that = this;
      layui.use('layer', () => {
        const layer = layui.layer;
        console.table(that.getAddPickingUser);
        if (!that.getAddPickingUser[0]) {
          layer.msg('未添加任何打包人', {
            icon: 8,
            time: 2000,
          });
          return false;
        }

        layer.open({
          type: 1,
          shadeClose: true,
          btn: ['确定'],
          content: `
            <div style="padding: 20px;">
              <form class="layui-form">
                <div class="layui-form-item">
                  <label class="layui-form-label">打包人1:</label>
                  <div class="layui-input-block">
                    <input class="layui-input" type="text" name="modelAddPickUser1" value="${(that.getAddPickingUser[0].name)}" placeholder="请输入姓名或工号修改" lay-verify="required" autocomplete="off">
                  </div>
                </div>
                <div class="layui-form-item">
                  <label class="layui-form-label">打包人2:</label>
                  <div class="layui-input-block">
                    <input class="layui-input" type="text" name="modelAddPickUser2" value="${(that.getAddPickingUser[1].name)}" placeholder="请输入姓名或工号修改" autocomplete="off">
                  </div>
                </div>
              </form>
            </div>
          `,
          yes(index, layero) {
            const els = layero[0].querySelectorAll('[name^="modelAddPickUser"]');
            [...els].forEach((el) => {
              that.editsPickUser({ id: el.name, name: el.value });
            });
            layer.close(index);
          },
        });
        return false;
      });
    },
  },
};
</script>

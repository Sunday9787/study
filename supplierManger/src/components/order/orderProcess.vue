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
          <div class="layui-col-md-offset1 layui-col-md4">
            <a href="javascript:;" v-on:click="addPickBox" class="layui-btn">确认</a>
            <a href="javascript:;" v-on:click="addPickUser" class="layui-btn">添加打包人</a>
            <a href="javascript:;"v-on:click="editPickUser" class="layui-btn">修改打包人</a>
            <a href="javascript:;"v-on:click="clearPickUser" class="layui-btn">清空打包人</a>
          </div>
          <div class="layui-col-md-offset2 layui-col-md1">
            <a href="javascript:;" class="layui-btn">复核完成</a>
          </div>
        </div>
      </form>
    </section>
    <section>
      <h4>已复核列表</h4>
      <div class="layui-row">
        <table id="CheckedTable" class="layui-table" lay-skin="line">
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
            <tr v-if="packCheck.data.state !== 200">
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td><time>&nbsp;</time></td>
              <td>&nbsp;</td>
            </tr>
            <tr v-else v-for="(value, index) in packCheck.data.pakNum" v-bind:key="value.Barcode">
              <td>{{(index+1)}}</td>
              <td>{{value.Barcode}}</td>
              <td>{{value.Checked}}</td>
              <td>{{value.Pricing}}</td>
              <td>{{value.notChecked}}</td>
              <td>{{value.orderNumber}}</td>
              <td><time>{{value.SortingTime}}</time></td>
              <td>{{value.waybillNumber}}</td>
            </tr>
          </tbody>
        </table>
        <p style="text-align: center;"><a class="layui-btn layui-btn-small" v-on:click="moreChecked" href="javascript:;">显示更多数据</a></p>
      </div>
      <h4>未复核列表</h4>
      <div class="layui-row">
        <table id="unCheckedTable" class="layui-table" lay-skin="line">
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
            <tr v-if="packunCheck.data.state !== 200">
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td><time>&nbsp;</time></td>
              <td>&nbsp;</td>
            </tr>
            <tr v-else v-for="(value, index) in packunCheck.data.pakNum" v-bind:key="value.Barcode">
              <td>{{(index+1)}}</td>
              <td>{{value.Barcode}}</td>
              <td>{{value.Checked}}</td>
              <td>{{value.Pricing}}</td>
              <td>{{value.notChecked}}</td>
              <td>{{value.orderNumber}}</td>
              <td><time>{{value.SortingTime}}</time></td>
              <td>{{value.waybillNumber}}</td>
            </tr>
          </tbody>
        </table>
        <h2>打包人</h2>
        <table class="layui-table" lay-size="sm">
          <thead>
            <tr>
              <th>序号</th>
              <th>打包人</th>
              <th>打包箱号</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="getAddPickingUser.length < 1">
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr v-else v-for="(value, index) in getAddPickingUser" v-bind:key="value.name">
              <td>{{index}}</td>
              <td>{{value.name}}</td>
              <td v-for="(num, index) in value.boxNumber" v-bind:key="num.number">{{num.number}}</td>
            </tr>
          </tbody>
        </table>
        <p style="text-align: center;"><a class="layui-btn layui-btn-small" v-on:click="moreunChecked" href="javascript:;">显示更多数据</a></p>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'order-01',
  data() {
    return {
      PickBox: null,
      packCheck: {
        data: {
          state: 404,
        },
      },
      packunCheck: {
        data: {
          state: 404,
        },
      },
    };
  },
  created() {
    this.axios.get('/api/packBox.php?packBox=大师兄').then((response) => {
      console.log(response.data);
    });
    // 已复核
    this.axios.get('/api/packCheck.php?check=true').then((response) => {
      this.packCheck = response.data;
    });
    // 未复核
    this.axios.get('/api/packCheck.php?check=false').then((response) => {
      this.packunCheck = response.data;
    });
  },
  computed: {
    ...mapGetters('orderPickingModules', {
      getAddPickingUser: 'orderPickinggetAddPickingUser',
    }),
    hasPickingUser() {
      if (this.getAddPickingUser.length > 0) {
        return true;
      }
      return false;
    },
  },
  methods: {
    ...mapMutations('orderPickingModules', {
      addUser: 'orderPickingaddPickingUser',
      addsPickBox: 'orderPickingaddPickBox',
      editsPickUser: 'orderPickingeditPickUser',
    }),
    ...mapActions('orderPickingModules', {
      clearsPickUser: 'clearPickUser',
    }),
    clearPickUser() {
      this.clearsPickUser();
      layui.use('layer', () => {
        const layer = layui.layer;
        layer.msg('清空完毕', {
          icon: 1,
        });
      });
    },
    clearPick() {
      this.PickBox = '';
    },
    addPickBox() {
      console.log(typeof this.hasPickingUser);
      if (!this.hasPickingUser) {
        layui.use('layer', () => {
          const layer = layui.layer;
          layer.msg('请先添加打包人', {
            icon: 1,
          });
        });
        return;
      }
      this.addsPickBox(this.PickBox);
      console.log(this.getAddPickingUser);
      this.clearPick();
    },
    addPickUser() {
      const that = this;
      layui.use('layer', () => {
        const layer = layui.layer;
        let PickingUser = 2;
        layer.open({
          type: 1,
          title: '添加打包人',
          shadeClose: true,
          btn: ['增加打包人', '确定'],
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
            const form = layero[0].querySelector('.layui-form');
            const htmlTempalte = document.createElement('div');
            htmlTempalte.className = 'layui-form-item';
            htmlTempalte.innerHTML = `<label class="layui-form-label">添加打包人:</label>
              <div class="layui-input-block">
                <input class="layui-input" type="text" name="modelAddPickUser${PickingUser += 1}" placeholder="请输入姓名或工号" autocomplete="off">
              </div>`;
            form.appendChild(htmlTempalte);
            // console.log(this, layero[0].querySelector('.layui-form'));
          },
          btn2(index, layero) {
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
        let PickingUser = that.getAddPickingUser.length;
        console.table(that.getAddPickingUser);
        if (that.getAddPickingUser.length === 0) {
          layer.msg('未添加任何打包人', {
            icon: 8,
            time: 2000,
          });
          return false;
        }

        let template = '';
        that.getAddPickingUser.forEach((value, index) => {
          template += `<div class="layui-form-item">
            <label class="layui-form-label">打包人${(index + 1)}:</label>
            <div class="layui-input-block">
              <input class="layui-input" type="text" name="${value.userID}" value="${value.name}" placeholder="请输入姓名或工号修改" lay-verify="required" autocomplete="off">
            </div>
          </div>`;
        });

        layer.open({
          type: 1,
          title: '修改打包人',
          shadeClose: true,
          btn: ['增加打包人', '确定'],
          content: `<div style="padding: 20px;"><form class="layui-form">${template}</form></div>`,
          yes(index, layero) {
            const form = layero[0].querySelector('.layui-form');
            const htmlTempalte = document.createElement('div');
            htmlTempalte.className = 'layui-form-item';
            htmlTempalte.innerHTML = `<label class="layui-form-label">打包人${(PickingUser += 1)}:</label>
              <div class="layui-input-block">
                <input class="layui-input" type="text" name="modelAddPickUser${(PickingUser)}" placeholder="请输入姓名或工号" autocomplete="off">
              </div>`;
            form.appendChild(htmlTempalte);
          },
          btn2(index, layero) {
            const els = layero[0].querySelectorAll('[name^="modelAddPickUser"]');
            const user = [];
            console.log(els);
            [...els].forEach((el) => {
              if (el.value) {
                user.push({ id: el.name, name: el.value });
              }
            });
            that.editsPickUser(user);
            layer.close(index);
          },
        });
        return false;
      });
    },
    moreChecked() {
      // 已复核
      this.axios.get('/api/packCheck.php?check=true').then((response) => {
        const table = document.querySelector('#CheckedTable');
        const CheckedTableTemplate = document.createDocumentFragment();
        response.data.data.pakNum.forEach((value, index) => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <tr>
              <td>${(index + 1)}</td>
              <td>${value.Barcode}</td>
              <td>${value.Checked}</td>
              <td>${value.Pricing}</td>
              <td>${value.notChecked}</td>
              <td>${value.orderNumber}</td>
              <td><time>${value.SortingTime}</time></td>
              <td>${value.waybillNumber}</td>
            <tr>
          `;
          CheckedTableTemplate.appendChild(tr);
        });
        table.tBodies[0].appendChild(CheckedTableTemplate);
      });
    },
    moreunChecked() {
      // 未复核
      this.axios.get('/api/packCheck.php?check=false').then((response) => {
        const table = document.querySelector('#unCheckedTable');
        const CheckedTableTemplate = document.createDocumentFragment();
        response.data.data.pakNum.forEach((value, index) => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <tr>
              <td>${(index + 1)}</td>
              <td>${value.Barcode}</td>
              <td>${value.Checked}</td>
              <td>${value.Pricing}</td>
              <td>${value.notChecked}</td>
              <td>${value.orderNumber}</td>
              <td><time>${value.SortingTime}</time></td>
              <td>${value.waybillNumber}</td>
            <tr>
          `;
          CheckedTableTemplate.appendChild(tr);
        });
        table.tBodies[0].appendChild(CheckedTableTemplate);
      });
    },
  },
};
</script>

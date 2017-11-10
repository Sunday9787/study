<template>
  <div class="layui-layout layui-layout-admin">
    <header-main></header-main>
    <sidebar-left></sidebar-left>
    <main-content></main-content>
    <div class="layui-footer">© layui.com - 底部固定区域</div>
  </div>
</template>
<script>
import headerMain from './components/header';
import sidebarLeft from './components/sidebar-left';
import mainContent from './components/main-content';

export default {
  name: 'index',
  components: {
    headerMain,
    sidebarLeft,
    mainContent,
  },
};

layui.use(['element'], () => {
  /* eslint-disable */
  let element = layui.element;
});

</script>

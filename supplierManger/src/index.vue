<template>
  <div class="layui-fluid">
    <header-main></header-main>
    <div class="layui-row">
      <div class="layui-col-md2">
        <sidebar-left></sidebar-left>
      </div>
      <div class="layui-col-md10">
        <main-content></main-content>
      </div>
    </div>
  </div>
</template>
<script>
import headerMain from './components/header-2';
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
</script>

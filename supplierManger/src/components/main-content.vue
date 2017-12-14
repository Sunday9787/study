<template>
  <div class="layui-body" style="margin: 0 15px;">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'maincontent',
};
</script>

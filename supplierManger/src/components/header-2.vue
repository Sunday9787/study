<template>
  <header class="layui-header">
    <div class="layui-logo">仓储管理系统</div>
    <nav class="layui-bg-black">
      <ul class="layui-nav layui-layout-left">
          <li class="layui-nav-item"><a href="javascript:;">订单管理</a></li>
          <li class="layui-nav-item"><a href="javascript:;">仓库管理</a></li>
          <li class="layui-nav-item"><a href="javascript:;">统计报表</a></li>
          <li class="layui-nav-item"><a href="javascript:;">基本信息</a></li>
          <span class="layui-nav-bar"></span>
      </ul>
      <ul class="layui-nav layui-layout-right">          
          <li class="layui-nav-item">
            <a href="javascript:;">博库网络</a>
            <dl class="layui-nav-child layui-anim layui-anim-upbit">
              <dl><a href="javascript:;">基本资料</a></dl>
              <dl><a href="javascript:;">安全设置</a></dl>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href="javascriipt:;">退出</a>
          </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'header-2',
};
</script>

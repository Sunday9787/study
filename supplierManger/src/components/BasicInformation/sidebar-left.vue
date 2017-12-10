<template>
<div class="layui-side layui-bg-black">
  <div class="layui-side-scroll">
    <ul class="layui-nav layui-nav-tree" lay-filter="test">
      <li class="layui-nav-item">
        <a href="javascript:;">账户管理<span class="layui-nav-more"></span></a>
        <dl class="layui-nav-child">
          <dd><a href="javascript:;">列表一</a></dd>
          <dd><a href="javascript:;">列表二</a></dd>
          <dd><a href="javascript:;">列表三</a></dd>
        </dl>
      </li>
      <li class="layui-nav-item">
        <a href="javascsript:;">商品分类<span class="layui-nav-more"></span></a>
        <dl class="layui-nav-child">
          <dd><a href="javascript:;">列表一</a></dd>
          <dd><a href="javascript:;">列表二</a></dd>
          <dd><a href="javascript:;">列表三</a></dd>
        </dl>
      </li>
      <li class="layui-nav-item">
        <a href="javascsript:;">仓库架位<span class="layui-nav-more"></span></a>
        <dl class="layui-nav-child">
          <dd><a href="javascript:;">列表一</a></dd>
          <dd><a href="javascript:;">列表二</a></dd>
          <dd><a href="javascript:;">列表三</a></dd>
        </dl>
      </li>
      <li class="layui-nav-item">
        <a href="javascsript:;">供应商管理<span class="layui-nav-more"></span></a>
        <dl class="layui-nav-child">
          <dd><a href="javascript:;">列表一</a></dd>
          <dd><a href="javascript:;">列表二</a></dd>
          <dd><a href="javascript:;">列表三</a></dd>
        </dl>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
export default {
  name: 'sidebar-left',
};
</script>

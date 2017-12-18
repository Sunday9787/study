<template>
  <router-view></router-view>
</template>

<script>
import jQuery from 'jquery';

window.jQuery = jQuery;
window.$ = jQuery;

export default {
  name: 'BasicInformation',
};
</script>

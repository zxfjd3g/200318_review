<template>
  <div class="com">
    <h2>复习</h2>
    <router-link to="/review/life">生命周期1</router-link>&nbsp;&nbsp;
    <router-link to="/review/life2">生命周期2</router-link>&nbsp;&nbsp;
    <br>
    <br>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Review'
  }
</script>

<style lang="less" scoped>
  .com {
    margin: 10px;
    a {
      font-size: 16px;
      margin-right: 5px;
      &.router-link-active {
        color: red;
      }
    }
  }
</style>
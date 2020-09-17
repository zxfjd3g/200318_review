<template>
  <el-tooltip placement="top">
    <div slot="content">{{title}}</div>
    <el-button v-bind="$attrs" v-on="$listeners"/>
  </el-tooltip>
  <!-- <a href="javascrip:" :title="title">
    <el-button v-bind="$attrs" v-on="$listeners" :title="title"/>
  </a> -->
</template>

<script type="text/ecmascript-6">

  export default {
    props: {
      title: String
    },

    mounted () {
      // console.log('mounted()', this.$attrs)
      // console.log('mounted()', this.$listeners)
    }
  }
</script>
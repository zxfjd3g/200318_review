<template>
  <div>
    <h2>生命周期测试11</h2>
    <p ref="p">{{message}}</p>
    <button @click="message += '--'">更新</button>
    <button @click="$destroy()">销毁</button>

    <br>
    <br>
    <Child :message="message"/>
  </div>
</template>

<script>
  import Child from './Child'
  export default {
    name: 'LifeTest',

    data () {
      return {
        message: 'abc'
      }
    },

    methods: {
      consoleInfo () {
        console.log('message: ' + this.message)
        const p = this.$refs.p
        console.log(p ? p.innerHTML : '不能访问界面')
        console.log('--------------')
      }
    },

    /**
     初始化阶段
     */
    beforeCreate () {
      console.log('beforeCreate')
      // this.consoleInfo()
      // console.log('message: ' + this.message)
      // console.log('--------------')
    },
    created () {
      console.log('created')
      // this.consoleInfo()
    },
    beforeMount () {
      console.log('beforeMount')
      // this.consoleInfo()
    },
    mounted () {
      console.log('mounted')
      // this.consoleInfo()
    },

    /**
    更新阶段
    */
    beforeUpdate () {
      console.log('beforeUpdate')
      // this.consoleInfo()
    },
    updated () {
      console.log('updated')
      // this.consoleInfo()
    },

    /**
    死亡阶段
    */
    beforeDestroy () {
      console.log('beforeDestroy')
      // this.consoleInfo()
    },
    destroyed () {
      console.log('destroyed')
      // this.consoleInfo()
    },

    activated () {
      console.log('activated')
      // this.consoleInfo()
    },

    deactivated () {
      console.log('deactivated')
      // this.consoleInfo()
    },

    errorCaptured (error, child, info) {
      console.log('errorCaptured')
      console.log(error, child, info)
      console.log('--------')
      return false // 不再向上冒泡传递
    },

    components: {
      Child
    }
  }
</script>

<style>

</style>
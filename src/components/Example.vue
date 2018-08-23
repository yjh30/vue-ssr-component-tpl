<template>
  <div>
    <h1>{{msg}}</h1>
    <div class="viewer">
      <myComponentName></myComponentName>
    </div>
  </div>
</template>

<script>
  import myComponentName from '../main/index'

  export default {
    data () {
      return {
        msg: '组件示例'
      }
    },
    components: {
      myComponentName
    }
  }
</script>

<style lang="stylus" scoped>
  h1 {
    color: green;
    font-size: 40px; /*px*/
    width: 750px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    border-bottom: 1px solid gray; /*no*/
  }
  .viewer {
    position: fixed;
    left: 0;
    top: 101px;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>

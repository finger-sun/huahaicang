<template>
  <div id="app">
      <router-view></router-view>

  </div>
</template>

<script>

export default {
    data () {
      return {

    }
  }
}
</script>

<style lang="scss" scoped>
    *{
      margin:0px;
      padding:0px;
    }
    html,body{
      width:100%;
      height:100%;
    }
    #app{
          width:100%;
      height:100%;
    }

</style>

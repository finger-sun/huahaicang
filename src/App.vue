<template>
  <div id="app">
      <router-view></router-view>

      <!-- <ul class="table">
          <router-link tag="li" to="/customer" activeClass="active">客户资料</router-link>
          <router-link tag="li" to="/Spouse" activeClass="active">购物车</router-link>
      </ul> -->
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
      .table{
        background:#000;
        width:100%;
        position:fixed;
        bottom:0px;
        li{
          float:left;
          list-style: none;
          width:10
          0%;
          text-align:center;
          color:white;
          line-height:40px;
        }
      }
    }
    .active{
      background:red;
    }
</style>

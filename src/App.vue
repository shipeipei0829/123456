<template>
  <div id="app">
    <router-view />
    <div class="nav">
      <router-link to="/home" active-class="select">
        <span class="iconfont iconshouye"></span>首页
      </router-link>
      <router-link to="/list" active-class="select">
        <span class="iconfont iconleimupinleifenleileibie"></span>
        分类
      </router-link>
      <router-link to="/shop" active-class="select">
        <span class="iconfont icongouwucheman"></span>购物车
      </router-link>
      <router-link to="/mine" active-class="select">
        <span class="iconfont iconwode"></span>我的
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  padding-bottom: 1rem;
  box-sizing: border-box;
}
.nav {
  display: flex;
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: #f2f2f2;
  border-top: 1px solid #e6e6e6;
}
a {
  flex: 1;
  height: 1rem;
  font-size: 0.16rem;
}
.select {
  color: #f60606;
}
.iconfont {
  margin: 0.2rem 0 .06rem 0;
  display: block;
  font-size: 0.4rem;
}
</style>

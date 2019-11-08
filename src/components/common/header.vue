<template>
  <div class="header">
    <img src="../../assets/image/cha.png" alt class="cc cha" />
    <slot name="slot"></slot>
    <img src="../../assets/image/more.png" alt class="cc more" />
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  position: fixed;
  width: 100%;
  height: 0.86rem;
  line-height: 0.86rem;
  top: 0;
  background: #fafafa;
  font-size: 0.32rem;
}
.cc {
  height: 0.3rem;
  width: 0.3rem;
  vertical-align: middle;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.cha {
  left: .25rem;
}
.more {
  right: .25rem;
}
</style>

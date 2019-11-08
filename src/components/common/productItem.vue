<template>
  <div class="productItem">
    <div class="itemLf">
      <img src="../../assets/image/pro.png" alt class="itemLf_img" />
    </div>
    <div class="itemCt">
      <h3 class="itemCt_tit">贡品皇宫孤品红茶</h3>
      <p class="itemCt_msg">前年手艺传承2019新品</p>
      <p class="itemCt_msg">纯手工制作</p>
      <div class="itemCt_prc">
        <img src="../../assets/image/rmb.png" class="itemCt_img" />599元
      </div>
    </div>
    <div class="itemRt">
      <img src="../../assets/image/sp1.png" alt class="itemRt_img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "productItem",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productItem {
  width: 5.38rem;
  height: 2.4rem;
  display: flex;
  border-bottom: 1px solid #aaaaaa;
  margin: 0 0.14rem 0 0.38rem;
}
.itemLf {
  width: 1.4rem;
  height: 100%;
  text-align: left;
}
.itemLf_img {
  width: 90%;
  height: 90%;
  margin-left: -0.1rem;
  padding-top: 0.2rem;
}
.itemCt {
  width: 3.04rem;
  height: 100%;
  padding: 0.4rem 0 0.65rem 0;
  box-sizing: border-box;
  text-align: left;
}
.itemRt {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.itemRt_img {
  width: 0.57rem;
  height: 0.57rem;
  vertical-align: middle;
}
.itemCt_tit {
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.28rem;
  color: #545454;
  letter-spacing: 0.04rem;
  font-weight: 400;
}
.itemCt_msg {
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.18rem;
  color: #b6b6b6;
}
.itemCt_prc {
  color: #343434;
  font-size: 0.2rem;
  font-weight: 400;
  height: 0.5rem;
  line-height: 0.5rem;
}
.itemCt_img {
  width: 0.25rem;
  height: 0.25rem;
  vertical-align: middle;
}
</style>

<template>
  <div class="list">
    <!-- 头部 -->
    <Headers>
      <div slot="slot">上品好茶</div>
    </Headers>
    <!-- list -->
    <div class="content">
      <!-- 搜索框 -->
      <div class="search">
        <input type="text" placeholder="单击此处输入您想要的" />
        <img src="../../assets/image/search.png" alt class="searchImg" />
      </div>
      <div class="product">
        <!-- 导航 -->
        <van-sidebar v-model="activeKey" @change="toggle(activeKey)">
          <van-sidebar-item title="热卖" />
          <van-sidebar-item title="精品" />
          <van-sidebar-item title="套装" />
          <van-sidebar-item title="白茶" />
          <van-sidebar-item title="红茶" />
          <van-sidebar-item title="绿茶" />
          <van-sidebar-item title="其他" />
        </van-sidebar>
        <!-- 列表 -->
        <div class="productList_wrap">
          <div class="productList">
            <van-index-bar :index-list="indexList" highlight-color >
              <van-index-anchor index="0">热卖</van-index-anchor>
              <productItem></productItem>
              <productItem></productItem>
              <productItem></productItem>
              <van-index-anchor index="1">精品</van-index-anchor>
              <productItem></productItem>
              <productItem></productItem>
              <productItem></productItem>
              <van-index-anchor index="2">套装</van-index-anchor>
              <productItem></productItem>
              <productItem></productItem>
              <productItem></productItem>
              <van-index-anchor index="3">白茶</van-index-anchor>
              <productItem></productItem>
              <productItem></productItem>
              <productItem></productItem>
              <van-index-anchor index="4">红茶</van-index-anchor>
              <productItem></productItem>
              <productItem></productItem>
              <productItem></productItem>
              <van-index-anchor index="5">绿茶</van-index-anchor>
              <productItem></productItem>
              <productItem></productItem>
              <productItem></productItem>
              <van-index-anchor index="6">其他</van-index-anchor>
              <productItem></productItem>
              <productItem></productItem>
              <productItem></productItem>
            </van-index-bar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Headers from "../common/header";
import productItem from "../common/productItem";
import { Sidebar, SidebarItem } from "vant";
Vue.use(Sidebar);
Vue.use(SidebarItem);
import { Search } from "vant";
Vue.use(Search);
import { IndexBar, IndexAnchor } from "vant";
Vue.use(IndexBar).use(IndexAnchor);
export default {
  name: "list",
  data() {
    return {
      activeKey: 1,
      indexList: [0, 1, 2, 3, 4, 5, 6]
    };
  },
  methods: {
    toggle(index) {
      console.log(index);
    }
  },
  components: {
    Headers,
    productItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  position: fixed;
  top: 0.86rem;
  width: 100%;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.search {
  width: 4.5rem;
  padding: 0 0.32rem;
  box-sizing: border-box;
  height: 0.62rem;
  line-height: 0.62rem;
  border: 0.02rem solid #999999;
  border-radius: 0.31rem;
  margin: 0.08rem auto 0.14rem;
}
.search input {
  font-size: 0.24rem;
  color: #999999;
  width: 3rem;
  height: 0.5rem;
}
.searchImg {
  width: 0.3rem;
  vertical-align: middle;
  padding-left: 0.1rem;
}
/* 导航 */
.product {
  flex: 1;
  display: flex;
}
.van-sidebar {
  background-color: #fafafa;
  height: 100%;
  width: 1.58rem;
  font-size: 0.2rem;
}
.van-sidebar-item {
  font-weight: bold;
  color: #8d8c8c !important;
  height: 0.92rem;
  line-height: 0.92rem;
  padding: 0;
  text-align: right;
}
.list >>> .van-sidebar-item__text {
  width: 1.22rem;
  height: 0.74rem;
  line-height: 0.74rem;
  text-align: center;
}
.list >>> .van-sidebar-item--select {
  color: #080707 !important;
  background: #fff;
  border: none;
}

.list >>> .van-sidebar-item--select .van-sidebar-item__text {
  border-left: 0.12rem solid red;
  margin-left: -0.12rem;
}
/* 商品列表 */
.productList_wrap {
  flex: 1;
  position: relative;
  overflow-y: scroll;
}
.productList_wrap::-webkit-scrollbar {
  display: none;
}
.productList {
  position: absolute;
}
.list >>> .van-index-bar__sidebar {
  display: none;
}
/* .van-index-anchor van-index-anchor--sticky  */
.list >>> .van-hairline--bottom {
  width: 5.4rem;
  left: 1.58rem;
  padding: 0 16px;
}
</style>

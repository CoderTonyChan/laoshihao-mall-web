<template>
  <div>
    <pc-nav/>
    <div class="w">
      <h1 class="title">老师好平台和工具，帮您卖产品、帮您做家教</h1>
    </div>
    <div class="header">
      <div class="w">
        <a class="logo" href="javascript:void(0)" @click.prevent="goHome">老师好商城</a>
        <div class="search-con">
          <input class="search-input" v-model="searchInfo" id="search-input" placeholder="请输入课程名称"/>
          <button class="btn search-btn" @click="goGoodsListPage(searchInfo)" id="search-btn" @keyup.13="goGoodsListPage(searchInfo)"><span class="glyphicon glyphicon glyphicon-search" aria-hidden="true"></span></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import pcNav from 'components/layout/nav';

  export default {
    data() {
      return {
        searchInfo: ''
      };
    },
    components: {
      pcNav
    },
    methods: {
      goGoodsListPage(keyword) {
        let param = {};
        param.keyword = keyword;
        console.info(this.$route);
        if (this.$route.name === 'goods-list') {
          console.info('emit searchProduct');
          this.loadPage('goods-list', param);
          this.$pcBus.$emit('searchProduct');
        } else {
          this.loadPage('goods-list', param);
        }
      }
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss">
.w .title{
  text-align: center;
  color: #409eff;
}
</style>

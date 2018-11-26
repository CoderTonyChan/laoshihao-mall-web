<template>
  <div>
    <div class="w">
      <ul class="keywords-list">
        <li class="keywords-item">
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','2020考研')">2020考研</a>
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','考研集训')">考研集训</a>
        </li>
        <li class="keywords-item">
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','2019考研')">2019考研 </a>
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','考研抢分')">考研抢分</a>
        </li>
        <li class="keywords-item">   
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','托福')">托福</a>
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','SAT')">SAT</a>
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','GRE')">GRE</a>
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','GMAT')">GMAT</a>
        </li>
        <li class="keywords-item"> 
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','雅思留学')">雅思留学</a>
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','雅思移民')">雅思移民</a>
        </li>
        <li class="keywords-item">
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','小学')">小学</a>
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','初中')">初中</a>
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','高中')">高中</a>
        </li>
        <li class="keywords-item"> 
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','英语四级')">英语四级</a>
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','英语六级')">英语六级</a>
        </li>
        <li class="keywords-item">
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','英语能力')">英语能力</a>
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','新概念')">新概念</a>
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','BEC')">BEC</a>
        </li>
        <li class="keywords-item"> 
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','外教口语1对1')">外教口语1对1</a>
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','免费口语测评')">免费口语测评</a>
        </li>
        <li class="keywords-item">
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','日语')">日语</a>
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','韩语')">韩语</a>
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','德语')">德语</a>
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','法语')">法语</a>
        </li>
        <li class="keywords-item"> 
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','多纳英语启蒙')">多纳英语启蒙</a>
          <a class="link" target="_blank" href="javascript:void(0)" @click="goGoodsListPage('','少儿英语外教课')">少儿英语外教课</a>
        </li>
      </ul>
      <div class="banner-con">
        <pc-banner></pc-banner>
        <!--<div class="loading"></div>-->
      </div>
    </div>
    <div class="w">
      <div class="floor-wrap" v-for="(category, index1) in  categoryData" :key="category.categoryId">
        <h1 class="floor-title">{{category.categoryName}}</h1>
        <ul class="floor-list">
          <li class="floor-item" v-for="(item, index2) in  category.categoryList" :key="item.categoryId">
            <a href="javascript:void(0)" @click="goGoodsListPage(item.categoryId)">
              <span class="floor-text">{{item.categoryName}}</span>
              <img class="floor-img" :src="imgUrl" alt/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import pcBanner from 'components/banner';

  export default {
    data() {
      return {
        categoryData: [{
          categoryId: '',
          categoryName: '',
          categoryList: [{
            categoryId: '',
            categoryName: ''
          }]
        }]
      };
    },
    created() {
    },
    activated() {
      this.queryCategoryData((res) => {
        if (res.code === 200) {
          this.categoryData = res.result;
        } else {
          alert('加载主页面失败');
        }
      });
    },
    methods: {
      getImage(index1, index2) {
        return require('../../assets/image/floor/floor' + (index1 + 1) + '-' + (index2 + 1) + '.jpg');
      },
      goGoodsListPage(categoryId, keyword) {
        let param = {};
        param.categoryId = categoryId;
        param.keyword = keyword;
        this.loadPage('goods-list', param);
      },
      queryCategoryData(resolve) {
        this.ajax({
          type: 'GET',
          url: `/uac/auth/category/getProductCategoryDtoByPid/0`,
          success: resolve
        });
      }
    },
    components: {
      pcBanner
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss">
</style>

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
      <div class="floor-wrap" v-for="category in  categoryData" :key="category.categoryId">
        <h1 class="floor-title">{{category.categoryName}}</h1>
        <ul class="floor-list p-course-list ">
          <!-- <li class="floor-item" v-for="item in  category.categoryList" :key="item.categoryId">
            <a href="javascript:void(0)" @click="goGoodsListPage(item.categoryId)">
              <span class="floor-text">{{item.categoryName}}</span>
              <img class="floor-img" :src="imgUrl" alt/>
            </a>
          </li> -->

          <li class="p-item p-r-border p-b-border" v-for="item in category.productTeacherDtoList" :key="item.id">
            <a class="p-link" href="javascript:void(0)" @click="goProductDetailPage(item.id)">
              <p class="p-title"><span class="p-flag">NEW</span>{{item.name}}</p>
              <p class="p-time">课时数：{{item.period}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p-price">价格：{{item.price}}</span></p>
              <ul class="p-teacher-list">
                  <li class="p-teacher-item" v-for="teacher in item.teacherList" :key="teacher.id">
                      <img class="p-teacher-avatar" :src="teacher.avatar">
                      <p class="p-teacher-name">{{teacher.name}}</p>
                  </li>
                </ul>
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
          productTeacherDtoList: [{
            id: '',
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
      goProductDetailPage(productId) {
        this.loadPage('goods-detail', {'productId': productId});
      },
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
          // url: `/uac/auth/category/getProductCategoryDtoByPid/0`,
          url: `/uac/auth/category/getCategoryAndProductDtoByPid/0`,
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

.p-course-list .p-item {
    float: left;
    box-sizing: border-box;
    width: 216px;
    height: 192px;
    border-left: 1px solid #c0c4cc;
    border-top: 1px solid #c0c4cc;
    border-bottom: 1px solid #c0c4cc;
}
.p-course-list .p-item:last-child
{
    border-right: 1px solid #c0c4cc;
}

.p-course-list .p-item .p-title {
    height: 34px;
    font-size: 14px;
    line-height: 16px;
    color: #545e64;
    word-break: break-all;
    overflow: hidden;
}

.p-course-list .p-item .p-title .p-flag {
    display: inline-block;
    padding: 3px;
    margin-right: 5px;
    font-size: 12px;
    line-height: 12px;
    color: #fff;
    border-radius: 3px;
    background-color: #54d2d5;
}

.p-course-list .p-item .p-time {
    height: 32px;
    overflow: hidden;
    margin-top: 6px;
    font-size: 12px;
    line-height: 16px;
    color: #00b2b8;
}
.p-course-list .p-item .p-price {
    color: #29d;
}


.p-course-list .p-item .p-link {
    display: inline-block;
    box-sizing: border-box;
    width: 237px;
    height: 192px;
    padding: 25px 40px 0 25px;
    text-decoration: none;
}
.p-course-list .p-item .p-teacher-list .p-teacher-item:first-child {
    margin-left: 0;
}
.p-course-list .p-item .p-teacher-list .p-teacher-item {
    float: left;
    width: 40px;
    height: 66px;
    margin-left: 10px;
    text-align: center;
    overflow: hidden;
}
.p-course-list .p-item .p-teacher-list .p-teacher-item .p-teacher-avatar {
    display: inline-block;
    width: 38px;
    height: 38px;
    border: 1px solid #f4f4f4;
}
.p-course-list .p-item .p-teacher-list .p-teacher-item .p-teacher-name {
    margin-top: 8px;
    font-size: 12px;
    line-height: 12px;
    color: #828282;
}
</style>

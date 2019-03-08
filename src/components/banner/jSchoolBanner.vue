<template>
  <div class="jSchoolBanner">
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides" :key="slide.title" >
        <img class="banner-img" :src="slide.src" @click="goGoodsListPage('',slide.title)" style="object-fit: cover; height: 180px; width: 150px;">
        <!-- v-lazy 环路空白 待解决 -->
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- <div class="banner-arrow prev">
      <i class="swiper-button-prev"></i>
    </div> -->
    <div class="banner-arrow next">
      <i class="swiper-button-next"></i>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default {
    name: 'banner-swiper',
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 3500,
          initialSlide: 2,
          setWrapperSize: true,
          pagination: '.jSchoolBanner .swiper-pagination',
          paginationClickable: true,
          mousewheelControl: false,
          observeParents: true,
          prevButton: '.jSchoolBanner .swiper-button-prev',
          nextButton: '.jSchoolBanner .swiper-button-next',
          loop: true,
          loopAdditionalSlides: 1
        },
        swiperSlides: [
          {
            src: require('../../assets/image/banner/banner1.jpg'),
            title: '雅思',
            href: 'detail/analysis'
          },
          {
            src: require('../../assets/image/banner/banner2.jpg'),
            title: 'GRE',
            href: 'detail/count'
          },
          {
            src: require('../../assets/image/banner/banner3.jpg'),
            title: '日语',
            href: 'http://xxx.xxx.com'
          },
          {
            src: require('../../assets/image/banner/banner4.jpg'),
            title: '新概念英语',
            href: 'detail/forecast'
          },
          {
            src: require('../../assets/image/banner/banner5.jpg'),
            title: '中小学',
            href: 'detail/forecast'
          }
        ]
      };
    },
    components: {
      swiper,
      swiperSlide
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
    }
  };
</script>
<style>
 .jSchoolBanner .swiper-button-next, 
 .jSchoolBanner .swiper-container-rtl .swiper-button-prev {
   right: -40px;
    background-image: url(http://oss.lshao.cn/images/arrow.png);
  }

  .jSchoolBanner .swiper-button-prev, 
  .jSchoolBanner .swiper-container-rtl .swiper-button-next {
    left: 0px;
    background-image: url(http://oss.lshao.cn/images/Banner_left.png);
  }

  .jSchoolBanner .banner-con .banner-arrow {
    z-index: 2;
  }
  .jSchoolBanner .swiper-pagination-bullet-active {
    opacity: 1;
    background: white;
}

.jSchoolBanner .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 2px;
}
.jSchoolBanner .swiper-button-prev, 
.jSchoolBanner .swiper-button-next {
    width: 26px;
    height: 45px;
    margin-top: -22px;
    background-size: 26px 45px;
}
.jSchoolBanner .swiper-container{
  border-radius: 8px;
}
.jSchoolBanner .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
}
</style>


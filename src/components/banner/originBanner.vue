<template>
    <div class="originBanner">
      <swiper :options="swiperOption">
        
      <swiper-slide v-for="slide in swiperSlides" :key="slide.title" >
        <img class="banner-img" :src="slide.src"> 
        <!-- v-lazy 环路空白 待解决  @click="goGoodsListPage('',slide.title)" -->
      </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
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
          slidesPerView: 8,
          spaceBetween: 2,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
        },
        swiperSlides: [
          {
            src: require('../../assets/image/banner/origin1.png'),
            title: '雅思',
            
          },
          {
            src: require('../../assets/image/banner/origin2.png'),
            title: 'GRE',
            
          },

          {
            src: require('../../assets/image/banner/origin1.png'),
            title: '雅思2',
            
          },
          {
            src: require('../../assets/image/banner/origin2.png'),
            title: 'GRE2',
            
          },

          {
            src: require('../../assets/image/banner/origin1.png'),
            title: '雅思3',
            
          },
          {
            src: require('../../assets/image/banner/origin2.png'),
            title: 'GRE3',
            
          },

          {
            src: require('../../assets/image/banner/origin1.png'),
            title: '雅思8',
            
          },
          {
            src: require('../../assets/image/banner/origin2.png'),
            title: 'GRE4',
            
          },

          {
            src: require('../../assets/image/banner/origin1.png'),
            title: '雅思4',
            
          },
          {
            src: require('../../assets/image/banner/origin2.png'),
            title: 'GRE5',
            
          },

          {
            src: require('../../assets/image/banner/origin1.png'),
            title: '雅思5',
            
          },
          {
            src: require('../../assets/image/banner/origin2.png'),
            title: 'GRE6',
            
          },

          {
            src: require('../../assets/image/banner/origin1.png'),
            title: '雅思6',
            
          },
          {
            src: require('../../assets/image/banner/origin2.png'),
            title: 'GRE7',
            
          },
          {
            src: require('../../assets/image/banner/origin2.png'),
            title: 'GRE8',
            
          },
          {
            src: require('../../assets/image/banner/origin2.png'),
            title: 'GRE9',
            
          },
          {
            src: require('../../assets/image/banner/origin2.png'),
            title: 'GRE10',
            
          },
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
.swiper-container{
  height: 80px;
}
.swiper-button-prev{
  left: 2px;
}
.swiper-button-next{
  right: 4px;
}
.swiper-button-prev, .swiper-button-next{
  top: 59%;
  height: 22px;
}
</style>


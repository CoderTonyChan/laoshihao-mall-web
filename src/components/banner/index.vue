<template>
  <div class="banner">
    <swiper ref="swiper" :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides" :key="slide.title">
        <img
          v-if="!slide.isVideo"
          class="banner-img"
          :src="slide.src"
          style="object-fit: cover; height: 460px; width: 840px;"
          @click="pageClick(slide)"
        >
        <!-- v-lazy 环路空白 待解决 -->
        <!-- 其他设置
              @play="onPlayerPlay($event)"
              @pause="onPlayerPause($event)"
              @statechanged="playerStateChanged($event)"
              @ready="playerReadied"
              ref="videoPlayer"
        -->
        <video-player
          v-if="slide.isVideo"
          class="video-player-box"
          :options="slide.playerOptions"
          :playsinline="true"
          :ref="slide.player"
          @play="onPlayerPlay($event)"
        ></video-player>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="banner-arrow prev">
      <i class="swiper-button-prev"></i>
    </div>
    <div class="banner-arrow next">
      <i class="swiper-button-next"></i>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";

const swiperSlides = [
  {
    src: "https://i.loli.net/2019/04/23/5cbeda1475479.jpg",
    title: "雅思",
    para: {
      teacherId: "630882618623138816"
    }
    // href: 'detail/analysis'
  },
  {
    src:
      "https://lshaomall.oss-cn-shenzhen.aliyuncs.com/website/img/%E7%BD%91%E7%AB%99%E5%B9%BF%E5%91%8A%E5%B0%81%E9%9D%A2%EF%BC%88%E6%9A%91%E5%81%87%EF%BC%89.png",
    title: "GRE",
    id: "620706418936257536",
    para: {
      secondTypeId: "18",
      firstTypeId: "1"
    }
    // href: 'detail/count'
  }
  // {
  //   src: require('../../assets/image/banner/banner3.jpg'),
  //   title: '日语',
  //   id: '620706072587410432'
  //   // href: 'http://xxx.xxx.com'
  // },
  // {
  //   src: require('../../assets/image/banner/banner4.jpg'),
  //   title: '新概念英语',
  //   id: '615795425378573312'
  //   // href: 'detail/forecast'
  // },
  // {
  //   src: require('../../assets/image/banner/banner5.jpg'),
  //   title: '中小学',
  //   id: '621399284889164800'
  //   // href: 'detail/forecast'
  // },
  // {
  //   player:'player1',
  //   isVideo: true,
  //   playerOptions: {
  //     // videojs options //static/images/author.jpg
  //     // autoplay: "muted",
  //     height: "460px",
  //     width: "840px",
  //     muted: false,
  //     playbackRates: [0.7, 1.0, 1.5, 2.0],
  //     sources: [
  //       {
  //         type: "video/mp4",
  //         src: "https://lshao.oss-cn-beijing.aliyuncs.com/lshao2.0.mp4"
  //       }
  //     ],
  //     poster: "http://oss.lshao.cn/images/video1.jpg" // https://s2.ax1x.com/2019/03/07/kxdhrt.jpg
  //   },
  // },
  // {
  //   player:'player2',
  //   isVideo: true,
  //   playerOptions: {
  //     // videojs options //static/images/author.jpg
  //     // autoplay: "muted",
  //     height: "460px",
  //     width: "840px",
  //     muted: false,
  //     playbackRates: [0.7, 1.0, 1.5, 2.0],
  //     sources: [
  //       {
  //         type: "video/mp4",
  //         src: "https://lshao.oss-cn-beijing.aliyuncs.com/Jimmy%E8%AF%BE%E5%A0%82.MP4"
  //       }
  //     ],
  //     poster: "https://i.loli.net/2019/04/23/5cbeda1475479.jpg"
  //   },
  // },
  // {
  //   player:'player3',
  //   isVideo: true,
  //   playerOptions: {
  //     // videojs options //static/images/author.jpg
  //     // autoplay: "muted",
  //     height: "460px",
  //     width: "840px",
  //     muted: false,
  //     playbackRates: [0.7, 1.0, 1.5, 2.0],
  //     sources: [
  //       {
  //         type: "video/mp4",
  //         src: "https://lshao.oss-cn-beijing.aliyuncs.com/Jimmy%E4%BA%92%E5%8A%A8%E8%AF%BE%E5%A0%82.MP4"
  //       }
  //     ],
  //     poster: "http://oss.lshao.cn/images/video3.jpg"
  //   },
  // }
];

export default {
  name: "banner-swiper",
  data() {
    return {
      videos: [
        "https://lshao.oss-cn-beijing.aliyuncs.com/lshao2.0.mp4",
        "https://lshao.oss-cn-beijing.aliyuncs.com/%E8%80%81%E5%B8%88%E5%A5%BD%E6%93%8D%E4%BD%9C%E6%8C%87%E5%8D%975.0%28%E9%AB%98%E6%B8%85%29.mp4",
        "https://lshao.oss-cn-beijing.aliyuncs.com/%E4%BA%92%E5%8A%A8%E8%AF%BE%E5%A0%82.mp4"
      ],
      playerOptions: {
        // videojs options //static/images/author.jpg
        // autoplay: "muted",
        height: "460px",
        width: "840px",
        muted: false,
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src: "https://lshao.oss-cn-beijing.aliyuncs.com/lshao2.0.mp4"
          }
        ],
        poster: "http://lshao.cn/images/mainpage.jpg"
      },
      swiperOption: {
        notNextTick: true,
        autoplay: 3000,
        loop: true,
        initialSlide: 0,
        setWrapperSize: true,
        autoplayDisableOnInteraction: true,
        pagination: ".banner .swiper-pagination",
        paginationClickable: true,
        mousewheelControl: false,
        observeParents: true,
        prevButton: ".banner .swiper-button-prev",
        nextButton: ".banner .swiper-button-next",
        // loop: true,
        loopAdditionalSlides: 1,
        onClick: swiper => { // 箭头函数才是自己
          console.log(this);
          const realIndex = swiper.realIndex;
          const slide = this.swiperSlides[realIndex];
          console.log(slide);
          this.loadPage("goods-list", slide.para);
        }
      },
      swiperSlides: swiperSlides
    };
  },
  components: {
    swiper,
    swiperSlide,
    videoPlayer
  },
  activated() {
    // console.log(this.$refs);
    // console.log(this.swiperSlides);
  },
  created() {
    // console.log(this.$refs);
    // console.log(swiperSlides);
    // this.$refs.swiper.swiperSlides = [];
    // console.log(this.$refs.swiper);
    // const VueSwiper = this.$refs.swiper;
    // const swiper = VueSwiper.swiper;
    // swiper.swiperSlides = swiperSlides;
  },
  methods: {
    pageClick(slide) {
      console.log(`pageClick`);
      this.loadPage("goods-list", slide.para);
    },
    onPlayerPlay(player) {
      console.log("player play! event:", event);
      // console.log(this.$refs);
      // Object.values(this.$refs).forEach(element => {
      //   console.log(videoPlayer);
      // });

      for (const key in this.$refs) {
        console.log(this.$refs);
        if (key.indexOf("swiper") >= 0) {
          const VueSwiper = this.$refs.swiper;
          const swiper = VueSwiper.swiper;
          console.log(swiper);
          swiper.stopAutoplay();
          continue;
        }
        if (this.$refs.hasOwnProperty(key)) {
          const videoPlayer = this.$refs[key];
          // console.log(videoPlayer[0].player);
          const aPlayer = videoPlayer[0].player;
          if (aPlayer === player) {
            continue;
          }
          aPlayer.pause();
        }
      }
      player.play();
    },
    getImage(index1, index2) {
      return require("../../assets/image/floor/floor" +
        (index1 + 1) +
        "-" +
        (index2 + 1) +
        ".jpg");
    },
    goGoodsListPage(categoryId, keyword) {
      let param = {};
      param.categoryId = categoryId;
      param.keyword = keyword;
      this.loadPage("goods-list", param);
    },
    queryCategoryData(resolve) {
      this.ajax({
        type: "GET",
        url: `/uac/auth/category/getProductCategoryDtoByPid/0`,
        success: resolve
      });
    }
  }
};
</script>
<style>
.banner .swiper-button-next,
.banner .swiper-container-rtl .swiper-button-prev {
  right: 0px;
  background-image: url(http://oss.lshao.cn/images/Banner_right.png);
}

.banner .swiper-button-prev,
.banner .swiper-container-rtl .swiper-button-next {
  left: 0px;
  background-image: url(http://oss.lshao.cn/images/Banner_left.png);
}

.banner .banner-con .banner-arrow {
  z-index: 2;
}
.banner .swiper-pagination-bullet-active {
  opacity: 1;
  background: white;
}

.banner .swiper-pagination-fraction,
.banner .swiper-pagination-custom,
.banner .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 30px;
}
.banner .swiper-button-prev,
.banner .swiper-button-next {
  width: 40px;
  height: 96px;
  margin-top: -48px;
  background-size: 40px 96px;
}
</style>


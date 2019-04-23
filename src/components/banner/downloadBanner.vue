<template>
  <div class="downloadBanner">
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides" :key="slide.title">
        <img
          v-if="!slide.isVideo"
          class="banner-img"
          :src="slide.src"
          @click="goGoodsListPage('',slide.title)"
          style="object-fit: cover; height: 460px; width: 840px;"
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
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";


export default {
  name: "downloadBanner",
  data() {
    return {
      swiperOption: {
        initialSlide: 1,
        effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
      },
      swiperSlides: [
        {
          player:'player1',
          isVideo: true,
          playerOptions: {
            // videojs options //static/images/author.jpg
            // autoplay: "muted",
            height: "400px",
            width: "520px",
            muted: false,
            playbackRates: [0.7, 1.0, 1.5, 2.0],
            sources: [
              {
                type: "video/mp4",
                src: "https://lshao.oss-cn-beijing.aliyuncs.com/lshao2.0.mp4"
              }
            ],
            poster: "http://oss.lshao.cn/images/video1.jpg"
          },
        },
        {
          player:'player2',
          isVideo: true,
          playerOptions: {
            // videojs options //static/images/author.jpg
            // autoplay: "muted",
            height: "400px",
            width: "520px",
            muted: false,
            playbackRates: [0.7, 1.0, 1.5, 2.0],
            sources: [
              {
                type: "video/mp4",
                src: "https://lshao.oss-cn-beijing.aliyuncs.com/%E8%80%81%E5%B8%88%E5%A5%BD%E6%93%8D%E4%BD%9C%E6%8C%87%E5%8D%975.0%28%E9%AB%98%E6%B8%85%29.mp4"
              }
            ],
            poster: "http://oss.lshao.cn/images/video2.jpg"
          },
        },{
          player:'player3',
          isVideo: true,
          playerOptions: {
            // videojs options //static/images/author.jpg
            // autoplay: "muted",
            height: "400px",
            width: "520px",
            muted: false,
            playbackRates: [0.7, 1.0, 1.5, 2.0],
            sources: [
              {
                type: "video/mp4",
                // src: "https://lshao.oss-cn-beijing.aliyuncs.com/%E4%BA%92%E5%8A%A8%E8%AF%BE%E5%A0%82.mp4"
                src: "https://lshao.oss-cn-beijing.aliyuncs.com/Jimmy%E4%BA%92%E5%8A%A8%E8%AF%BE%E5%A0%82.MP4"
              }
            ],
            poster: "http://oss.lshao.cn/images/video3.jpg"
          },
        }
      ]
    };
  },
  components: {
    swiper,
    swiperSlide,
    videoPlayer
  },
  methods: {
    onPlayerPlay(player) {
      console.log('player play! event:', event)
      console.log(this.$refs);
      // Object.values(this.$refs).forEach(element => {
      //   console.log(videoPlayer);
      // });
      
      for (const key in this.$refs) {
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
.downloadBanner{
    width: 100%;
    height: 400px,
}
.downloadBanner .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 520px;
    height: 400px;
  }

.downloadBanner .swiper-button-next,
.downloadBanner .swiper-container-rtl .swiper-button-prev {
  right: 0px;
  background-image: url(http://oss.lshao.cn/images/Banner_right.png);
}

.downloadBanner .swiper-button-prev,
.downloadBanner .swiper-container-rtl .swiper-button-next {
  left: 0px;
  background-image: url(http://oss.lshao.cn/images/Banner_left.png);
}

.downloadBanner .downloadBanner-con .downloadBanner-arrow {
  z-index: 2;
}
.downloadBanner .swiper-pagination-bullet-active {
  opacity: 1;
  background: white;
}

.downloadBanner .swiper-pagination-fraction,
.downloadBanner .swiper-pagination-custom,
.downloadBanner .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 30px;
}
.downloadBanner .swiper-button-prev,
.downloadBanner .swiper-button-next {
  width: 40px;
  height: 96px;
  margin-top: -48px;
  background-size: 40px 96px;
}
.video-js .vjs-big-play-button {
    top: 50%;
    left: 50%;
    margin-top: -0.7em;
    margin-left: -1.5em;
}
</style>


<template xmlns="http://www.w3.org/1999/html">
  <div class="page-container w">
    <p v-show="!isShowProduct" class="err-tip">很抱歉，实在找不到您要的商品。</p>
    <div v-show="isShowProduct">
      <div class="intro-wrap">
        <div class="p-img-con">
          <div class="main-img-con">
            <!-- <img class="main-img" v-lazy="mainImage" alt="name"/> -->
            <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname"
                 @play="onPlayerPlay($event)"
                 @pause="onPlayerPause($event)"
                 @ended="onPlayerEnded($event)"
                 @waiting="onPlayerWaiting($event)"
                 @playing="onPlayerPlaying($event)"
                 @timeupdate="onPlayerTimeupdate($event)"
                 @statechanged="playerStateChanged($event)"
                 @ready="playerReadied">
            </video-player>
          </div>
          <!-- <ul class="p-img-list">
            <li class="p-img-item" v-for="url in subImages" :key="url">
              <img @mouseenter="changeMainImg(url)" class="p-img" v-lazy="url"/>
            </li>
          </ul> -->
        </div>
        <div class="p-info-con">
          <h1 class="p-name">{{product.name}}</h1>
          <p class="p-subtitle">{{product.subtitle}}</p>
          <div class="p-info-item p-price-con">
            <span class="label">价格:</span>
            <span class="info">{{product.price | formatMoney}}</span>
          </div>
          <div class="p-info-item">
            <span class="label">库存:</span>
            <span class="info">{{product.stock}}</span>
          </div>
          <div class="p-info-item p-count-con">
            <span class="label">数量:</span>
            <input class="p-count" :value="buyCount" readonly=""/>
            <span class="p-count-btn plus" @click="changeBuyCount('plus')">+</span>
            <span class="p-count-btn minus" @click="changeBuyCount('minus')">-</span>
          </div>
          <div class="p-info-item">
            <a class="btn cart-add" @click="addCart">加入购物车</a>
          </div>
        </div>
      </div>
      <div class="detail-wrap">
        <div class="detail-tab-con">
          <ul class="tab-list">
            <li class="tab-item active">详细描述</li>
          </ul>
        </div>
        <div class="detail-con">
          <div v-html="product.detail"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
// require styles
  import 'video.js/dist/video-js.css';

  import { videoPlayer } from 'vue-video-player';

  export default {
    data() {
      return {
        isShowProduct: true,
        buyCount: 1,
        product: {},
        mainImage: '',
        subImages: [],
        playerOptions: { // videojs options //static/images/author.jpg
          height: '402px',
          width: '420px',
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: 'video/mp4',
            src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
            // src: 'http://www.w3school.com.cn/i/movie.ogg'
          }],
          poster: 'http://file.koolearn.com/2018/1112/20181112113959687.png'
        }
      };
    },
    created() {
    },
    activated() {
      this.loadDetail();
      this.isShowProduct = true;
    },
    mounted() {
      console.log('this is current player instance object', this.player);

      this.playerOptions.sources[0].src = 'http://www.w3school.com.cn/i/movie.ogg';
      this.playerOptions.poster = 'http://file.koolearn.com/2018/1112/20181112113959687.png';
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player;
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player);
        // you can use it to do something...
        // player.[methods]
      },
      addCart() {
        let userCart = {};
        console.info('this.product', this.product);
        let productId = this.product.id;
        this.$store.dispatch('check_product', {productId});
        if (this.$store.getters.getCurIndex !== -1) {
          this.$store.dispatch('plus_count');
        } else {
          userCart.productId = this.product.id;
          userCart.quantity = this.buyCount;
          userCart.productName = this.product.name;
          userCart.productPrice = this.product.price;
          userCart.mainImage = this.product.mainImage;
          userCart.checked = 1;
          this.$store.dispatch('push_cart', {userCart});
        }
        this.loadPage('oper-result', {'type': 'user-cart'});
      },
      changeMainImg(img) {
        this.mainImage = img;
      },
      changeBuyCount(type) {
        if (!type) {
          alert('操作错误');
        }
        if (type === 'minus') {
          this.buyCount !== 1 ? this.buyCount-- : this.buyCount = 1;
        }
        if (type === 'plus') {
          this.buyCount !== this.product.stock ? this.buyCount++ : this.buyCount = this.product.stock;
        }
      },
      loadDetail() {
        let productId = this.getUrlParam('productId');
        if (!productId) {
          this.goHome();
          return;
        }
        this.ajax({
          type: 'GET',
          url: `/uac/auth/product/queryProductDetail/` + productId,
          success: (res) => {
            if (res.code === 200) {
              this.product = res.result;
              this.mainImage = this.product.mainImage;
              let subImages = this.product.subImages;
              let array = subImages.split(',');
              for (let index in array) {
                this.subImages.push(array[index]);
              }
            } else {
              this.isShowProduct = false;
            }
          }
        });
      }
    },
    components: {
      videoPlayer
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss">
.video-js .vjs-big-play-button {
    top: 50%;
    left: 50%;
    margin-top: -0.7em;
    margin-left: -1.5em;
}
</style>

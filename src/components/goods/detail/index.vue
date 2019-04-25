<template xmlns="http://www.w3.org/1999/html">
  <div class="page-container w">
    <p v-show="!isShowProduct" class="err-tip">很抱歉，实在找不到您要的商品。</p>
    <div v-show="isShowProduct">
      <div class="intro-wrap">
        <div class="p-img-con">
          <div class="main-img-con">
            <!-- <img class="main-img" v-lazy="mainImage" alt="name"/> -->
            <video-player
              class="video-player-box"
              ref="videoPlayer"
              :options="playerOptions"
              :playsinline="true"
              customEventName="customstatechangedeventname"
              @play="onPlayerPlay($event)"
              @pause="onPlayerPause($event)"
              @statechanged="playerStateChanged($event)"
              @ready="playerReadied"
            ></video-player>
          </div>
          <!-- <ul class="p-img-list">
            <li class="p-img-item" v-for="url in subImages" :key="url">
              <img @mouseenter="changeMainImg(url)" class="p-img" v-lazy="url"/>
            </li>
          </ul>-->
        </div>
        <div class="p-info-con">
          <h1 class="p-name">{{product.name}}</h1>
          <p class="p-subtitle">{{product.subtitle}}</p>
          <div class="p-info-item p-price-con p-price">
            <span class="label">{{product.price | formatMoney}}</span>
            <!-- <span class="info">{{product.price | formatMoney}}</span> -->
          </div>
          <span class="p-subtitle-2">教育机构：
            <span class="p-subtitle-3">{{product.organName}}</span>
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span class="p-subtitle-2">联系方式：</span>
          <span v-if="product.qq" class="p-subtitle-3">QQ&nbsp;{{product.qq}}</span>
          <span v-if="product.qq">
            <a
              target="_blank"
              v-bind:href="'http://wpa.qq.com/msgrd?v=3&uin='+this.product.qq+'&site=qq&menu=yes'"
            >
              <img
                class="qqimg"
                border="0"
                src="http://wpa.qq.com/pa?p=2:178899573:51"
                alt="点击这里给我发消息"
                title="点击这里给我发消息"
                style="height: 17px;"
              >
            </a>
          </span>
          <!-- <span v-if="product.qq" ><a target="_blank" v-bind:href="'tencent://message/?uin='+this.product.qq+'&Site=Sambow&Menu=yes'"><img class="qqimg" border="0" src="http://wpa.qq.com/pa?p=2:178899573:51" alt="点击这里给我发消息" title="点击这里给我发消息"/></a></span> -->
          <!-- <div class="p-info-item">
            <span class="label">库存:</span>
            <span class="info">{{product.stock}}</span>
          </div>
          <div class="p-info-item p-count-con">
            <span class="label">数量:</span>
            <input class="p-count" :value="buyCount" readonly=""/>
            <span class="p-count-btn plus" @click="changeBuyCount('plus')">+</span>
            <span class="p-count-btn minus" @click="changeBuyCount('minus')">-</span>
          </div>-->
          <div class="p-product-info">
            <p>课时：{{product.period}}&nbsp;&nbsp;&nbsp;&nbsp;有效期： {{this.dataString}}</p>
            <p>难度：<span style="font-weight: bold; font-size: 16px; color: #f39800; letter-spacing: 2px;">{{stars}}</span>&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p class="teacher">
              主讲老师：
              <a
                v-for="(teacher, index) in product.teacherList"
                :key="teacher.id"
                target="_blank"
              >
                {{teacher.name}}
                <span v-if="index !== product.teacherList.length - 1">、</span>
              </a>
            </p>
          </div>
          <div class="p-info-item-2">
            <a class="btn cart-add" @click="addCartClick">立刻报名</a>
            <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose">
              <span>这是一段信息</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addCart">确 定</el-button>
              </span>
            </el-dialog>
          </div>
        </div>
      </div>
      <div class="detail-wrap">
        <img src="https://user-images.githubusercontent.com/16996753/54806761-fa154400-4cb5-11e9-8077-0478a96c560d.png" alt="">
      </div>
      <div class="detail-wrap">
        <div class="detail-tab-con">
          <ul class="tab-list">
            <li class="tab-item active">
              <a href="#div1">课程介绍</a>
            </li>
            <li class="tab-item active">
              <a href="#div2">课程大纲</a>
            </li>
            <li class="tab-item active">
              <a href="#div3">名师介绍</a>
            </li>
            <li class="tab-item active">
              <a @click.prevent="loadPage('refund')">退换课须知</a>
            </li>
          </ul>
        </div>
        <div class="detail-con">
          <div v-html="product.detail"></div>

          <div id="audition" class="product-info-path p-course-trial">
            <p class="pi-path-title" id="div3">
              <em></em>名师介绍
            </p>
            <div class="course-list">
              <div class="course-list-inner" id="jp-course-list-wrap">
                <div class="course-item">
                  <img src="//file.koolearn.com/2015/1123/20151123104039704.png" alt>

                  <div class="info">
                    <p title="小学三年级英语孙拓第一讲上">小学三年级英语孙拓第一讲上</p>
                  </div>
                  <a
                    href="javascript:;"
                    class="play-btn j-player-btn"
                    data-title="小学三年级英语秋季强化班（全国通用版）【录播】"
                    data-text="小学三年级英语孙拓第一讲上"
                    data-video="156538/2017c"
                  >
                    <em></em>试听
                  </a>
                </div>
              </div>
            </div>
            <div class="page-control" id="jp-course-list-control"></div>
          </div>

          <!-- <div class="product-info-path p-course-return">
            <p class="pi-path-title" id="div4">
              <em></em>退换课规则
            </p>
            <ul>
              <li>1、直播课程总次数只有1次的，一经购买不可进行退换。</li>
              <li>2、直播总次数在2次以上的（包含2次），在第2次直播开课后不可进行退换。</li>
              <li>3、在第2次直播开课后购买的，一经购买不可进行退换。</li>
              <li>4、如所退换课程包含资料等成本费用需在办理退款时一并扣除。</li>
              <li>5、课程已过期不可进行退换。</li>
            </ul>
          </div> -->

          <!-- <div class="product-info-path p-course-return">
            <p class="pi-path-title">
              <em></em>常见问题
            </p>
            <ul>
              <li>Q：师生如何及时沟通？</li>
              <li>A：可在老师好App的班级群里互发消息进行沟通，也可建立QQ或微信群进行沟通。</li>
              <li>Q：我的Pad没有电容笔，去哪里购买？</li>
              <li>A：请在天猫或京东商城购买，推荐使用kmoso电容笔。</li>
              <li>Q：怎么听不见声音、看不到视频？</li>
              <li>A：有几种可能：
                <br>1）耳机和麦克配置不正确；
                <br>2）系统提示：“想使用您的摄像机和麦克风”时，您没有选择“允许”，请在系统设置中重新为老师好App勾选相关的权限。
              </li>
              <li>Q：手写笔迹时感觉有点“卡”、笔迹失真？</li>
              <li>A：请先使用第三方软件测试手写笔迹是否也“卡”？如果不“卡”，请与我们联系解决问题；如果也“卡”，可能是您的Pad硬件对手写笔迹的支持不够。</li>
            </ul>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
// require styles
import "video.js/dist/video-js.css";

import { videoPlayer } from "vue-video-player";

export default {
  data() {
    return {
      dialogVisible: false,
      isShowProduct: true,
      // stars: true,
      buyCount: 1,
      product: {},
      mainImage: "",
      subImages: [],
      video: "",
      playerOptions: {
        // videojs options //static/images/author.jpg
        height: "340px",
        width: "500px",
        muted: true,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src:
              "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
            // src: 'http://www.w3school.com.cn/i/movie.ogg'
          }
        ],
        poster: "http://file.koolearn.com/2018/1112/20181112113959687.png"
      }
    };
  },
  created() {},
  activated() {
    this.loadDetail();
    this.isShowProduct = true;
  },
  mounted() {
    console.log("this is current player instance object", this.player);
  },
  methods: {
    // stars: function () {
    //     if (this.product.difficulty === 1) {
    //       return '★☆☆☆☆'
    //     }else if (this.product.difficulty === 2) {
    //       return '★★☆☆☆'
    //     }else if (this.product.difficulty === 3) {
    //       return '★★★☆☆'
    //     }else if (this.product.difficulty === 4) {
    //       return '★★★★☆'
    //     }else if (this.product.difficulty === 5) {
    //       return '★★★★★'
    //     }
    //     return '★★★☆☆';
    // },
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
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    // player is ready
    playerReadied(player) {
      console.log("the player is readied", player);
      // you can use it to do something...
      // player.[methods]
    },
    addCartClick(){
      this.dialogVisible = true;
      
    },
    addCart() {
      this.dialogVisible = false;
      let userCart = {};
      console.info("this.product", this.product);
      let productId = this.product.id;
      this.$store.dispatch("check_product", { productId });
      if (this.$store.getters.getCurIndex !== -1) {
        this.$store.dispatch("plus_count");
      } else {
        userCart.productId = this.product.id;
        userCart.quantity = this.buyCount;
        userCart.productName = this.product.name;
        userCart.productPrice = this.product.price;
        userCart.mainImage = this.product.mainImage;
        userCart.checked = 1;
        this.$store.dispatch("push_cart", { userCart });
      }
      this.loadPage("oper-result", { type: "user-cart" });
    },
    changeMainImg(img) {
      this.mainImage = img;
    },
    changeBuyCount(type) {
      if (!type) {
        alert("操作错误");
      }
      if (type === "minus") {
        this.buyCount !== 1 ? this.buyCount-- : (this.buyCount = 1);
      }
      if (type === "plus") {
        this.buyCount !== this.product.stock
          ? this.buyCount++
          : (this.buyCount = this.product.stock);
      }
    },
    loadDetail() {
      let productId = this.getUrlParam("productId");
      if (!productId) {
        this.goHome();
        return;
      }
      this.ajax({
        type: "GET",
        url: `/uac/auth/product/queryProductDetail/` + productId,
        success: res => {
          if (res.code === 200) {
            this.product = res.result;
            // this.product.difficulty = 5;
            this.mainImage = this.product.mainImage;
            if (this.product.subImages) {
              let subImages = this.product.subImages;
              let array = subImages.split(",");
              for (let index in array) {
                this.subImages.push(array[index]);
              }
            }
            this.playerOptions.sources[0].src = this.product.video;
            this.playerOptions.poster = this.product.mainImage;
          } else {
            this.isShowProduct = false;
          }
        }
      });
    }
  },
  components: {
    videoPlayer
  },
  computed: {
    dataString() {
      var date = new Date(this.product.validTime); //如果date为13位不需要乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
      // var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      // var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
      // var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
      return Y + M + D;
    },
    stars: function () {
        if (this.product.difficulty === 1) {
          return '★☆☆☆☆'
        }else if (this.product.difficulty === 2) {
          return '★★☆☆☆'
        }else if (this.product.difficulty === 3) {
          return '★★★☆☆'
        }else if (this.product.difficulty === 4) {
          return '★★★★☆'
        }else if (this.product.difficulty === 5) {
          return '★★★★★'
        }
        return '★★★☆☆';
    },
    player() {
      return this.$refs.videoPlayer.player;
    },
    url() {
      return `http://wpa.qq.com/msgrd?v=3&uin=${
        this.product.qq
      }&site=qq&menu=yes`;
    },
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.box-title {
  height: 40px;
  line-height: 40px;
  border-left: 8px solid #0090f5;
  font-size: 30px;
  text-indent: 10px;
  color: #0090f5;
  font-weight: 700;
}
.pro-list li {
  width: 124px;
  height: 130px;
  float: left;
  margin: 0 20px 20px 0;
  background: 0 0;
}
.pro-list li .top {
  width: 124px;
  height: 124px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  background: #0090f5;
  position: relative;
  overflow: hidden;
}
.pro-list li .top img {
  margin: 10px auto 6px;
}
.pro-list li .top .index-p {
  height: 20px;
  line-height: 20px;
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  text-align: center;
}
.pro-list li .top .title {
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  text-align: center;
}
p {
  margin: 0px;
  margin-top: 10px;
}

.detail-con {
  padding: 35px 30px 30px;
}

.product-info-path .pi-path-title {
  height: 44px;
  line-height: 44px;
  font-size: 20px;
  color: #686868;
  position: relative;
}
.product-info-path .pi-path-title em {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  width: 7px;
  height: 17px;
  background: #0cacbb;
  margin-right: 18px;
  vertical-align: middle;
}

.detail-wrap .p-course-return li {
  padding: 10px 0;
  line-height: 22px;
  font-size: 16px;
}

.qqimg {
  display: inline;
}

.detail-wrap .detail-title {
  padding-top: 20px;
  background: clear;
}
.detail-wrap .detail-title img {
  display: block;
  margin: 0 auto;
}

.video-js .vjs-big-play-button {
  top: 50%;
  left: 50%;
  margin-top: -0.7em;
  margin-left: -1.5em;
}
// .p-product-info {
// padding: 20px 0 20px;
// border-bottom: 1px solid #dedfe1;
// }
.p-product-info a {
  color: #828282;
  text-decoration: none;
}

.cart-add {
  display: inline-block;
  /* padding: 0 120px; */
  line-height: 56px;
  vertical-align: middle;
  border: none;
  background: #337ab7;
  font-size: 19px;
  font-weight: bold;
  color: #fff;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  /* width: 200px; */
  width: 220px;
  height: 56px;
  background-color: #ff6e6e;
}
.detail-wrap .tab-list .tab-item a {
  color: #eee;
  text-decoration: none;
}
</style>

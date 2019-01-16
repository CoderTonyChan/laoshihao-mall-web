<template>
  <div>
    <div class="w">
      <div class="panel-body">
        <div class="row align-items-center">
          <div class="col-md-12">
            <!-- <h2 class="title">老师好的教学模式，以确保在线教学的质量</h2> -->
          </div>
          <div class="col-md-6 col-xs-6 ">
            <!-- <h1 class="mb-3 bd-text-purple-bright">老师好</h1> -->
            <h3 class="title">
              <em>我们提供平台和工具，帮您卖产品，帮您做在线教学</em>
            </h3>
            <img src="http://oss.lshao.cn/picture/home/515578321149371394.png" class="titlePhoto">
            <div class="d-flex flex-column flex-md-row lead mb-3">
              <h3 class="title">
                <em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;老师好的教学模式</em>
              </h3>
              <a
                href="http://webboard.oss-cn-shanghai.aliyuncs.com/LshaoSetup.rar"
                class="btn btn-lg btn-bd-primary mb-3 mb-md-0 mr-md-3"
                onclick="ga('send', 'event', 'Jumbotron actions', 'Get started', 'Get started');"
              >Windows下载</a>
              <a
                href="http://webboard.oss-cn-shanghai.aliyuncs.com/lshao.apk"
                class="btn btn-lg btn-outline-secondary"
                onclick="ga('send', 'event', 'Jumbotron actions', 'Download', 'Download 4.0.0');"
              >Android下载</a>
              <a class="btn btn-lg btn-outline-secondary" @click="checkVersion()">iOS下载</a>
            </div>
            <!-- <p class="text-muted mb-0">当前版本：v4.0.0 | 文档更新于：2018-07-07</p> -->
          </div>
          <div class="col-md-6 col-xs-6 ">
            <!-- <p class="lead">&nbsp;</p> -->
            <!-- <img
                  class="img-fluid mb-3 mb-md-0"
                  src="http://lshao.cn/images/mainpage.jpg"
                  alt
            >-->
            <h4 class="title">
              <a href="javascript:void(0)" @click="chooseVideo(0)">老师好简介</a>
              <a href="javascript:void(0)" @click="chooseVideo(1)">操作指南</a>
              <a href="javascript:void(0)" @click="chooseVideo(2)">互动课堂</a>
            </h4>
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
        </div>
      </div>
    </div>
    <div class="w">
      <ul class="keywords-list">
        <li class="keywords-item">
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','小学')">小学</a>
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','初中')">初中</a>
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','高中')">高中</a>
        </li>
        <li class="keywords-item">
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','','2')">东莞卓越教育</a>
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','','3')">星火</a>
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','','1')">新东方</a>
        </li>
        <li class="keywords-item">
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','王老师')">王老师</a>
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','周老师')">周老师</a>
        </li>
        <li class="keywords-item">
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','三角')">三角</a>
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','不等式')">不等式</a>
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','二次函数')">二次函数</a>
        </li>
        <li class="keywords-item">
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','电路与电流')">电路与电流</a>
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','压力压强')">压力压强</a>
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','光的反射')">光的反射</a>
        </li>
        <li class="keywords-item">
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','酸碱盐')">酸碱盐</a>
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','碳的氧化物')">碳的氧化物</a>
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','化学方程式')">化学方程式</a>
        </li>
        <li class="keywords-item">
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','文学常识')">文学常识</a>
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','文言文')">文言文</a>
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','现代文阅读')">现代文阅读</a>
        </li>
        <li class="keywords-item">
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','被动语态')">被动语态</a>
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','现在进行时')">现在进行时</a>
        </li>
        <li class="keywords-item">
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','预测题')">预测题</a>
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','压轴题')">压轴题</a>
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','模拟题')">模拟题</a>
        </li>
        <li class="keywords-item">
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','北京')">北京</a>
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','广州')">广州</a>
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','深圳')">深圳</a>
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','东莞')">东莞</a>
          <a class="link" href="javascript:void(0)" @click="goGoodsListPage('','广西')">广西</a>
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
        <ul class="floor-list p-course-list">
          <!-- <li class="floor-item" v-for="item in  category.categoryList" :key="item.categoryId">
            <a href="javascript:void(0)" @click="goGoodsListPage(item.categoryId)">
              <span class="floor-text">{{item.categoryName}}</span>
              <img class="floor-img" :src="imgUrl" alt/>
            </a>
          </li>-->
          <li
            class="p-item p-r-border p-b-border"
            v-for="item in category.productTeacherDtoList"
            :key="item.id"
          >
            <a class="p-link" href="javascript:void(0)" @click="goProductDetailPage(item.id)">
              <p class="p-title">
                <span class="p-flag">NEW</span>
                {{item.name}}
              </p>
              <p class="p-time">
                课时数：{{item.period}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span
                  class="p-price"
                >价格：{{item.price}}</span>
              </p>
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
import "video.js/dist/video-js.css";
import pcBanner from "components/banner";
import { videoPlayer } from "vue-video-player";

export default {
  data() {
    return {
      videos: [
        "https://lshao.oss-cn-beijing.aliyuncs.com/lshao2.0.mp4",
        "https://lshao.oss-cn-beijing.aliyuncs.com/%E8%80%81%E5%B8%88%E5%A5%BD%E6%93%8D%E4%BD%9C%E6%8C%87%E5%8D%975.0%28%E9%AB%98%E6%B8%85%29.mp4",
        "https://lshao.oss-cn-beijing.aliyuncs.com/%E4%BA%92%E5%8A%A8%E8%AF%BE%E5%A0%82.mp4"
      ],
      playerOptions: {
        // videojs options //static/images/author.jpg
        autoplay: "muted",
        height: "402px",
        width: "510px",
        muted: true,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src: "https://lshao.oss-cn-beijing.aliyuncs.com/lshao2.0.mp4"
          }
        ],
        poster: "http://lshao.cn/images/mainpage.jpg"
      },
      categoryData: [
        {
          categoryId: "",
          categoryName: "",
          productTeacherDtoList: [
            {
              id: "",
              categoryId: "",
              categoryName: ""
            }
          ]
        }
      ]
    };
  },
  mounted() {
    // 动态设置背景图的高度为浏览器可视区域高度

    // 首先在Virtual DOM渲染数据时，设置下背景图的高度．
    // this.playerOptions.width = `${document.documentElement.clientHeight * 0.5 }px`;
    // this.playerOptions.height = `${document.documentElement.clientHeight * 0.5 * 0.7}px`;
    // // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
    // const that = this;
    // window.onresize = function temp() {
    //   that.playerOptions.width = `${document.documentElement.clientHeight * 0.5 }px`;
    //   that.playerOptions.height = `${document.documentElement.clientHeight * 0.5 * 0.7 }px`;
    // };
  },
  created() {},
  activated() {
    this.queryCategoryData(res => {
      if (res.code === 200) {
        this.categoryData = res.result;
      } else {
        alert("加载主页面失败");
      }
    });
  },
  methods: {
    // listen event
    chooseVideo(number) {
      // this.playerOptions.sources[0].src = this.videos[number];
      // this.$refs.videoPlayer.player.pause();
      // this.$refs.videoPlayer.player.play();
      // console.log(`chooseVideo`);
      // console.log(this.$refs.videoPlayer.player);
      // if (number === 0) {
      //   this.playerOptions.sources[0].src = 'https://lshao.oss-cn-beijing.aliyuncs.com/lshao2.0.mp4';
      //   this.$refs.videoPlayer.player.play();
      // }else{
      //   this.playerOptions.sources[0].src = '';
      // }

      this.playerOptions.sources[0].src = this.videos[number];
      // this.$refs.videoPlayer.player.play();
    },
    onPlayerPlay(player) {
      console.log("player play!", player);
    },
    onPlayerPause(player) {
      console.log("player pause!", player);
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      console.log("player current update state", playerCurrentState);
    },

    // player is ready
    playerReadied(player) {
      console.log("the player is readied", player);
      // you can use it to do something...
      // player.[methods]
      setTimeout(() => {
        player.play();
      }, 10);
    },
    goProductDetailPage(productId) {
      this.loadPage("goods-detail", { productId: productId });
    },
    getImage(index1, index2) {
      return require("../../assets/image/floor/floor" +
        (index1 + 1) +
        "-" +
        (index2 + 1) +
        ".jpg");
    },
    goGoodsListPage(categoryId, keyword, organId) {
      let param = {};
      param.categoryId = categoryId;
      param.keyword = keyword;
      param.organId = organId;
      this.loadPage("goods-list", param);
    },
    checkVersion() {
      // 这里全部小写
      var userAgent = navigator.userAgent.toLowerCase();
      var name = "Unknown";
      var version = "Unknown";
      if (userAgent.indexOf("win") > -1) {
        name = "Windows";
        if (userAgent.indexOf("windows nt 5.0") > -1) {
          version = "Windows 2000";
        } else if (
          userAgent.indexOf("windows nt 5.1") > -1 ||
          userAgent.indexOf("windows nt 5.2") > -1
        ) {
          version = "Windows XP";
        } else if (userAgent.indexOf("windows nt 6.0") > -1) {
          version = "Windows Vista";
        } else if (
          userAgent.indexOf("windows nt 6.1") > -1 ||
          userAgent.indexOf("windows 7") > -1
        ) {
          version = "Windows 7";
        } else if (
          userAgent.indexOf("windows nt 6.2") > -1 ||
          userAgent.indexOf("windows 8") > -1
        ) {
          version = "Windows 8";
        } else if (userAgent.indexOf("windows nt 6.3") > -1) {
          version = "Windows 8.1";
        } else if (
          userAgent.indexOf("windows nt 6.2") > -1 ||
          userAgent.indexOf("windows nt 10.0") > -1
        ) {
          version = "Windows 10";
        } else {
          version = "Unknown";
        }
      } else if (userAgent.indexOf("iphone") > -1) {
        name = "Iphone";
      } else if (userAgent.indexOf("ipad") > -1) {
        name = "iPad";
      } else if (userAgent.indexOf("mac") > -1) {
        name = "Mac";
      }else if (
        userAgent.indexOf("x11") > -1 ||
        userAgent.indexOf("unix") > -1 ||
        userAgent.indexOf("sunname") > -1 ||
        userAgent.indexOf("bsd") > -1
      ) {
        name = "Unix";
      } else if (userAgent.indexOf("linux") > -1) {
        if (userAgent.indexOf("android") > -1) {
          name = "Android";
        } else {
          name = "Linux";
        }
      } else {
        name = "Unknown";
      }
      var os = new Object();
      os.name = name;
      os.version = version;
      if (os.name === "Iphone"||os.name ==="iPad") {
        window.open("https://itunes.apple.com/us/app/id1265741384");
      } else {
        this.errorTips("请在Safari中打开");
      }
    },
    queryCategoryData(resolve) {
      this.ajax({
        type: "GET",
        // url: `/uac/auth/category/getProductCategoryDtoByPid/0`,
        url: `/uac/auth/category/getCategoryAndProductDtoByPid/0`,
        success: resolve
      });
    }
  },
  components: {
    pcBanner,
    videoPlayer
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.panel-body {
  margin-top: -30px;
}

h3.title {
  font-size: 22px;
}
.lead {
  margin-top: -30px;
  margin-left: 50px;
}
.titlePhoto {
  // width: 70%;
  // width: 70px;
  // height: 70px;
  margin-top: -40px;
  margin-left: 50px;
  max-width: 70%;
  // max-height: 70%;
  display: inline-block;
  text-align: center;
}
.video-js .vjs-big-play-button {
  top: 50%;
  left: 50%;
  margin-top: -0.7em;
  margin-left: -1.5em;
}
.p-course-list .p-item {
  float: left;
  box-sizing: border-box;
  width: 216px;
  height: 192px;
  border-left: 1px solid #c0c4cc;
  border-top: 1px solid #c0c4cc;
  border-bottom: 1px solid #c0c4cc;
}
.p-course-list .p-item:last-child {
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
h4 {
  font-size: 18px;
  margin-top: 36px;
  margin-left: 260px;
}
</style>

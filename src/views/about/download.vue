<template>
  <div class="download">
    <!-- <div class="crumb">
      <div class="w">
        <div class="crumb-con">
          <a class="link" href="/">老师好在线</a>
          <span>></span>
          <span class="link-text">{{$route.meta.name}}</span>
        </div>
      </div>
    </div> -->
    <div class="download-header">
      <download-banner />
    </div>
    <div class="about-wrap w">
      <!-- <div class="panel">
        <h1 class="panel-title">客户端下载</h1>
            <div class="d-flex flex-column flex-md-row lead mb-3">
              <a
                href="http://webboard.oss-cn-shanghai.aliyuncs.com/LshaoSetup.rar"
                class="btn btn-lg btn-bd-primary mb-3 mb-md-0 mr-md-3"
              >Windows下载</a>
              <a
                href="http://webboard.oss-cn-shanghai.aliyuncs.com/lshao.apk"
                class="btn btn-lg btn-outline-secondary"
              >Android下载</a>
              <a class="btn btn-lg btn-outline-secondary" @click="checkVersion()">iOS下载</a>
            </div>
      </div> -->
      <ul>
        <li class="item">
          <p class="title">Win版</p>
          <img class="img" src="http://oss.lshao.cn/images/win.jpg" alt="">
          <div class="button">
            <span class="button-title"><a class="link"
                href="http://webboard.oss-cn-shanghai.aliyuncs.com/LshaoSetup.rar"
              >下载</a></span>
          </div>
        </li>
        <li class="item">
          <p class="title">安卓版</p>
          <img class="img" src="http://oss.lshao.cn/images/anzhuo.jpg" alt="">
          <div class="button">
            <span class="button-title"><a class="link"
                href="http://webboard.oss-cn-shanghai.aliyuncs.com/lshao.apk"
              >下载</a></span>
          </div>
        </li>
        <li class="item">
          <p class="title">iOS版</p>
          <img class="img" src="http://oss.lshao.cn/images/iOS.jpg" alt="">
          <div class="button">
            <span class="button-title"><a class="link" @click="checkVersion()"
              >下载</a></span>
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

import downloadBanner from "components/banner/downloadBanner";

export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    test() {},
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
      } else if (
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
      if (os.name === "Iphone" || os.name === "iPad") {
        window.open("https://itunes.apple.com/us/app/id1265741384");
      } else {
        this.errorTips("请在Safari中打开");
      }
    },
  },
  components: {
    downloadBanner
  },
  
};
</script>
<style rel="stylesheet/scss" lang="scss">
.download{
      // margin-top: -35px;
}

.download-header {
  background-color: #f5f8fb;
  height: 410px;
  width: 100%;
  margin-bottom: 75px;
}
.lead {
    margin-top: 5px;
    text-align: center;
}
.about-wrap .item{
  float: left;
  margin-right: 61px;
  margin-left: 70px;
  // background-color: red;
	width: 201px;
	height: 322px;
  text-align: center;
}

.about-wrap .item .title{
  
	width: 200px;
	height: 23px;
	font-size: 24px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
}

.about-wrap .item .img{
    margin-top: 30px;
}


.about-wrap .item .button{
    width: 200px;
    height: 40px;
    background-color: #4d7fff;
    border-radius: 2px;
    position: absolute;
    bottom: 0px;
    text-align: center;
}

.about-wrap .item .button .button-title{
    width: 200px;
    height: 40px;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #ffffff;
  line-height: 40px;
}
.about-wrap .item .button .button-title a{
	color: #ffffff;
  text-decoration:none;
}

</style>

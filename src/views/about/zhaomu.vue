<template>
  <div>
    <div class="crumb">
      <div class="w">
        <div class="crumb-con">
          <a class="link" href="/">老师好商城</a>
          <span>></span>
          <span class="link-text">{{$route.meta.name}}</span>
        </div>
      </div>
    </div>

    <div class="w">
      <div class="box-title">机构入驻流程</div>
      <br>
      <ul class="pro-list">
        <li>
          <div class="top">
            <img
              src="https://gw.alicdn.com/tfs/TB1_YUZSXXXXXbqXFXXXXXXXXXX-50-43.png"
              width="50"
              height="43"
              alt
            >
            <p class="index-p">1</p>
            <p class="title">申请账号</p>
          </div>
        </li>
        <li>
          <div class="top">
            <img
              src="https://gw.alicdn.com/tfs/TB19gMsSXXXXXctaXXXXXXXXXXX-50-43.png"
              width="50"
              height="43"
              alt
            >
            <p class="index-p">2</p>
            <p class="title">操作指南</p>
          </div>
        </li>
        <li>
          <div class="top">
            <img
              src="https://gw.alicdn.com/tfs/TB1B8ZkSXXXXXcAapXXXXXXXXXX-50-43.png"
              width="50"
              height="43"
              alt
            >
            <p class="index-p">3</p>
            <p class="title">下载App</p>
          </div>
        </li>
        <li>
          <div class="top">
            <img
              src="https://gw.alicdn.com/tfs/TB1rV34SXXXXXcGXpXXXXXXXXXX-50-43.png"
              width="50"
              height="43"
              alt
            >
            <p class="index-p">4</p>
            <p class="title">创建课程</p>
          </div>
        </li>
        <li>
          <div class="top">
            <img
              src="https://gw.alicdn.com/tfs/TB1U4kZSXXXXXXgXFXXXXXXXXXX-50-43.png"
              width="50"
              height="43"
              alt
            >
            <p class="index-p">5</p>
            <p class="title">管理运营</p>
          </div>
        </li>
        <li>
          <div class="top">
            <img
              src="https://gw.alicdn.com/tfs/TB1XQMOSXXXXXbFXVXXXXXXXXXX-50-43.png"
              width="50"
              height="43"
              alt
            >
            <p class="index-p">6</p>
            <p class="title">登录App</p>
          </div>
        </li>
        <li>
          <div class="top">
            <img
              src="https://gw.alicdn.com/tfs/TB1nvQzSXXXXXXsapXXXXXXXXXX-50-43.png"
              width="50"
              height="43"
              alt
            >
            <p class="index-p">7</p>
            <p class="title">上课</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    test() {}
  },
  components: {}
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
    height: 220px;
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
    margin:1px;
}
</style>

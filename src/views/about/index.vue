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
    <div class="about-wrap w">
      <div class="panel">
        <h1 class="panel-title">关于我们</h1>
        <div class="panel-body">
            <div class="row align-items-center">
              <div class="col-md-12">
                <img src="http://lshao.cn/LshLogin/images/zi.png" 
                >
              </div>
              <div class="col-md-6 order-md-1 text-center text-md-left pr-md-5">
                <!-- <h1 class="mb-3 bd-text-purple-bright">老师好</h1> -->
                <p class="lead">&nbsp;</p>
                <!-- <p class="lead">&nbsp;</p> -->
                <p class="lead">Pad互动课堂</p>
                <p class="lead">自录和上传微课</p>
                <p class="lead">资源库的日积月累</p>
                <p class="lead">自动批改作业</p>
                <p class="lead">远程1对1课外辅导</p>
                <div class="d-flex flex-column flex-md-row lead mb-3">
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
                  <a
                    href="https://itunes.apple.com/us/app/id1265741384"
                    class="btn btn-lg btn-outline-secondary"
                    onclick="ga('send', 'event', 'Jumbotron actions', 'Download', 'Download 4.0.0');"
                  >iOS下载</a>
                </div>
                <!-- <p class="text-muted mb-0">当前版本：v4.0.0 | 文档更新于：2018-07-07</p> -->
              </div>
              <div class="col-6 mx-auto col-md-6 order-md-2">
                <img
                  class="img-fluid mb-3 mb-md-0"
                  src="http://lshao.cn/images/mainpage.jpg"
                  alt
                >
              </div>
            </div>
        </div>
      </div>
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
.panel img {
  background-color: #ddd;
}
</style>

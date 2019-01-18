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
        <h1 class="panel-title">客户端下载</h1>
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
              <a class="btn btn-lg btn-outline-secondary" @click="checkVersion()">iOS下载</a>
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
}
.lead {
    margin-top: 5px;
    text-align: center;
}
</style>

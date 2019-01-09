<template>
  <div>
    <div class="crumb">
      <div class="w">
        <div class="crumb-con">
          <a class="link" href="/">老师好平台</a>
          <span>></span>
          <span class="link-text">{{$route.meta.name}}</span>
        </div>
      </div>
    </div>
    <div class="about-wrap w">
      <div class="panel">
        <h1 class="panel-title">关于我们</h1>
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

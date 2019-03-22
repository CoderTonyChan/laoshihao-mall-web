<template>
  <div>
    <div class="crumb">
      <div class="w">
        <div class="crumb-con">
          <a class="link" href="/">老师好在线</a>
          <span>></span>
          <span class="link-text">{{$route.meta.name}}</span>
        </div>
      </div>
    </div>
    <div class="about-wrap w">
      <div>
        <h1 style="text-align: center;">退换课规则</h1>
        <ul style="font-size: 20px;">
              <li>1、直播课程总次数只有1次的，一经购买不可进行退换。</li>
              <li>2、直播总次数在2次以上的（包含2次），在第2次直播开课后不可进行退换。</li>
              <li>3、在第2次直播开课后购买的，一经购买不可进行退换。</li>
              <li>4、如所退换课程包含资料等成本费用需在办理退款时一并扣除。</li>
              <li>5、课程已过期不可进行退换。</li>
            </ul>
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
.origin-content {
  font-size: 20px;
}
</style>

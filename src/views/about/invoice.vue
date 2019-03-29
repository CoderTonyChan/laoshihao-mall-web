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
        <h1 style="text-align: center;">开具发票</h1>
        <ul style="font-size: 20px;">
              <li>1、如用户需要开具发票，目前我方只提供电子发票，请于购课成功后90天内向我方申请开具发票，逾期将无法开具；</li>
              <li>2、如因学员个人原因造成的发票抬头、开票内容、金额信息错误，将不予以重新开具；</li>
              <li>3、如遇学员中途退课，发票金额将按我方实际收取的金额开具；</li>
              <li>4、一张订单对应一张发票，补开发票需提供原始的订单号，订单号是您办理补开发票的唯一依据。</li>
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

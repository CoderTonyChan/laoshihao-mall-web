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
        <h1 style="text-align: center;">在线支付</h1>
        <ul style="font-size: 20px;">
              <li>选好课程->立刻报班->查看购物车->去结算。</li>
              <li>1、如支付成功，课程将于24小时内开通；</li>
              <li>2、如支付重复，并且2笔款项均已到账，会为同学办理其中一笔费用的退款；</li>
              <li>3、如超过24小时课程未开通，请您及时与在线客服联系并发送支付成功截图及用户名、订单号给在线客服，我们收到后会第一时间为您核实。</li>
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

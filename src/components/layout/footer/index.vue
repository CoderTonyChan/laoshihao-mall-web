<template>
  <div class="footer">
    <div class="w">
      <!-- <div class="links">
        <a class="link" href="https://juejin.im" target="_blank">掘金</a> |
        <a class="link" href="https://www.baidu.com" target="_blank">百度</a> |
        <a class="link" href="https://www.taobao.com" target="_blank">淘宝</a> |
        <a class="link" href="https://www.zhihu.com" target="_blank">知乎</a>
      </div>-->
      <p class="copyright">
          <a class="link" href="javascript:void(0)" @click.prevent="loadPage('about')">关于老师好商城</a> |
          <a class="link" href="javascript:void(0)" @click.prevent="loadPage('privacy')">隐私政策</a> |
          <!-- <a class="link" href="javascript:void(0)" @click.prevent="loadPage('disclaimer')">免责声明</a> |
          <a class="link" href="javascript:void(0)" @click.prevent="loadPage('about')">关于老师好商城</a>| -->
          <a class="link" href="javascript:void(0)" @click.prevent="loadPage('disclaimer')">免责声明</a>
      </p>
      <p class="copyright">
        Copyright © 2017 京ICP备14046643号-1 联系电话：010-52262815 QQ:1302828706 All Right Reserved
      </p>
      <p class="copyright">
        道明公司 版权所有
      </p>
    </div>
  </div>
</template>

<style>
.footer .copyright {
    margin: 0 0 0px;
}
</style>

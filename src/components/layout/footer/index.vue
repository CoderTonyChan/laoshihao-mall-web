<template>
  <div class="footer">
    <div class="top">
      <div class="top w">
        <img src="http://oss.lshao.cn/images/Logo.png" alt="">


        <div class="w1">
          <p class="f-title">如何购买</p>
          <ul class="f-table">
            <li class="item link"  @click.prevent="loadPage('register')">新用户注册</li>
            <li class="item link"  @click.prevent="loadPage('payonline')">在线支付</li>
            <li class="item link"  @click.prevent="loadPage('invoice')">开具发票</li>
          </ul>
        </div>

        <div class="w2">
          <p class="f-title">商家入驻</p>
          <ul class="f-table">
            <li class="item link">老师入驻</li>
            <li class="item link">机构入驻</li>
            <li class="item link" @click.prevent="loadPage('business')">商务合作</li>
          </ul>
        </div>


        <div class="w3">
          <p class="f-title">新手上路</p>
          <ul class="f-table">
            <li class="item link" @click.prevent="loadPage('question')">常见问题</li>
            <li class="item link" @click.prevent="loadPage('howtostudy')">如何上课</li>
          </ul>
        </div>


        <div class="w4">
          <p class="f-title">售后服务</p>
          <ul class="f-table">
            <li class="item link" onclick="alert('正在规划')">在线客服</li>
            <li class="item link" onclick="alert('正在规划')">意见反馈</li>
            <li class="item link" @click.prevent="loadPage('refund')">退换课须知</li>
          </ul>
        </div>

        <!-- <div class="w4">
          <p class="f-title">联系我们</p>
          <ul class="f-table">
            <li class="item">联系方式：010-52262815</li>
            <li class="item">电子邮箱：laoshihao@mail.cn</li>
            <li class="item">公司地址：北京市丰台区星火路</li>
          </ul>
        </div> -->


        <img class="f-img link" @click.prevent="loadPage('download')" src="http://oss.lshao.cn/images/download.png" alt="">
        <p class="f-title-2 link" @click.prevent="loadPage('download')">官方客户端下载</p>

      </div>
    </div>
    <div class="bottom">
      <div class="w">
        <!-- <div class="links">
        <a class="link" href="https://juejin.im" target="_blank">掘金</a> |
        <a class="link" href="https://www.baidu.com" target="_blank">百度</a> |
        <a class="link" href="https://www.taobao.com" target="_blank">淘宝</a> |
        <a class="link" href="https://www.zhihu.com" target="_blank">知乎</a>
        </div>-->
        <p class="copyright">
          <a class="link" href="javascript:void(0)" @click.prevent="loadPage('about')">关于我们</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a class="link" href="javascript:void(0)" @click.prevent="loadPage('privacy')">隐私政策</a> &nbsp;&nbsp;|&nbsp;&nbsp;
          <!-- <a class="link" href="javascript:void(0)" @click.prevent="loadPage('disclaimer')">免责声明</a> |
          <a class="link" href="javascript:void(0)" @click.prevent="loadPage('about')">关于老师好在线</a>|-->
          <a class="link" href="javascript:void(0)" @click.prevent="loadPage('disclaimer')">免责声明</a>
        </p>
        <p
          class="copyright"
        >Copyright © 2019 All Right Reserved 北京道明科技有限公司 版权所有 &nbsp;&nbsp;|&nbsp;&nbsp;京ICP备14046643号</p>
      </div>
    </div>
  </div>
</template>

<style>
.w1{
  /* color: black; */
  position: absolute;
    top: 55px;
    left: 255px;
}

.w2{
  /* color: black; */
  position: absolute;
    top: 55px;
    left: 405px;
}


.w3{
  /* color: black; */
  position: absolute;
    top: 55px;
    left: 555px;
}


.w4{
  /* color: black; */
  position: absolute;
    top: 55px;
    left: 705px;
}


.footer .f-title {
  margin-bottom: 20px;
    font-size: large;
}

.footer .f-title-2 {
    position: absolute;
    right: 18px;
    top: 175px;
}


.footer .f-table {
}

.footer .f-img{
    display: block;
    position: absolute;
    right: 0;
    margin-top: -99px;
}

.footer .f-table .item {
  margin-top: 8px;
}


.footer .copyright {
  margin: 0 0 0px;
}

.footer img {
  margin-top: 90px;
}

.footer .top {
	height: 227px;
	background-color: #fafbfc;
}

</style>

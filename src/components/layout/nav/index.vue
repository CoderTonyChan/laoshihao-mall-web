<template>
  <div class="nav">
    <div class="w">
      
      <div class="user-info">
        <!-- <span class="user">
          <span>{{city}}</span>
          <span class="link" @click="change(city)">[切换城市]</span>
          <ul v-show="isShowCity" style="background-color: gray;">
            <li class="link city" @click="change('北京')">北京</li>
            <li class="link city" @click="change('上海')">上海</li>
            <li class="link city" @click="change('广州')">广州</li>
            <li class="link city" @click="change('东莞')">东莞</li>
            <li class="link city" @click="change('南宁')">南宁</li>
          </ul>
        </span> -->
        <!-- <span class="user not-login" v-show="loginName == null || loginName === ''">
          <span class="link js-login" @click="goSignIn">登录</span>
          <span class="link js-register" @click="goSignUp">注册</span>
        </span> -->
        <!-- <span class="user login" v-show="loginName != null && loginName !== ''">
          <span class="link-text">
            欢迎，
            <span class="username">{{loginName}}</span>
          </span>
          <span class="link js-logout" @click.prevent="logout">退出</span>
        </span> -->
        <!-- <span class="user">
          <span class="link" @click.prevent="loadPage('download')">客户端下载</span>
        </span> -->
      </div>
      <ul class="nav-list">
        <!-- <li class="nav-item">
          <a class="link" @click="loadPage('user-cart')">
            <i class="fa fa-shopping-cart"></i>
            购物车(
            <span class="cart-count">{{cartList.length}}</span>)
          </a>
        </li> -->
        
        <li class="nav-item register"  v-if="loginName == null || loginName === ''">
          <a class="link" href="javascript:void(0)"  @click="goSignUp">注册有礼</a>
        </li>
        
        <li class="nav-item"  v-if="loginName == null || loginName === ''">
          <span class="shu">|</span>
          <a class="link" href="javascript:void(0)" @click="goSignIn">登录</a>
        </li>


        <li class="nav-item"  v-if="loginName != null || loginName !== ''">
          {{username}}
        </li>
        
        <li class="nav-item"  v-if="loginName != null">
          <span class="shu">|</span>
          <a class="link" href="javascript:void(0)" @click.prevent="logout">退出</a>
        </li>
        
        <li class="nav-item">
          <span class="shu">|</span>
          <a class="link" href="javascript:void(0)" @click.prevent="loadPage('user-order')">我的订单</a>
        </li>
        <li class="nav-item">
          <span class="shu">|</span>
          <a class="link" href="javascript:void(0)" @click.prevent="loadPage('user-center')">我的中心</a>
        </li>
        <!-- <li class="nav-item">
          <a class="link" href="javascript:void(0)" @click.prevent="loadPage('disclaimer')">免责声明</a>
        </li>-->
        <!-- <li class="nav-item">
          <a class="link" href="javascript:void(0)" @click.prevent="loadPage('about')">关于老师好在线</a>
        </li>-->
        <!-- <li class="nav-item">
          <a class="link" href="javascript:void(0)" @click.prevent="loadPage('download')">客户端下载</a>
        </li> -->
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  created() {
    if (navigator.geolocation) {
      console.log("h5 定位中");
      navigator.geolocation.getCurrentPosition(
        function(position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
          console.log("h5定位成功；");
        },
        function(error) {
          console.log("h5定失败；");
        }
      );
    }
  },
  data() {
    return {
      isShowCity: false,
      city: '南宁'
    };
  },
  methods: {
    change(city) {
      this.city = city;
      this.isShowCity = !this.isShowCity;
    }
  },
  computed: {
    loginName() {
      return this.$store.getters.getLoginName;
    },
    username() {
      return this.$store.getters.getUserName;
    },
    
    cartList() {
      return this.$store.getters.getCartList;
    }
  }
};
</script>

<style>
.nav{
	height: 30px;
	background-color: #333333;
  color : #cfcfcf;
}
.city {
  text-align: center;
  position: relative;
  z-index: 9999;
}
.nav .link {
  color : #cfcfcf
}

.nav .link:hover {
  text-decoration:none;
  color: #E9967A;
}
.nav .register {
    width: 86px;
    height: 20px;
    /* background-color: #444444; */
    border-radius: 10px;
    top: 5px;
    position: relative;
    background: #444444 url(http://oss.lshao.cn/images/register.png) 10px center no-repeat;
}

.nav .register a{
  
    position: relative;
    top: -5px;
    left: 25px;
}
.nav .shu{
  margin-left: 10px;
  margin-right: 10px;
}
</style>

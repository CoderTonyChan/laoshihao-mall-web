<template>
  <div id="app">
    <pc-header v-show='routerShow'></pc-header>
    <router-view v-cloak></router-view>
    <pc-footer></pc-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import pcHeader from 'components/layout/header';
  import pcFooter from 'components/layout/footer';

  export default {
    data() {
      return {
        routerShow: false
      };
    },
    components: {
      pcHeader,
      pcFooter
    },
    watch: {
      '$route': 'rs'
    },
    methods: {
      rs() {
        this.routerShow = !this.$route.meta.hideMainHeader;
      },
      _isMobile() {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        return flag;
      }
    },
    mounted() {
      if (this._isMobile()) {
        // alert("手机端");
      } else {
        // alert("pc端");
      }
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  /* https://cn.vuejs.org/v2/api/#v-cloak */
  // import 引入的css中无效 在link引入的生效
  [v-cloak] {
    display: none !important;
  }

  @import './assets/styles/index.scss';
</style>

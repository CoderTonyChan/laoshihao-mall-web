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
    <div class="cart-wrap w">
      <pc-cart></pc-cart>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import pcCart from 'components/user/cart';

import store from '../../../store/';
  export default {
    beforeRouteEnter (to, from, next) {
      // console.log(to);
      // console.log(to.$store);
      
      let auth = store.getters.getAuthToken;
      auth.mergeCartFlag = false;
      store.dispatch('update_auth_token', auth);

      next();

      // document.body.scrollTop = 0;
      window.scrollTo(0,0);
    },
    data() {
      return {};
    },
    created() {
    },
    methods: {
      test() {
      }
    },
    components: {
      pcCart
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss">
</style>


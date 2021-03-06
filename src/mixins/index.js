let mixin = {
  data() {
    return {};
  },
  methods: {
    getUrlParam(name) {
      let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
      let result = window.location.search.substr(1).match(reg);
      return result ? decodeURIComponent(result[2]) : null;
    },
    loadPage(routerName, param) {
      if (param) {
        this.$router.push({name: routerName, query: param});
      } else {
        this.$router.push({name: routerName});
      }
    },
    successTips(msg) {
      alert(msg || '操作成功！');
    },
    errorTips(msg) {
      alert(msg || '哪里不对了~');
    },
    goBack() {
      this.$router.go(-1);
    },
    goHome() {
      if (process.env.NODE_ENV === 'production') {
        window.location.href = 'http://mall.lshao.cn';
      } else {
        window.location.href = 'http://dev-mall.lshao.cn:9000';
      }
      // this.loadPage('Index');
      // setInterval(() => {
      //   window.location.reload();
      // }, 10);
    },
    goSignIn() {
      console.log(`goSignIn ${process.env.NODE_ENV}`);
      if (process.env.NODE_ENV === 'production') {
        window.location.href = 'http://login.lshao.cn';
      } else {
        window.location.href = 'http://dev-login.lshao.cn';
      }
    },
    goSignUp() {
      if (process.env.NODE_ENV === 'production') {
        const inviteCode = this.getUrlParam('inviteCode');
        if (inviteCode) {
          window.location.href = `http://login.lshao.cn/registeruser?inviteCode=${inviteCode}`;
        } else {
          window.location.href = `http://login.lshao.cn/registeruser`;
        }
      } else {
        window.location.href = 'http://dev-login.lshao.cn/register';
      }
    },
    ajax(param) {
      let {type, url, data, success, isUnMusk, error} = param;
      if (!isUnMusk) {
        this.$pcNProgress.start();
      }
      this.$http({
        method: type || 'POST',
        url: url || '',
        data: data || ''
      }).then((res) => {
        this.$pcNProgress.done();
        if (success) {
          success(res);
        } else {
          this.goBack();
        }
      }).catch((err) => {
        this.$pcNProgress.done();
        this.$loading = false;
        // console.error(error);
        if (error) {
          error(err);
        }
      });
    },
    logout() {
      this.$http({
        url: '/uac/user/logout',
        method: 'post',
        params: {
          accessToken: this.$store.getters.getAccessToken
        }
      }).then(() => {
        this.$store.dispatch('delete_user_info');
        this.$store.dispatch('clear_cart');
        this.goHome();
      }).catch(() => {
        this.$store.dispatch('delete_user_info');
        this.$store.dispatch('clear_cart');
        this.goHome();
      });
    },
    // 字段的验证，支持非空、手机、邮箱的判断
    validate(value, type) {
      // 非空验证
      if (type === 'require') {
        return !!value;
      }
      // 手机号验证
      if (type === 'phone') {
        return /^1\d{10}$/.test(value);
      }
      // 邮箱格式验证
      if (type === 'email') {
        return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
      }
    }
  }
};

export default mixin;

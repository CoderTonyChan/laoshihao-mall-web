<template>
  <div>
    <div class="crumb">
      <div class="w">
        <div class="crumb-con">
          <a class="link" href="javascript:void(0)" @click.prevent="goHome">老师好在线</a>
          <span>></span>
          <span class="link-text">{{$route.meta.name}}</span>
        </div>
      </div>
    </div>
    <div class="pass-update-wrap w">
      <pc-nav-side></pc-nav-side>
      <div class="content with-nav">
        <div class="panel">
          <div class="panel-title">修改密码</div>
          <div class="panel-body" style="margin-top: 0px;">
            <div class="user-info">
              <div class="form-line">
                <span class="label">原密码：</span>
                <input
                  type="password"
                  v-model="oldPassword"
                  class="input"
                  id="password"
                  autocomplete="off"
                >
              </div>
              <div class="form-line">
                <span class="label">新密码：</span>
                <input
                  type="password"
                  class="input"
                  v-model="newPassword"
                  id="password-new"
                  autocomplete="off"
                >
              </div>
              <div class="form-line">
                <span class="label">确认密码：</span>
                <input
                  type="password"
                  class="input"
                  v-model="confirmPwd"
                  id="password-confirm"
                  autocomplete="off"
                >
              </div>
              <span class="btn btn-submit" @click="modifyUserPwd">提交</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import pcNavSide from "components/layout/nav-side";

export default {
  data() {
    return {
      confirmPwd: "",
      newPassword: "",
      oldPassword: ""
    };
  },
  created() {},
  methods: {
    modifyUserPwd() {
      if (this.oldPassword.length === 0) {
        this.$pcMessage("密码不能为空");
        return false;
      }

      if (this.newPassword !== this.confirmPwd) {
        this.$pcMessage("二次密码不一样");
        return false;
      }

      this.$http
        .post(`/uac/user/modifyUserPwd`, {
          loginName: this.$store.getters.getLoginName,
          confirmPwd: this.confirmPwd,
          newPassword: this.newPassword,
          oldPassword: this.oldPassword
        })
        .then(response => {
          if (response && response.code === 200) {
            this.$pcMessage("成功修改密码");
            this.loadPage("user-center");
            this.confirmPwd= "";
            this.newPassword= "";
            this.oldPassword= "";
          }else {
            this.$pcMessage("修改密码失败");
          }
        })
        .catch(response => {
          this.$pcMessage(response.data.message);
        });

      // this.ajax({
      //   url: `/uac/user/modifyUserPwd`,
      //   data: {
      //     loginName: this.$store.getters.getLoginName,
      //     confirmPwd: this.confirmPwd,
      //     newPassword: this.newPassword,
      //     oldPassword: this.oldPassword,
      //   },
      //   success: (res) => {
      //     console.log(res);
      //     if (res.code === 200) {

      //     }
      //   }
      // });
    }
  },
  components: {
    pcNavSide
  }
};
</script>

<template>
  <div class="forget-password">
    <h3>海外移民后台管理--忘记密码</h3>
    <div class="content">
      <Input v-model="telNum" placeholder="手机号" class="input"/>
      <Input v-model="verifyCode" placeholder="验证码" class="input">
        <span slot="append" class="pointer" @click="getVerifyCode">获取验证码</span>
      </Input>
      <Input v-model="newPw" type="password" placeholder="新密码" class="input"/>
      <Input v-model="newPwAgain" type="password" placeholder="确定新密码" class="input"/>
      <span class="fr pointer" @click="$router.push({ path: '/login/login' })">去登陆</span>
      <Button class="btn" type="primary" @click="confirm">确定修改</Button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      telNum: '',
      verifyCode: '',
      newPw: '',
      newPwAgain: '',
      id: 0
    }
  },
  created () {},
  mounted () {},
  methods: {
    getVerifyCode () {},
    confirm () {}
  },
  watch: {},
  computed: {}
}
</script>

<style lang="less" scoped>
.forget-password {
  padding: 50px 0;
  h3 {
    height: 20px;
    line-height: 20px;
    background-color: #0189ff;
    color: #fff;
    height: 40px;
    line-height: 40px;
    padding-left: 50px;
  }
  .content {
    padding: 0 50px;
    .input {
      height: 32px;
      line-height: 32px;
      margin-top: 20px;
      & /deep/ .ivu-input-group-append {
        width: 70px;
        height: 32px;
        padding: 0;
        border: 1px solid #0189ff;
        color: #0189ff
      }
    }
    .fr {
      line-height: 30px;
    }
    .btn {
      width: 100%;
      height: 40px;
    }
  }
}
</style>

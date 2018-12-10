<template>
  <div class="reset-password">
    <h3>海外移民后台管理--重置密码</h3>
    <div class="content">
      <Input v-model="oldPw" placeholder="请输入旧密码" class="input"/>
      <Input v-model="newPw" type="password" placeholder="请输入新密码" class="input"/>
      <Input v-model="newPwAggin" type="password" placeholder="确认新密码" class="input"/>
      <Button class="btn" type="primary" @click="confirm">确定修改</Button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      oldPw: '',
      newPw: '',
      newPwAggin: ''
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
.reset-password {
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
    }
    .btn {
      width: 100%;
      height: 40px;
    }
  }
}
</style>

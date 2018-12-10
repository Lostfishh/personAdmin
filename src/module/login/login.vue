<template>
  <div class="login">
    <h3>海外移民后台管理</h3>
    <div class="content">
      <div class="id-box">
        <span class="pointer" :class="{active: id === 0}" @click="id = 0">我是后台人员</span>
        <span class="pointer" :class="{active: id === 1}" @click="id = 1">我是业务员</span>
      </div>
      <Input v-model="name" placeholder="请输入账号" class="input"/>
      <Input v-model="password" placeholder="请输入密码" class="input"/>
      <span class="fr pointer" @click="$router.push({ path: '/login/forgetpw' })">忘记密码？</span>
      <Button class="btn" type="primary" @click="login">登陆</Button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      password: '',
      id: 0
    }
  },
  created () {},
  mounted () {},
  methods: {
    login () {}
  },
  watch: {},
  computed: {}
}
</script>

<style lang="less" scoped>
.login {
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
    margin-top: 30px;
    padding: 0 50px;
    .id-box {
      display: flex;
      justify-content: space-between;
      span {
        width: 45%;
        border: 1px solid #ccc;
        border-radius: 4px;
        text-align: center;
        height: 40px;
        line-height: 40px;
        color: #ccc;
        background: #fff;
        &.active {
          background: skyblue;
          color: #fff;
        }
      }
    }
    .input {
      height: 40px;
      line-height: 40px;
      margin-top: 20px;
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

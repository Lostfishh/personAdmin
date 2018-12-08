<template>
  <div class="login">
    <h3>海外移民后台管理</h3>
    <div class="content">
      <div class="id-box">
        <span class="pointer" :class="{active: id === 0}" @click="id = 0">我是后台人员</span>
        <span class="pointer" :class="{active: id === 1}" @click="id = 1">我是业务员</span>
      </div>
      <Input v-model="name" placeholder="请输入账号" style="width: 100%;"/>
      <Input v-model="password" placeholder="请输入密码" />
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
  methods: {},
  watch: {},
  computed: {}
}
</script>

<style lang="less" scoped>
.login {
  padding: 50px;
  h3 {
    height: 20px;
    line-height: 20px;
    background-color: skyblue;
    color: #fff;
    height: 40px;
    line-height: 40px;
  }
  .content {
    margin-top: 30px;
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
      width: 100%;
      height: 40px;
      line-height: 40px;
      input {
        width: 100%;
        height: 40px;
        line-height: 40px;
      }
    }
  }
}
</style>

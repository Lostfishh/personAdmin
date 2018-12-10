<template>
  <div class="login">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

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
.content {
  width: 400px;
  margin: 200px auto 0;
  background: #fff;
}
</style>

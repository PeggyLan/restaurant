<template>
  <div id="back" class="vh-100" style="padding-top:100px">
    <h1 class="text-center text-white">後台管理</h1>
    <div class="container">
      <div class="row justify-content-center">
        <vs-button class="mb-5" @click="active=!active" color="primary" type="filled">立即管理</vs-button>
      </div>
      <vs-sidebar
        position-left
        parent="body"
        default-index="1"
        color="primary"
        class="sidebarx"
        spacer
        v-model="active"
      >
        <div class="header-sidebar text-center" slot="header">
          <vs-avatar
            size="200px"
            src="./img/logo.png"/>
          <h4>Peggy's House</h4>
        </div>
        <vs-sidebar-item to="/back_message"  index="1">
          <h4>訊息管理</h4>
        </vs-sidebar-item>
        <!-- <vs-sidebar-item to="/back_news"  index="2">
          <h4>最新消息</h4>
        </vs-sidebar-item>
        <vs-sidebar-item to="/back_menu"  index="3">
          <h4>菜單</h4>
        </vs-sidebar-item> -->
        <!-- <vs-divider position="center">資料管理</vs-divider> -->
        <vs-sidebar-item to="/back_member"  index="4">
          <h4>會員資料</h4>
        </vs-sidebar-item>
      </vs-sidebar>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: false
  })
}
</script>

<style lang="stylus">
.header-sidebar
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 100%
  h4
    display flex
    align-items center
    justify-content center
    width 100%
    > button
      margin-left 10px
.footer-sidebar
  display flex
  align-items center
  justify-content space-between
  width 100%
  > button
      border 0px solid rgba(0,0,0,0) !important
      border-left 1px solid rgba(0,0,0,.07) !important
      border-radius 0px !important
</style>

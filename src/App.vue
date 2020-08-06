<template>
  <div id="app">
      <b-navbar toggleable="lg" class="fixed-top" :style="{background}">
        <router-link class="btn logo d-flex" to="/">
          <img src="../public/img/logo.png" alt="">
          <h2 class="mb-0 ml-3 mt-3">Peggy's House</h2>
        </router-link>
        <!-- <b-navbar-brand href="#">Peggy's Restaurant</b-navbar-brand> -->
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto mx-xl-auto">
            <router-link class="btn" to="/Story">
              <h6>
                <font-awesome-icon :icon="['fas','book-open']" size="1x"></font-awesome-icon>
                Story</h6>
            </router-link>
            <router-link class="btn" to="/News">
              <h6>
                <font-awesome-icon :icon="['fas','newspaper']" size="1x"></font-awesome-icon>
                News</h6>
            </router-link>
            <router-link class="btn menu" to="/menu">
              <h6 @mouseover="mouseover">
              <font-awesome-icon :icon="['fas','hamburger']" size="1x"></font-awesome-icon>
              Menu</h6>
            </router-link>
            <router-link class="btn" to="/Where">
            <h6>
              <font-awesome-icon :icon="['fas','map-marker-alt']" size="1x"></font-awesome-icon>
              Where</h6>
            </router-link>
            <router-link class="btn" to="/Contact">
            <h6>
              <font-awesome-icon :icon="['fas','envelope-open-text']" size="1x"></font-awesome-icon>
              Contact</h6>
            </router-link>
            <!----------------------------------------- 註冊 ------------------------------------------->
            <div>
              <b-button v-b-modal.modal-Sign variant="outline-info" class="mx-2" v-if="user.length === 0">Sign Up</b-button>
              <b-button variant="outline-info" class="mx-2" v-if="user === 'admin'" to="/back">後台管理</b-button>
              <b-button variant="outline-info" class="mx-2" v-if="user.length > 0 && user !== 'admin'" to="/member">會員專區</b-button>
              <b-modal id="modal-Sign"
                hide-header
                hide-footer
                :centered='Center'
                size="lg"
                button-size="sm"
                footer-class="border-top-0 d-flex justify-content-center"
                class="d-flex flex-row"
              >
                <b-row class="m-3">
                  <b-col class="col-xl-7">
                      <h3 class="text-center">Sign Up</h3>
                      <b-form @submit="Sign">
                        <b-form-group label="Name" label-for="input-name" description="名稱長度為 2 - 8 個字" invalid-feedback="名稱格式不符" :state="state('name')">
                          <b-form-input id="input-name" type="text" v-model="name" :state="state('name')">
                          </b-form-input>
                        </b-form-group>
                        <b-form-group label="Email" label-for="input-email" description="須包含 @ 符號" invalid-feedback="名稱格式不符" :state="state('email')">
                          <b-form-input id="input-email" type="text" v-model="email" :state="state('email')">
                          </b-form-input>
                        </b-form-group>
                        <b-form-group label="Phone" label-for="input-phone" description="請照實填寫，避免遺漏重要資訊 (09......)" invalid-feedback="名稱格式不符" :state="state('phone')">
                          <b-form-input id="input-phone" type="text" v-model="phone" :state="state('phone')">
                          </b-form-input>
                        </b-form-group>
                        <b-form-group label="Account" label-for="input-account" description="名稱長度為 4 - 20 個字" invalid-feedback="名稱格式不符" :state="state('account')">
                          <b-form-input id="input-account" type="text" v-model="account" :state="state('account')">
                          </b-form-input>
                        </b-form-group>
                        <b-form-group label="Password" label-for="input-password" description="密碼長度為 4 - 20 個字" invalid-feedback="密碼格式不符" :state="state('password')">
                          <b-form-input id="input-password" type="password" v-model="password" :state="state('password')">
                          </b-form-input>
                        </b-form-group>
                        <b-form-group label="Repassword" label-for="input-repassword" description="請與上層密碼相同" invalid-feedback="密碼格式不符" :state="state('repassword')">
                          <b-form-input id="input-repassword" type="password" v-model="repassword" :state="state('repassword')">
                          </b-form-input>
                        </b-form-group>
                        <b-col class="d-flex justify-content-center align-items-center">
                          <b-button type="submit" variant="primary">Sign Up</b-button>
                        </b-col>
                      </b-form>
                    </b-col>
                    <b-col class="box5 col-xl-5 text-info flex-column d-flex justify-content-center align-items-center" style="background:#FFD2D2;height:400px;border-radius:20px;color:#46A3FF;">
                      <h3>已經有帳號了嗎 ? </h3>
                      <h5>快去<a href=""> 登入</a> 吧 ! </h5>
                    </b-col>
                </b-row>
              </b-modal>
            </div>
            <!----------------------------------------- 登入 ------------------------------------------->
            <div>
              <b-button v-b-modal.modal-Login variant="outline-info" class="mx-2" v-if="user.length === 0">Login</b-button>
              <b-button variant="outline-info" class="mx-2" v-else @click="logout">Logout</b-button>
              <b-modal id="modal-Login"
                hide-header
                hide-footer
                :centered='Center'
                size="lg"
                button-size="sm"
                footer-class="border-top-0 d-flex justify-content-center"
                class="d-flex align-items-center justify-content-center"
              >
                <b-row class="m-3">
                  <b-col class="col-xl-7">
                    <h3 class="text-center">Login</h3>
                    <b-form @submit="Login">
                      <b-form-group label="帳號" label-for="input-account" description="名稱長度為 2 - 20 個字" invalid-feedback="名稱格式不符" :state="state('user_account')">
                        <b-form-input id="input-account" type="text" v-model="user_account" :state="state('user_account')">
                        </b-form-input>
                      </b-form-group>
                      <b-form-group label="密碼" label-for="input-password" description="密碼長度為 4 - 20 個字" invalid-feedback="密碼格式不符" :state="state('user_password')">
                        <b-form-input id="input-password" type="password" v-model="user_password" :state="state('user_password')">
                        </b-form-input>
                      </b-form-group>
                      <b-col class="d-flex justify-content-center align-items-center">
                        <b-button type="submit" variant="primary">Login</b-button>
                      </b-col>
                    </b-form>
                  </b-col>
                    <b-col class="text-center col-xl-5 text-info flex-column d-flex justify-content-center align-items-center" style="background:#D2E9FF;height:400px;border-radius:20px;">
                      <h3>沒有帳號 ? </h3>
                      <h6>立即<a href=""> 註冊 </a> <br> 加入我們 ， 獲得更多優惠吧 ! </h6>
                    </b-col>
                </b-row>
              </b-modal>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
        <div v-if="this.isshow" @mouseleave="mouseleave" class="menu-box d-flex justify-content-center position-fixed">
          <div class="row" style="height: 100% ">
            <div class="col-xl-4">
              <h5>主廚推薦</h5>
              <a href="#signature">精選菜色</a>
              <h5>開胃前菜</h5>
              <a href="#appeziter">開胃菜</a>
              <br>
              <a href="#salad">沙拉類</a>
            </div>
            <div class="col-xl-4" style="height: 100%">
              <h5>精選主菜</h5>
              <a href="#pasta">義大利麵</a>
              <br>
              <a href="#handcrafted-burgers">漢堡三明治</a>
              <br>
              <a href="#grill">炭烤系列</a>
            </div>
            <div class="col-xl-4" style="height: 100%">
              <h5>甜點飲品</h5>
              <a href="#desserts">甜點</a>
              <br>
              <a href="#drink">極致飲品</a>
<!--              <h5>主廚推薦</h5>-->
<!--&lt;!&ndash;              <a href="#signature">精選菜色</a>&ndash;&gt;-->
<!--               <router-link to="/menu?#signature">-->
<!--                 精選菜色-->
<!--               </router-link>-->
<!--              <h5>開胃前菜</h5>-->
<!--&lt;!&ndash;              <a href="#appeziter">開胃菜</a>&ndash;&gt;-->
<!--               <router-link to="/menu?#appeziter">-->
<!--                開胃菜-->
<!--               </router-link>-->
<!--              <br>-->
<!--&lt;!&ndash;              <a href="#salad">沙拉類</a>&ndash;&gt;-->
<!--               <router-link to="/menu?#salad">-->
<!--                 沙拉類-->
<!--               </router-link>-->
<!--            </div>-->
<!--            <div class="col-xl-4" style="height: 100%">-->
<!--              <h5>精選主菜</h5>-->
<!--&lt;!&ndash;              <a href="#pasta">義大利麵</a>&ndash;&gt;-->
<!--               <router-link to="/menu?#pasta">-->
<!--                 義大利麵-->
<!--               </router-link>-->
<!--              <br>-->
<!--&lt;!&ndash;              <a href="#handcrafted-burgers">漢堡三明治</a>&ndash;&gt;-->
<!--               <router-link to="/menu?#handcrafted-burgers">-->
<!--                 漢堡三明治-->
<!--               </router-link>-->
<!--              <br>-->
<!--&lt;!&ndash;              <a href="#grill">炭烤系列</a>&ndash;&gt;-->
<!--               <router-link to="/menu?#grill">-->
<!--                 炭烤系列-->
<!--               </router-link>-->
<!--            </div>-->
<!--            <div class="col-xl-4" style="height: 100%">-->
<!--              <h5>甜點飲品</h5>-->
<!--&lt;!&ndash;              <a href="#desserts">甜點</a>&ndash;&gt;-->
<!--               <router-link to="/menu?#desserts">-->
<!--                 甜點-->
<!--               </router-link>-->
<!--              <br>-->
<!--&lt;!&ndash;              <a href="#drink">極致飲品</a>&ndash;&gt;-->
<!--               <router-link to="/menu?#drink">-->
<!--                 極致飲品-->
<!--               </router-link>-->
            </div>
          </div>
        </div>
      <router-view/>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isshow: false,
      // scrollPosition: null,
      background: '',
      Center: true,
      password: '',
      repassword: '',
      account: '',
      name: '',
      email: '',
      phone: '',
      user_account: '',
      user_password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    mouseover () {
      console.log('location.pathname', location.pathname)
      console.log('location.hash', location.hash)
      console.log('location.href', location.href)
      if (location.hash !== '#/menu') {
        if (location.hash === '#/signature' || location.hash === '#/appeziter' || location.hash === '#/salad' ||
            location.hash === '#/pasta' || location.hash === '#/handcrafted-burgers' || location.hash === '#/grill' ||
            location.hash === '#/desserts' || location.hash === '#/drink') {
          console.log('1in')
          if (!this.isshow) this.isshow = true
          document.getElementsByClassName('menu-box').style.display = ''
        } else {
          console.log('2in')
          document.getElementsByClassName('menu-box').style.display = 'none'
        }
      }
      if (!this.isshow) this.isshow = true
    },
    mouseleave () {
      // console.log('==========================')
      // console.log('AA')
      // console.log('location.pathname', location.pathname)
      // console.log('location.hash', location.hash)
      // console.log('location.href', location.href)
      // console.log('==========================')
      //
      // let _hash = ''
      // if (location.hash !== '#/menu') {
      //   console.log('in*')
      //   _hash = location.hash.replace('#/menu', '')
      //   if (_hash) {
      //     console.log(_hash)
      //     location.href = 'http://localhost:8080/' + _hash
      //   } else {
      //     console.log('in-')
      //     location.href = '#/menu'
      //   }
      // }
      if (this.isshow) this.isshow = false
    },
    state (type) {
      if (type === 'account') {
        if (this.account.length === 0) {
          return null
        } else {
          if (this.account.length < 2 || this.account.length > 10) {
            return false
          } else {
            return true
          }
        }
      } else if (type === 'password') {
        if (this.password.length === 0) {
          return null
        } else {
          if (this.password.length < 4 || this.password.length > 20) {
            return false
          } else {
            return true
          }
        }
      } else if (type === 'repassword') {
        if (this.repassword.length === 0) {
          return null
        } else {
          if (this.repassword === this.password) {
            return true
          } else {
            return false
          }
        }
      } else if (type === 'name') {
        if (this.name.length === 0) {
          return null
        } else {
          if (this.name.length < 2 || this.name.length > 8) {
            return false
          } else {
            return true
          }
        }
      } else if (type === 'email') {
        if (this.email.length === 0) {
          return null
        } else {
          return this.email.includes('@')
        }
      } else if (type === 'phone') {
        if (this.phone.length === 0) {
          return null
        } else {
          if (this.phone.includes('09') && this.phone.length === 10) {
            return true
          } else {
            return false
          }
        }
      }
    },
    Sign (event) {
      event.preventDefault()
      if (this.account.length < 4 || this.account.length > 20) {
        alert('帳號格式不符')
      } else if (this.password.length < 4 || this.password.length > 20) {
        alert('密碼格式不符')
      } else if (this.name.length < 2 || this.name.length > 8) {
        alert('姓名格式不符')
      } else if (!this.email.includes('@')) {
        alert('信箱格式不符')
      } else if (!this.phone.includes('09') && this.phone.length !== 10) {
        alert('電話格式不符，僅能為數字，且須09開頭')
      } else {
        this.axios.post(
          process.env.VUE_APP_APIURL + '/users',
          { account: this.account, password: this.password, name: this.name, email: this.email, phone: this.phone }
        )
          .then(response => {
            const data = response.data
            if (data.success) {
              // 如果回來的資料 success 是 true
              alert('註冊成功')
            } else {
              // 不是就顯示回來的 message
              alert(data.message)
            }
          })
          .catch(error => {
            // 如果回來的狀態不是 200，顯示回來的 message
            alert(error.response.data.message)
          })
      }
    },
    Login (event) {
      event.preventDefault()
      if (this.user_account.length < 2 || this.user_account.length > 10) {
        alert('帳號格式不符')
      } else if (this.user_password.length < 4 || this.user_password.length > 20) {
        alert('密碼格式不符')
      }
      this.axios.post(
        process.env.VUE_APP_APIURL + '/login',
        { account: this.user_account, password: this.user_password }
      )
        .then(response => {
          const data = response.data
          if (data.success) {
            // 如果回來的資料 success 是 true
            alert('登入成功')
            // 呼叫 vuex 的登入
            this.$store.commit('login', this.user_account)
            // document.getElementsByClassName('sign').style.display = 'none'
            // 跳到登入後的相簿頁
            // this.$router.push('/')
            if (this.user_account === 'admin') {
              this.$router.push('/back')
            } else {
              this.$router.push('/member')
            }
          } else {
            // 不是就顯示回來的 message
            alert(data.message)
          }
        })
        .catch(error => {
          // 如果回來的狀態不是 200，顯示回來的 message
          alert(error.response.data.message)
        })
    },
    logout () {
      this.axios.delete(process.env.VUE_APP_APIURL + '/logout')
        .then(response => {
          const data = response.data
          if (data.success) {
            // 如果回來的資料 success 是 true
            alert('登出成功')
            // 呼叫 vuex 的登入
            this.$store.commit('logout')
            // 如果現在不是在首頁，跳到登出後的首頁
            if (this.$route.path !== '/') {
              this.$router.push('/')
            }
          } else {
            // 不是就顯示回來的 message
            alert(data.message)
          }
        })
        .catch(error => {
          // 如果回來的狀態不是 200，顯示回來的 message
          alert(error.response.data.message)
        })
    }
  },
  mounted () {
    const _this = this
    window.onscroll = () => {
      console.log(document.body.clientWidth)
      if (window.scrollY > 80) {
        if (document.body.clientWidth > 992) { _this.background = 'black' }
      } else {
        _this.background = ''
      }
    }
  }
}
</script>

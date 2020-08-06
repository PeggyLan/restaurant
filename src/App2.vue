<template>
  <div id="app">
      <b-navbar toggleable="lg" class="fixed-top" :style="{background}">
        <router-link class="btn logo" to="/">
          <h2 class="m-0">Peggy's Restaurant</h2>
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
              <b-button v-b-modal.modal-Sign variant="outline-info" class="mx-2">Sign Up</b-button>
              <b-modal id="modal-Sign"
                hide-header
                hide-footer
                :centered='Center'
                size="lg"
                button-size="sm"
              >
                <b-row class="m-3 d-flex flex-column">
                  <b-col class="col-xl-7">
                      <h3 class="text-center">Sign Up</h3>
                      <b-form @submit="Sign">
                        <b-form-group label="名稱" label-for="input-account" description="名稱長度為 2 - 10 個字" invalid-feedback="名稱格式不符" :state="state('account')">
                          <b-form-input id="input-account" type="text" v-model="account" :state="state('account')">
                          </b-form-input>
                        </b-form-group>
                        <b-form-group label="密碼" label-for="input-password" description="密碼長度為 4 - 20 個字" invalid-feedback="密碼格式不符" :state="state('password')">
                          <b-form-input id="input-password" type="password" v-model="password" :state="state('password')">
                          </b-form-input>
                        </b-form-group>
                        <b-form-group label="確認密碼" label-for="input-repassword" description="密碼長度為 4 - 20 個字" invalid-feedback="密碼格式不符" :state="state('password')">
                          <b-form-input id="input-repassword" type="password" v-model="repassword" :state="state('repassword')">
                          </b-form-input>
                        </b-form-group>
                      </b-form>
                    </b-col>
                    <b-col class="member-box p-2 my-2 col-xl-5 text-info flex-column d-flex justify-content-center align-items-center" style="background:#FFD2D2;border-radius:20px;color:#46A3FF;">
                      <h2>已經有帳號了嗎 ? </h2>
                      <h5>快去<a href="">登入</a>吧 ! </h5>
                    </b-col>
                </b-row>
                  <b-col class="d-flex justify-content-center align-items-center">
                    <b-button type="submit" variant="primary">Sign Up</b-button>
                  </b-col>
              </b-modal>
            </div>
            <!----------------------------------------- 登入 ------------------------------------------->
            <div>
              <b-button v-b-modal.modal-Login variant="outline-info" class="mx-2">Login</b-button>
              <b-modal id="modal-Login"
                hide-header
                hide-footer
                :centered='Center'
                size="lg"
                button-size="sm"
              >
                <b-row class="m-3 d-flex flex-column">
                  <b-col class="col-xl-7">
                    <h3 class="text-center">Login</h3>
                    <b-form @submit="Login">
                      <b-form-group label="名稱" label-for="input-account" description="名稱長度為 2 - 20 個字" invalid-feedback="名稱格式不符" :state="state('account')">
                        <b-form-input id="input-account" type="text" v-model="account" :state="state('account')">
                        </b-form-input>
                      </b-form-group>
                      <b-form-group label="密碼" label-for="input-password" description="密碼長度為 4 - 20 個字" invalid-feedback="密碼格式不符" :state="state('password')">
                        <b-form-input id="input-password" type="password" v-model="password" :state="state('password')">
                        </b-form-input>
                      </b-form-group>
                    </b-form>
                  </b-col>
                    <b-col class="member-box p-2 my-2 col-xl-5 text-info flex-column d-flex justify-content-center align-items-center" style="background:#D2E9FF;height:400px;border-radius:20px;">
                      <h2>沒有帳號 ? </h2>
                      <h6>立即<a href="">註冊</a>加入我們</h6>
                      <h6>獲得更多優惠吧 !</h6>
                    </b-col>
                </b-row>
                  <b-col class="d-flex justify-content-center align-items-center">
                    <b-button type="submit" variant="primary">Login</b-button>
                  </b-col>
              </b-modal>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
        <div v-if="this.isshow" @mouseleave="mouseleave" class="menu-box d-flex justify-content-center position-fixed">
          <div class="row" style="height: 100% ">
            <div class="col-xl-4">
              <h5>主廚推薦</h5>
              <!-- <router-link to="/menu"> -->
              <a href="#signature">精選菜色</a>
              <!-- </router-link> -->
              <h5>開胃前菜</h5>
              <!-- <router-link to="/"> -->
              <a href="#appeziter">開胃菜</a>
              <!-- </router-link> -->
              <br>
              <!-- <router-link to="/"> -->
              <a href="#salad">沙拉類</a>
              <!-- </router-link> -->
            </div>
            <div class="col-xl-4" style="height: 100%">
              <h5>精選主菜</h5>
              <!-- <router-link to="/"> -->
              <a href="#pasta">義大利麵</a>
              <!-- </router-link> -->
              <br>
              <!-- <router-link to="/"> -->
              <a href="#handcrafted-burgers">漢堡三明治</a>
              <!-- </router-link> -->
              <br>
              <!-- <router-link to="/"> -->
              <a href="#grill">炭烤系列</a>
              <!-- </router-link> -->
            </div>
            <div class="col-xl-4" style="height: 100%">
              <h5>甜點飲品</h5>
              <!-- <router-link to="/"> -->
              <a href="#desserts">甜點</a>
              <!-- </router-link> -->
              <br>
              <!-- <router-link to="/"> -->
              <a href="#drink">極致飲品</a>
              <!-- </router-link> -->
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
      account: ''
    }
  },
  methods: {
    mouseover () {
      if (location.hash !== '#/menu') {
        console.log('in')
        document.getElementsByClassName('menu-box').style.display = 'none'
      }
      if (!this.isshow) this.isshow = true
    },
    mouseleave () {
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
      }
    },
    Sign (event) {
      event.preventDefault()
      if (this.account.length < 4 || this.account.length > 20) {
        alert('帳號格式不符')
      } else if (this.password.length < 4 || this.password.length > 20) {
        alert('密碼格式不符')
      }
      this.axios.post(
        process.env.VUE_APP_APIURL + '/users',
        { account: this.account, password: this.password }
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
    },
    Login (event) {
      event.preventDefault()
      if (this.account.length < 4 || this.account.length > 20) {
        alert('帳號格式不符')
      } else if (this.password.length < 4 || this.password.length > 20) {
        alert('密碼格式不符')
      }
      this.axios.post(
        process.env.VUE_APP_APIURL + '/login',
        { account: this.account, password: this.password }
      )
        .then(response => {
          const data = response.data
          if (data.success) {
            // 如果回來的資料 success 是 true
            alert('登入成功')
            // 呼叫 vuex 的登入
            this.$store.commit('login', this.account)
            // 跳到登入後的相簿頁
            this.$router.push('album')
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
      if (window.scrollY > 80) {
        _this.background = 'black'
      } else {
        _this.background = ''
      }
    }
  }
}
</script>

<template>
  <div>
    <form class="login_form">
        <label >Username:</label>
        <input type="text" v-model="loginForm.username">
        <label >Password:</label>
        <input type="password" v-model="loginForm.password">
    </form>
    <div class="login_action_status">
      <button class="login_button" v-if="!in_progress" @click="handleLogin">Login</button>
      <p class="login_message" v-if="!login_message===''"></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      in_progress: false,
      loginForm: {
        username: '',
        password: ''
      },
      login_message: ''
    }
  },
  methods: {
    handleLogin () {
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        return false
      }
      localStorage.removeItem('Authorization')
      this.in_progress = true
      this.login_message = 'Login in progress…'
      const data = {
        username: this.loginForm.username,
        // password: AES256.encrypt(this.loginForm.password, GLOBAL.AES256KEY),
        password: this.loginForm.password
        //! FIXME for the purpose of this demo, password sent directy
      }
      const proto = this
      this.$axios.post(proto.$API.LOGIN, data).then(res => {
        const { Authorization } = res.data
        if (typeof token === 'undefined') {
          console.log(res.data.message)
          proto.login_message('login details incorrect, see details in console')
        } else {
          window.sessionStorage.setItem('Authorization', JSON.stringify(Authorization))
          proto.$router.push({ path: 'schedule' })
        }
      })
    }
  }

}
</script>

<style>
</style>

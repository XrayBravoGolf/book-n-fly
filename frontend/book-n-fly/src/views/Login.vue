<template>
  <div>
    <form class="login_form">
        <label >Username:</label>
        <input type="text" v-model="loginForm.username">
        <label >Password:</label>
        <input type="password" v-model="loginForm.password"> 
    </form>
    <div class="login_action_status">
      <button class="login_button" v-if="!in_progress" @click="handleLogin">
  </div>
</template>

<script>
export default {
  data () {
    return {
      in_progress: false,
      loginForm:{
        username:'',
        password:'',
      }
    }
  }
}
</script>

<style>
</style>
